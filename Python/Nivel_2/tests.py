import pytest
import requests

#Create
BASE_URL = 'http://127.0.0.1:5000'

tasks = []

def test_create_task():
    new_task_data= {
    "title": "Nova tarefa",
    "description": "Descrição da tarefa"
    }

    response = requests.post(f"{BASE_URL}/tasks", json=new_task_data)    #assert é usado para validações dentro do response do json
    assert response.status_code == 200
    response_json = response.json()
    assert "message" in response_json
    assert "id" in response_json
    tasks.append(response_json['id'])

def test_get_tasks():
    response = requests.get(f"{BASE_URL}/tasks")
    assert response.status_code == 200
    response_json = response.json() #Irá trazer o corpo da requisição (json)
    assert "tasks" in response_json
    assert "total_tasks" in response_json

def test_get_test_id():
    if tasks:
        task_id = tasks[0]
        response = requests.get(f"{BASE_URL}/tasks/{task_id}")
        assert response.status_code == 200
        response_json = response.json()
        assert task_id == response_json['id']

def test_update_tasks():
    if tasks:
        task_id = tasks[0]
        payload = {
            "completed": True,
            "description": "Nova Descrição",
            "title": "Título atualizado"
        }

        response = requests.put(f"{BASE_URL}/tasks/{task_id}", json=payload)
        response.status_code == 200
        response_json = response.json()
        assert "message" in response_json

        #Nova requisção

        response = requests.get(f"{BASE_URL}/tasks/{task_id}")
        assert response.status_code == 200
        response_json = response.json()
        assert response_json["title"] == payload["title"]
        assert response_json["description"] == payload["description"]
        assert response_json["completed"] == payload["completed"]

def test_delete_task():
    if tasks:
        task_id = tasks[0]
        response = requests.delete(f"{BASE_URL}/tasks/{task_id}")
        response.status_code == 200

        response = requests.get(f"{BASE_URL}/tasks/{task_id}")
        assert response.status_code == 404
