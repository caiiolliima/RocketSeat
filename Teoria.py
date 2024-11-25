# numero_inteiro = 3

# numero_real = 500.50

# print("O numero inteiro é = ", numero_inteiro, "E o tipo do número inteiro é: ", type(numero_inteiro))
# print("O numero real é = ", numero_inteiro, "E o tipo do número real é: ", type(numero_real))

#Tipos de formatação de textos

# nome_Completo = "Caio Lima"

# print("Nome completo (1ª forma):", nome_Completo)

# print(nome_Completo.count("C"))

# print(nome_Completo.find("a"))

# print(nome_Completo.encode())

# print(nome_Completo.encode().decode())

# minha_tupla = (1, 2, 3, 4, 5)

# print("Minha tupla:", minha_tupla)

# print("Meu primeiro elemento[0]:", minha_tupla[0])
# print("Meu segundo elemento[2]:", minha_tupla[2])
# print("Meu elemento[-1]:", minha_tupla[-1])

#Metodo count

# contagem = minha_tupla.count(2)

# print("Quantidade que aparece na tupla: ", contagem)

#Metodo index

# indice = minha_tupla.index(3)

# print("Indice da primeira ocorrência do elemento 3: ", indice)

# pessoa = {"nome": "Caio", "idade": 28, "cidade": "Piracicaba"}

# print ("Meu dicionário de exemplo: ", pessoa)

# print("Nome: ", pessoa["nome"])
# print("Idade: ", pessoa["idade"])
# print("Cidade: ", pessoa["cidade"])

# pessoa["sobrenome"] = "Lima"

# print("Sobrenome: ", pessoa["sobrenome"])

# print ("Meu dicionário de exemplo: ", pessoa)

# pessoa["idade"] = 29

# print("Idade atualizada: ", pessoa["idade"])

#Removendo um par chave valor

# del pessoa["sobrenome"]

# print ("Meu dicionário de exemplo: ", pessoa)


#Metodo keys(), values(), items()

# chaves = list(pessoa.keys()) #Transformando um dicionário em uma lista usando a função list()

# print("Chaves do dicionário: ", chaves)

# print("Primeira chave: ", chaves[0])

#Values

# valores = list(pessoa.values())

# print("Valores do dicionário: ", valores)

# print("Primeiro valor: ", valores[0])

#Items

# itens = list(pessoa.items())

# print("Pares chaves-valor do dicionário: ", itens)

# print("Primeira chave-valor: %s = %s " % (itens[0][0], itens[0][1]))


#if, elif, else

#Exemplo de if

# idade = 18

# print("Exemplo de comando if")
# 0
# if idade >= 18:
#     print("É maior de idade!")
# elif idade >= 12:
#     print("Você é um adolescente")
# else:
#     print("Você é menor de idade")

# if idade == 19:
#     print("Você tem 19 anos!")

# if idade <= 18:
#     print("Você é menor de idade!")

# if idade != 10:
#     print("Você não tem 10 anos")

# mensagem = "Pode tirar a carteira de habilitação" if idade >= 18 else "Você não pode tirar a carteira de habilitação"

# print(mensagem)


# idade = int(input('Quantos anos você tem? '))

# if idade > 18:
#     print("Você é maior de idade!")
# elif idade == 18:
#     print("Você é maior de idade!")
# elif idade < 18:
#     print("Você é menor de idade!")

#laço "for"

# lista = [1, 2, 3, 4, 5]

#Usar o "for" para iterar em uma lista
# print("For utilizando lista")
# for elemento in lista:
#     print(elemento)

#Usando exemplo uma tupla

# print("For utilizando tupla")
# tupla = (1, 2, 3, 4, 5)

# for elemento in tupla:
#     print(elemento)


# pessoa = {"Nome": "Caio", "Idade ": 28, "Cidade ": "Piracicaba"}

# print("\nFor utilizando dicionário - chaves")

# for chave in pessoa.keys():
#     print(chave)

# print("\nFor utilizando dicionário - valor")
# for valor in pessoa.values():
#     print(valor)

# print("\nFor utilizando dicionário - chave-valor")

# for chave, valor in pessoa.items():
#     print(f"{chave}: {valor}")


#range(): Intervalo numerico em formato de lista

#[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# print("\nUtilizando a função range()")

# for numero in range(11):
#     print("Numero: ", numero)

#range() com len()

# print("\nUtilizando a funcão range() com len()")

# lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# print(lista)

# for indice in range(0, len(lista)):
#     print("Indice:", indice)
#     print("Elemento: ", lista[indice])
#Necessário comentar as linhas 183 e 184 para funcionar o bloco abaixo
#     if indice == 5:
#         lista[indice] = 10
#     else:
#         lista[indice] = 0

# print(lista)

#enumerate

# lista_enumerate = ["a", "b", "c"]

# for indice, valor in enumerate(lista_enumerate):
#     print(F"{indice}: {valor}")

#     if indice == 1:
#         print("Indice 1")

# print("\nExemplo de while")

# contador = 0

# while contador < 5:
#     print("Contagem: ", contador)
#     # contador = contador + 1  Pode ser usado como "+=" para acrescentar e "-=" para decrementar
#     contador += 1
#     # contador -= 1 
#     if contador == 4:
#         break

# print("\nPrograma finalizado")zzzzz

#Funções

# def saudacao(nome):

#     print(f"Olá, {nome}!")

# print("\nChamando a função saudação\n")

# saudacao("Caio")
# saudacao("Maria")

# def quadrado(numero):
#     resultado = numero ** 2
#     return resultado

# print("\n Chamando função 'quadrado'\n")

# resultado_quadrado = quadrado(2)

# print("\n Resultado da função quadrado: ", resultado_quadrado)

# def soma(numero1, numero2):
    
#     resultado = numero1 + numero2

#     return resultado

# print("\n Chamando a função soma \n")

# numero1 = 20
# numero2 = 50

# resultado_soma = soma(numero1, numero2)

# print(f"\n A soma do {numero1} mais o {numero2} é: ", resultado_soma)

#Exceções

# print("Exemplo de captura de exceções")

# numero = int(input("Digite um número inteiro: "))

# resultado = 10 / numero

# print(resultado)

#Try except (Try catch)

# while True:
#     try:
#         numero =  int(input("Digite um número inteiro: "))

#         resultado = 10 / numero

#         print(resultado)

#     except ValueError as error:
#         print(f"Erro de value error: {error}")

#         raise ValueError("Tipo de variaveis incompativeis")
    
#     except Exception as e:
#         print(f"Erro: {e}")
#     else:
#         print(f"Resultado: {resultado}")
#     finally:
#         print("Operacao finalizada")

# Módulos (Importação de modulos)

# print("Exemplo de importação de modulo padrão: \n")

# import math #Importando uma biblioteca inteira
# from math import sqrt #Importando uma função de uma biblioteca

# raiz_quadrada = sqrt(25)

# print(f"A raiz quadrada é: {raiz_quadrada}\n")

# print("Exemplo de criação e utilização de um módulo personalizado: \n")

# import meu_modulo #Importando uma biblioteca inteira

# from meu_modulo import saudacao, dobro

# nome1 = saudacao("Caio")

# resultado_dobro_cinco = dobro(5)

# print(nome1)
# print(resultado_dobro_cinco)

# print("\n Importação e uso de um módulo de terceiros")

# from requests import get

# url = "https://www.example.com"

# response = get(url)

# print(f"Solicitação HTTPS para a {url} retorno o status: {response.status_code}")
