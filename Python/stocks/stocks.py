import yfinance as yf
import pandas as pd
import datetime

def calcular_portfolio(acoes_br, acoes_eua, aporte_mensal, data_inicio, data_fim):
    """
    Calcula o valor do portfólio ao longo do tempo.
    """
    portfolio = {}
    for acao in acoes_br + acoes_eua:
        portfolio[acao] = {'quantidade': 0, 'valor_investido': 0}

    data_atual = data_inicio
    while data_atual <= data_fim:
        # 1. Obtenção de dados das ações
        dados_acoes_br = yf.download(acoes_br, start=data_atual, end=data_atual)
        dados_acoes_eua = yf.download(acoes_eua, start=data_atual, end=data_atual)

        # 2. Cálculo do Dividend Yield (DY)
        acoes_dy = {}
        for acao in acoes_br + acoes_eua:
            try:
                ticker = yf.Ticker(acao)
                dados_fundamentalistas = ticker.info
                dy = dados_fundamentalistas.get('dividendYield')
                if dy:
                    acoes_dy[acao] = dy
            except Exception as e:
                print(f"Erro ao obter dados fundamentalistas de {acao}: {e}")

        # 3. Seleção de ações
        acoes_selecionadas = [acao for acao, dy in acoes_dy.items() if 0.06 <= dy <= 0.08]

        # 4. Cálculo dos dividendos recebidos
        # 5. Reinvestimento dos dividendos
        # 6. Aporte mensal
        # 7. Cálculo do valor do portfólio
        # (Implementar lógicas para cada etapa)

        data_atual += datetime.timedelta(days=30)  # Avança 1 mês

    # 8. Exibição dos resultados
    # (Implementar lógica para exibir os resultados)

    return portfolio

# Exemplo de uso
acoes_br = ['PETR4', 'VALE3']
acoes_eua = ['AAPL', 'MSFT']
aporte_mensal = 1500
data_inicio = datetime.datetime(2024, 1, 1)  # 15 anos atrás
data_fim = datetime.datetime(2025, 1, 1)

resultado = calcular_portfolio(acoes_br, acoes_eua, aporte_mensal, data_inicio, data_fim)
print(resultado)