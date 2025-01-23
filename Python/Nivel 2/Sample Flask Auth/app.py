from flask import Flask, request, jsonify
from models.User import User
from database import db
from flask_login import LoginManager, login_user, current_user, logout_user, login_required

app = Flask(__name__)
app.config ['SECRET_KEY'] = "your_scret_key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

login_mangager = LoginManager()
db.init_app(app)
login_mangager.init_app(app)

#view login
login_mangager.login_view = 'login'

@login_mangager.user_loader
def load_user(user_id):
     return User.query.get(user_id)

@app.route("/login", methods=["POST"])
def login():
    data=request.json
    username=data.get("username")
    password=data.get("password")

    if username and password:
        
        user = User.query.filter_by(username=username).first()

        if user and user.password == password:
                login_user(user)
                print(current_user.is_authenticated)
                return jsonify({"message": "Autenticação realizada com sucesso"})
    
    return jsonify({"message": "Credenciais inválidas"}), 400

@app.route("/logout", methods=['GET'])
@login_required
def logout():
     logout_user()
     return jsonify({"message": "Logout realizado com sucesso"})

@app.route("/user", methods=['POST'])
@login_required #Usar quando o sistema for fechado, ou seja, somente usuários cadastrados podem criar novos usuários.
def create_user():
     data = request.json
     username = data.get("username")
     password = data.get("password")

     if username and password:
          user = User(username=username, password=password)
          db.session.add(user)
          db.session.commit()
          return jsonify({"message": "Usuário cadastrado com sucesso"})
     
     return jsonify({"message": "Credenciais inválidas"}), 400

@app.route("/user/<int:id_user>", methods={'GET'})
@login_required
def read_user(id_user):
    user = User.query.get(id_user)

    if user:
        return {"username": user.username}
    
    return jsonify({"message": "Usuário não encontrado"}), 404

@app.route("/user/<int:id_user>", methods={'PUT'})
@login_required
def update_user(id_user):
    data = request.json
    user = User.query.get(id_user)

    if user:
         return jsonify ({"message": "Usuário {id_user} cadastrado com sucesso"})
    
    return jsonify ({"message": "Usuário não encontrado"}), 404

@app.route("/hello-world", methods=['GET'])
def hello_world():
    return "Hello world"

if __name__ == '__main__':
    app.run(debug=True)