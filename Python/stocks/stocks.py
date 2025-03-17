import yfinance as yf
import pandas as pd
import os

# Definir o caminho correto do arquivo
file_path = "stocks/acoes.xlsx"

# Verificar se o arquivo existe
if not os.path.exists(file_path):
    print(f"Erro: O arquivo '{file_path}' não foi encontrado!")
    exit()  # Para o script se o arquivo não existir

# Carregar planilha
df = pd.read_excel(file_path)

# Atualizar preços
for index, row in df.iterrows():
    ticker = row["Ticker"]
    stock = yf.Ticker(ticker)
    hist = stock.history(period="2d")  # Pega os últimos 2 dias
    
    if not hist.empty:
        df.at[index, "Fechamento Anterior"] = hist["Close"].iloc[-2]  # Fechamento do dia anterior

# Salvar de volta no Excel
df.to_excel(file_path, index=False)

print("Planilha atualizada com sucesso!")
