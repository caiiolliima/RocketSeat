#Iniciando a função de adicionar a tarefa
def adicionar_tarefa(tarefas, nome_tarefa):

    #tarefa: nome da tarefa
    #completada: indicar se a tarefa foi completada ou não

    tarefa = {"Nome": nome_tarefa, "Completada": False}
    
    tarefas.append(tarefa)

    print(f"A tarefa {nome_tarefa} foi adicionada com sucesso!")

    return

def ver_tarefas(tarefas):

    print("\nLista de tarefas: ")

    for indice, tarefa in enumerate(tarefas, start=1):

        status = "✓" if tarefa["Completada"] else " "

        nome_tarefa = tarefa['Nome']

        print(f"{indice}. [{status}] {nome_tarefa}")

    return

def atualiza_tarefa(tarefas, indice_tarefa, novo_nome_tarefa):

    indice_tarefa_ajustado = int(indice_tarefa) - 1

    if indice_tarefa_ajustado  >= 0 and indice_tarefa_ajustado < len(tarefas):
        tarefas[indice_tarefa_ajustado] ["Nome"] = novo_nome_tarefa    
        print(f"\nTarefa{indice_tarefa} atualizada para {novo_nome_tarefa}")
    else:
        print("Índice de tarefa inválido")

    return

def completar_tarefas(tarefas, indice_tarefa):

    indice_tarefa_ajustado = int(indice_tarefa) - 1

    tarefas[indice_tarefa_ajustado] ["Completada"] = True    
    print(f"Tarefa {indice_tarefa} marcada como completada")

    return

def deletar_tarefas_completadas(tarefas):

    for tarefa in tarefas:
        if tarefa["Completada"]: #Comparação vazio é igual a "True"
            tarefas.remove(tarefa)

    print(f"Tarefa completadas deletada com sucesso")

    return

#Iniciando vazia para servir de armazenamento na falta de um DB
tarefas = []

while True:
    print("\nMenu do Gerenciador de lista de tarefas: \n")
    print("1. Adicionar tarefas")
    print("2. Ver tarefas")
    print("3. Atualizar tarefas")
    print("4. Completar tarefas")
    print("5. Deletar tarefas completadas")
    print("6. Sair")

    escolha = input("\nDigite a sua escolha: ")

    if escolha == "1":
        nome_tarefa = input("Qual a tarefa que gostaria de adicionar? ")
        adicionar_tarefa(tarefas, nome_tarefa)

    elif escolha == "2":
        ver_tarefas(tarefas)

    elif escolha == "3":
        ver_tarefas(tarefas)
        indice_tarefa = input("Digite o número da tarefa que deseja atualizar: ")
        novo_nome = input("Digite o novo nome da tarefa: ")
        atualiza_tarefa(tarefas, indice_tarefa, novo_nome)

    elif escolha == "4":
        ver_tarefas(tarefas)
        indice_tarefa = input("Digite o número da tarefa que deseja completar: ")
        completar_tarefas(tarefas, indice_tarefa)

    elif escolha == "5":
        deletar_tarefas_completadas(tarefas)
        ver_tarefas(tarefas)

    elif escolha == "6":
        break


print("\nPrograma finalizado")



