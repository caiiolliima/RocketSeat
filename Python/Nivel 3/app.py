from flask import Flask, jsonify, request
from repository.database import db
from db_models.payment import Payment
from datetime import datetime, timedelta

app = Flask(__name__)
app.config['SECRET_KEY'] = "your_secret_key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db.init_app(app)


@app.route("/pagamento/pix", methods=['POST'])
def create_payment_pix():
    data = request.get_json()
    
    if 'value' not in data:
        return jsonify({"message": "Valor inválido"}), 400

    expiration_date = datetime.now() + timedelta(minutes=30)

    new_payment = Payment(value=data['value'], expiration_date=expiration_date)

    db.session.add(new_payment)
    db.session.commi()

    return jsonify ({"message" : "O pagamento foi criado"},
                    {"payment" : ""})

@app.route("/pagamento/pix/confirmation", methods=['POST'])
def pix_confirmation():
    return jsonify ({"message" : "O pagamento foi confirmado"})

@app.route("/payments/pix/<int:pagamento_id>", methods=['GET'])
def payment_pix_page(pagamento_id):
    return 'pagamento pix'

if __name__ == '__main__':
    app.run(debug=True)