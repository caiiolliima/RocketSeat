import yfinance as yf
import pandas as pd
import backtrader as bt
import matplotlib as plt

stock = "INTC"
start_date = "2025-03-06"
end_date = "2025-03-07"


data = yf.download(stock, start=start_date, end=end_date)

print(data.head())