#Iniciando a função de adicionar um contato
def adicionar_contato(contatos, nome_contato, numero_telefone, email):

    #tarefa: nome da tarefa
    #completada: indicar se a tarefa foi completada ou não

    contato = {"Nome": nome_contato, "Telefone": numero_telefone, "E-mail": email, "Favorito": False, "Deletado": False}
    
    contatos.append(contato)

    print(f"\nO contato foi adicionado com sucesso!")

    return

def ver_contatos(contatos):

    print("\nLista de contatos: \n")

    for indice, contato in enumerate(contatos, start=1):

        status = "✓" if contato["Favorito"] else " "

        nome_contato = contato["Nome"]
        telefone_contato = contato["Telefone"]
        email_contato = contato["E-mail"]


        print(f"{indice}. [{status}] Nome: {nome_contato} | Número Telefone: {telefone_contato} | E-mail: {email_contato}")

    return

def atualiza_contato(contatos, indice_contato, novo_contato_atualizado, novo_telefone_atualizado, novo_email_atualizado):

    indice_contato_ajustado = int(indice_contato) - 1

    if indice_contato_ajustado  >= 0 and indice_contato_ajustado < len(contatos):
        contatos[indice_contato_ajustado] ["Nome"] = novo_contato_atualizado
        contatos[indice_contato_ajustado] ["Telefone"] = novo_telefone_atualizado
        contatos[indice_contato_ajustado] ["E-mail"] = novo_email_atualizado
        print(f"\nO contato {indice_contato} foi atualizado para Nome: {novo_contato_atualizado} | Telefone: {novo_telefone_atualizado} | E-mail {novo_email_atualizado}")
    else:
        print("Índice de tarefa inválido")

    return

def marcar_favorito(contatos, indice_contato):

    indice_contato_ajustado = int(indice_contato) - 1

    contatos[indice_contato_ajustado] ["Favorito"] = True    
    print(f"Contato {indice_contato} marcada como completada")

    return

def desmarcar_favorito(contatos, indice_contato):

    indice_contato_ajustado = int(indice_contato) - 1
    contatos[indice_contato_ajustado] ["Favorito"] = False
    print(f"Contato {indice_contato} desmarcado como favorito")

    return

def lista_favorito(contatos):

    print("\nLista de contatos favoritos:\n")

    #favoritos = [contato for contato in contatos if contato["Favorito"]] #Usando list comprehension 

    favoritos = []

    for contato in contatos:
        if contato["Favorito"]:
            favoritos.append(contato)

    if not favoritos:
        print("Nenhum contato marcado como favorito.")
        return

    for indice, contato in enumerate(favoritos, start=1):

        status = '✓'

        nome_contato = contato["Nome"]
        telefone_contato = contato["Telefone"]
        email_contato = contato["E-mail"]

        print(f"{indice}. {[status]} Nome: {nome_contato} | Número Telefone: {telefone_contato} | E-mail: {email_contato}")

    return

def deletar_contato(contatos, indice_contato):
    
    if indice_contato.isdigit():
        indice = int(indice_contato) - 1 

        if 0 <= indice < len(contatos):
            contato = contatos.pop(indice) 
            print(f"Contato '{contato['Nome']}' deletado com sucesso!")
        else:
            print("Erro: Índice fora do intervalo. Tente novamente.")
    else:
        print("Erro: O índice informado deve ser um número.")

contatos = []

while True:
    print("\nMenu da agenda: \n")
    print("1. Adicionar um contato")
    print("2. Ver lista de contatos")
    print("3. Editar um contato")
    print("4. Marcar/Desmarcar um contato como favorito")
    print("5. Ver apenas lista de favoritos")
    print("6. Apagar um contato")
    print("7. Sair")

    escolha = input("\nDigite uma opção: ")

    if escolha == "1":
        nome_contato = input("Digite o nome do contato: ")
        numero_telefone = input(f"Digite o número de telefone do {nome_contato}: ")
        email = input(f"Digite o e-mail válido do {nome_contato}: ")
        adicionar_contato(contatos, nome_contato, numero_telefone, email)
    elif escolha == "2":
        ver_contatos(contatos)

    elif escolha == "3":
        ver_contatos(contatos)
        indice_contato = input("Digite o número do contato que deseja atualizar: ")
        novo_contato_atualizado = input("Digite o novo nome do contato: ")
        novo_telefone_atualizado = input(f"Digite o novo número de telefone do {novo_contato_atualizado}:  ")
        novo_email_atualizado = input(f"Digite um e-mail válido do {novo_contato_atualizado}: ")
        contato_atualizado = print(f"O contato {nome_contato}, com telefone {numero_telefone} e e-mail {email} foi atualizado para Nome: {novo_contato_atualizado} | Telefone: {novo_telefone_atualizado} | E-mail: {novo_email_atualizado} ")
        atualiza_contato(contatos, indice_contato, novo_contato_atualizado, novo_telefone_atualizado, novo_email_atualizado)
    
    elif escolha == "4":
        marcar_desmarcar = input("Deseja marcar ou desmarcar um contato como favorito? ") #Marcar / Desmarcar
        if marcar_desmarcar == "marcar":
            ver_contatos(contatos)
            marcar_favoritos = input("Digite o contato que deseja marcar como favorito: ")
            marcar_favorito(contatos, marcar_favoritos)
        elif marcar_desmarcar == "desmarcar":
            ver_contatos(contatos)
            desmarcar_favoritos = input("Digite o contato que deseja desmarcar como favorito: ")
            desmarcar_favorito(contatos, desmarcar_favoritos)

    elif escolha == "5":
        lista_favorito(contatos)

    elif escolha == "6":
        ver_contatos(contatos)
        indice_contato = input("Digite o número do contato que deseja deletar: ")
        deletar_contato(contatos, indice_contato)

    elif escolha == "7":
        break

print("\nPrograma finalizado!\n")