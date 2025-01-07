# #Quando esta fora de uma classe é uma função e quando esta dentro é um método
# #Atributos
# class Pessoa:
#     def __init__(self, nome, idade) -> None: # "-> None" significa que o método não tem retorno.
#         self.nome = nome
#         self.idade = idade
    
#     def saudacao(self):
#         return f"Olá, meu nome é {self.nome} e minha idade é {self.idade} anos!"

# #Objetos

# pessoa1 = Pessoa("Caio", 28)

# mensagem = pessoa1.saudacao()

# print(mensagem)

# pessoa2 = Pessoa("Camila", 24)

# mensagem = pessoa2.saudacao()

# print(mensagem)

# print("\nExemplo de herança: ")

# class Animal:
#     def __init__(self, nome) -> None:
#         self.nome = nome

#     def andar(self):
#         print(f"O animal {self.nome} andou ")
#         return

#     def emitir_som(self):
#         pass

# class Cachorro(Animal):
#     def emitir_som(self):
#         return "Au, au"
    
# class Gato(Animal):
#     def emitir_som(self):
#         return "Miau"

# dog = Cachorro("Olga")
# cat = Gato("Shark")

# print("\nExemplo de polimorfismo:")

# animais = [dog, cat]

# for animal in animais:
#     print(f"{animal.nome} faz: {animal.emitir_som()}")

# print("\nExemplo de encapsulamento:")

# class ContaBancaria:
#     def __init__(self, saldo) -> None:
#         self.__saldo = saldo #Tornando um atributo privado

#     def depositar(self, valor):
#         if valor > 0:
#             self.__saldo += valor
    
#     def sacar(self, valor):
#         if valor > 0 and valor <= self.__saldo:
#             self.__saldo -= valor

#     def consultar(self):
#         return self.__saldo
    
# conta = ContaBancaria(1000)

# print(f"Saldo na conta:  {conta.consultar()}")

# conta.depositar(500)

# print(f"Saldo na conta:  {conta.consultar()}")

# conta.depositar(-500)

# print(f"Saldo na conta:  {conta.consultar()}")

# conta.sacar(200)

# print(f"Saldo na conta:  {conta.consultar()}")

# print("\nConta Bancaria Caio:")

# conta_Caio = ContaBancaria(0)

# print(f"Saldo na conta:  {conta_Caio.consultar()}")

# conta_Caio.depositar(100)

# print(f"Saldo na conta:  {conta_Caio.consultar()}")

# conta_Caio.sacar(200)

# print(f"Saldo na conta:  {conta_Caio.consultar()}")

# print("\nExemplo de abstração")

# from abc import ABC, abstractmethod

# class Veiculo(ABC):

#     @abstractmethod
#     def ligar(self):
#         pass

#     @abstractmethod
#     def desligar(self):
#         pass

# class Carro(Veiculo):

#     def __init__(self) -> None:
#         pass
    
#     def ligar(self):
#         return "Carro ligado usando a chave"
    
#     def desligar(self):
#         return "Carro desligado usando a chave"

# carro_amarelo = Carro()
# carro_amarelo.ligar()
# carro_amarelo.desligar()

# print(carro_amarelo.ligar())
# print(carro_amarelo.desligar())

# class Animal:
#     def __init__(self, nome) -> None:
#         self.nome = nome

#     def emitir_som(self):
#         pass

# class Mamifero(Animal):
#     def amamentar(self):
#         return f"{self.nome} esta amamentado (laele-eterno)"

# class Ave(Animal):
#     def voar(self):
#         return f"{self.nome} esta voando (ta na disney)"
    
# class Morcego(Mamifero, Ave):
#     def emitir_som(self):
#         return "Morcegos emitem sons ultrassônicos"

# morcego = Morcego("Batman")

# #Acessando os metódos da classe animal:

# print("Nome do morcego:", morcego.nome)
# print("Som do morcego: ", morcego.emitir_som()) 

# print("Morcego amamentando:", morcego.amamentar())
# print("Morcego voando:", morcego.voar())

# def meu_decorador(func):
#     def wrapper():
#         print("Antes da função ser chamada")
#         func()
#         print("Depois da função ser chamada")
#     return wrapper

# @meu_decorador
# def minha_funcao():
#     print("Minha função foi chamada")

# minha_funcao()

# class MeuDecoradorDeClasse:
#     def __init__(self, func) -> None:
#         self.func = func

#     def __call__(self):
#         print("Antes da função ser chamada (decorador de classe)")
#         self.func()
#         print("Depois da função ser chamada (decorador de classe)")

# @MeuDecoradorDeClasse
# def segunda_funcao():
#     print("Segunda função foi chamada")

# segunda_funcao()

# #Decoradores comum

# class MinhaClasse:
#     valor = 10
#     def __init__(self, nome) -> None:
#         self.nome = nome

#     #Metodo requer uma instãncia para ser chamado
#     def metodo_istancia(self):
#         return f"Metodo de instância chamado para {self.valor}"
    
#     @classmethod
#     def metodo_classe(cls):
#         return f"Metodo de classe chamado para valor={cls.valor}"
    
#     @staticmethod
#     def metodo_estatico():
#         return "Método estático chamado"

# obj = MinhaClasse("Classe Exemplo")

# print(obj.metodo_istancia())
# print(MinhaClasse.valor)
# print(MinhaClasse.metodo_classe())
# print(MinhaClasse.metodo_estatico())


# class Carro:
#     def __init__(self, marca, modelo, ano) -> None:
#             self.marca = marca
#             self.modelo = modelo
#             self.ano = ano
    
#     @classmethod
#     def criar_carro(cls, configuracao):
#          marca, modelo, ano = configuracao.split(",")
#          return cls(marca, modelo, int(ano))
    
# configuracao1 = "Toyota,Corolla,2024"

# carro1 = Carro.criar_carro(configuracao1)

# print(F"Marca:{carro1.marca} \nModelo:{carro1.modelo} \nAno:{carro1.ano}")
