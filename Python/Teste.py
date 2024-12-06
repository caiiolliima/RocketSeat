# Definindo parâmetros para otimização e backtesting em múltiplos timeframes

import pandas as pd
import numpy as np
import MetaTrader5 as mt5

# Conectar-se ao MetaTrader 5
mt5.initialize()

# Especificar o símbolo e o período desejados
symbol = "XAUUSD"
timeframe = mt5.TIMEFRAME_H1

historical_data = mt5.copy_rates_from_pos(symbol, timeframe, 0, 100000)


# Parâmetros para otimização
timeframes = ['M15', 'M30', 'D1']  # Timeframes para testar
ema_curta_range = range(5, 16)  # EMA curta entre 5 e 15 períodos
ema_longa_range = range(20, 51)  # EMA longa entre 20 e 50 períodos
tp_range = [30, 50, 70, 100]  # Diferentes valores de TP em pontos
sl_range = [1.5, 2.0]  # SL em múltiplos do tamanho do candle gatilho
rsi_filter = 50  # Filtro RSI para limitar as entradas
atr_min = [0.5, 0.75, 1.0]  # ATR mínimo para filtrar sinais

# Resultados de backtesting para armazenar
results = []

# Função para simular o backtesting
def simulate_backtest(tf, ema_curta, ema_longa, tp, sl, atr_value):
    # Simulação fictícia (resultado em pontos e drawdown baseado em parâmetros)
    # Para fins ilustrativos, vamos gerar resultados aleatórios que simulam as condições de mercado
    np.random.seed(42)  # Definir semente para reprodutibilidade
    trades = np.random.randint(200, 500)  # Número de trades (aleatório entre 200 e 500)
    win_rate = np.random.uniform(0.45, 0.60)  # Taxa de acerto (aleatória entre 45% e 60%)
    avg_profit = np.random.uniform(6.0, 18.0)  # Lucro médio por trade (aleatório entre 6 e 18 pontos)
    max_drawdown = np.random.uniform(7.0, 12.0)  # Drawdown máximo (aleatório entre 7% e 12%)
    total_profit = int(trades * win_rate * avg_profit)  # Lucro total baseado em trades, taxa de acerto e lucro médio
    
    # Armazenar os resultados simulados
    result = {
        'Timeframe': tf,
        'EMA Curta': ema_curta,
        'EMA Longa': ema_longa,
        'TP': tp,
        'SL': sl,
        'ATR Mínimo': atr_value,
        'Total Trades': trades,
        'Win Rate': win_rate * 100,
        'Avg Profit (Points)': avg_profit,
        'Max Drawdown (%)': max_drawdown,
        'Total Profit (Points)': total_profit
    }
    results.append(result)

# Rodar simulações para os diferentes parâmetros
for tf in timeframes:
    for ema_curta in ema_curta_range:
        for ema_longa in ema_longa_range:
            for tp in tp_range:
                for sl in sl_range:
                    for atr in atr_min:
                        simulate_backtest(tf, ema_curta, ema_longa, tp, sl, atr)

# Converter os resultados para um DataFrame
df_results = pd.DataFrame(results)

df_results.sort_values(by='Total Profit (Points)', ascending=False, inplace=True)

df_results.head()  # Exibir as melhores combinações para um rápido overview



df = pd.DataFrame(historical_data)

df['Signal'] = 0

# Calcular os retornos da estratégia
df['Returns'] = df['close'].pct_change()
df['Strategy'] = df['Signal'].shift(1) * df['Returns']

# Calcular o retorno acumulado
df['Cumulative_Returns'] = (1 + df['Returns']).cumprod()
df['Cumulative_Strategy'] = (1 + df['Strategy']).cumprod()

# Plotar resultados
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 6))
plt.plot(df['Cumulative_Returns'], label='Buy and Hold', color='blue')
plt.plot(df['Cumulative_Strategy'], label='Strategy', color='red')
plt.legend()
plt.show()

# Desconectar do MetaTrader 5
mt5.shutdown()