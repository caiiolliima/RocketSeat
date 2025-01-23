from flask import Flask, jsonify, request, send_file
from repository.database import db
from db_models.payment import Payment
from datetime import datetime, timedelta
from payments.pix import Pix

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
    
    pix_obj = Pix()
    data_payment_pix = pix_obj.create_payment()
    new_payment.bank_payment_id = data_payment_pix["bank_payment_id"]
    new_payment.qr_code = data_payment_pix["qr_code_path"]
    
    db.session.add(new_payment)
    db.session.commit()

    return jsonify ({"message" : "O pagamento foi criado",
                    "payment" : new_payment.to_dict()})
    
@app.route("/pagamento/pix/qr_code/<file_name>", methods=['GET'])
def get_image(file_name):
    return send_file(f"static/img/{file_name}.png", mimetype='image/png')

@app.route("/pagamento/pix/confirmation", methods=['POST'])
def pix_confirmation():
    return jsonify ({"message" : "O pagamento foi confirmado"})

@app.route("/payments/pix/<int:pagamento_id>", methods=['GET'])
def payment_pix_page(pagamento_id):
    return 'pagamento pix'

if __name__ == '__main__':
    app.run(debug=True)