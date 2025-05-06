from database import db

class dailyDiet(db.Model):
    # id (int), username (text), password (text)
    id = db.Column(db.Integer, primary_key=True)
    nome_refeicao = db.Column(db.String(80), nullable=False)
    descricao = db.Column(db.String(80),  nullable=False)
    datas = db.Column(db.String(80), nullable=False)
    horas = db.Column(db.String(80), nullable= False)
    dieta = db.Column(db.String(8), nullable=False)
    