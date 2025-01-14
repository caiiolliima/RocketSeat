from flask import Flask, jsonify, request
from repository.database import db
from db_models.payment import Payment

app = Flask(__name__)
app.config['SECRET_KEY'] = "your_secret_key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db.init_app(app)


@app.route("/pagamento/pix", methods=['POST'])
def create_payment_pix():
    data = request.json
    return jsonify ({"message" : "O pagamento foi criado"})

@app.route("/pagamento/pix/confirmation", methods=['POST'])
def pix_confirmation():
    return jsonify ({"message" : "O pagamento foi confirmado"})

@app.route("/payments/pix/<int:pagamento_id>", methods=['GET'])
def payment_pix_page(pagamento_id):
    return 'pagamento pix'

if __name__ == '__main__':
    app.run(debug=True)