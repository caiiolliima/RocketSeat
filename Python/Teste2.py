import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Simulação de dados do backtesting com pivot points
# Considerando performance anterior para calcular resultados em pontos

# Dados simulados baseados em informações resumidas:
# Trades, taxa de acerto, lucro anual (%), e drawdown máximo.

# Assumindo 1 ponto = 1 pip para conversão
# Inicialmente, configuramos algumas constantes
initial_balance = 100000  # Saldo inicial em USD
lot_size = 1  # Tamanho de lote padrão
point_value = 10  # Valor de 1 ponto em USD

# Dados simulados para o backtesting
years = [2020, 2021, 2022, 2023, 2024]
trades_per_year = [150, 140, 130, 145, 155]
win_rate = [0.65, 0.68, 0.70, 0.67, 0.66]
profit_percent = [12, 15, 18, 14, 13]
max_drawdown_percent = [8, 7, 6, 7, 8]

# Função para calcular pontos obtidos por ano
def calculate_points(profit_percent, balance, point_value):
    profit_usd = balance * (profit_percent / 100)
    return profit_usd / point_value

# Processando os dados
points_per_year = [calculate_points(p, initial_balance, point_value) for p in profit_percent]

# Criando dataframe para visualização
backtesting_results = pd.DataFrame({
    "Year": years,
    "Trades": trades_per_year,
    "Win Rate (%)": [w * 100 for w in win_rate],
    "Profit (%)": profit_percent,
    "Max Drawdown (%)": max_drawdown_percent,
    "Points Gained": points_per_year
})

# Plotando os resultados
plt.figure(figsize=(10, 6))
plt.bar(backtesting_results["Year"], backtesting_results["Points Gained"], color='gold', alpha=0.7)
plt.title("Backtesting - Points Gained per Year (XAUUSD)", fontsize=14)
plt.xlabel("Year", fontsize=12)
plt.ylabel("Points Gained", fontsize=12)
plt.grid(alpha=0.3)
plt.show()

backtesting_results
