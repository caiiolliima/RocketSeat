from flask import Flask, request, jsonify
from database import db
from models.dailyDiet import dailyDiet

app = Flask(__name__)
app.config['SECRET_KEY'] = "your_secret_key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:admin132@127.0.0.1:3307/daily-diet'

db.init_app(app)

def carregando_refeicao(id):
     return dailyDiet.query.get(id)

@app.route("/cadastro", methods=['POST'])
def criar_refeicao():
    data = request.json
    nome_refeicao = data.get("nome_refeicao")
    descricao = data.get("descricao")
    datas = data.get("datas")
    horas = data.get("horas")
    dieta = data.get("dieta")

    if nome_refeicao and descricao and datas and horas and dieta:
        refeicao = dailyDiet(nome_refeicao=nome_refeicao, descricao=descricao, datas=datas, horas=horas, dieta=dieta)
        db.session.add(refeicao)
        db.session.commit()
        return jsonify ({"message" : "Refeição cadastrada com sucesso"})

    return jsonify({"message": "Dados inválidos"}), 400

@app.route("/refeicao/<int:id>", methods=['PUT'])
def update_refeicao(id):
    data = request.json
    update = dailyDiet.query.get(id)

    if update and data.get("nome_refeicao") and data.get("descricao") and data.get("datas") and data.get("horas") and data.get("dieta"):
        update.nome_refeicao = data.get("nome_refeicao")
        update.descricao = data.get("descricao")
        update.datas = data.get("datas")
        update.horas = data.get("horas")
        update.dieta = data.get("dieta")
        db.session.commit()
        return jsonify({"message" : f"Refeição {id} atualizada com sucesso"})
    
    return jsonify({"message": "Dados inválidos"}), 404

@app.route("/refeicao/<int:id>", methods=['DELETE'])
def delete_refeicao(id):
    delete = dailyDiet.query.get(id)

    if delete:
        db.session.delete(delete)
        db.session.commit()
        return jsonify({"message": f"Deletado a refeição {id} com sucesso!"})
    
    return jsonify({"message": "Refeição não encontrado"}), 404

@app.route("/refeicao/<int:id>", methods=['GET'])
def read_refeicao(id):
    read = dailyDiet.query.get(id)

    if read:
        return {"nome_refeicao": read.nome_refeicao,
                "descricao": read.descricao,
                "datas": read.datas,
                "horas": read.horas,
                "dieta": read.dieta}
    
    return jsonify({"message": "Refeição não encontrada!"}),404

@app.route("/refeicao", methods=['GET'])
def read_all_refeicao():
    reads = dailyDiet.query.all()

    lista_refeicao = []

    for read in reads:
        lista_refeicao.append({"nome_refeicao": read.nome_refeicao, "descricao": read.descricao,"datas": read.datas, "horas": read.horas, "dieta": read.dieta})
    
    if not len(lista_refeicao):
        return jsonify({"message": "Dados não encontrados"}),404 

    return jsonify({"messagem": lista_refeicao})

if __name__ == '__main__':
    app.run(debug=True)