from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
dn = SQLAlchemy(app)

@app.route("/hello-world", methods=['GET'])
def hello_world():
    return "Hello world"


if __name__ == '__main__':
    app.run(debug=True)