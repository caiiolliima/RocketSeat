from app import db

class User(db.Model):
    # id (int), username (text), password (text)
    id = db.Column()