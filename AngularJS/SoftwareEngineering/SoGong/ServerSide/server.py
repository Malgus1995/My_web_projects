from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify



from Message import testModule1
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///foo.db'
CORS(app)

db = SQLAlchemy(app)

class URL_Management(db.Model):
    titlename = db.Column(db.String(120),primary_key=True)
    authorname = db.Column(db.String(120))

@app.route('/<titlename>/<authorname>')
def index(titlename, authorname):
    url = URL_Management(titlename=titlename,authorname=authorname)
    db.session.add(url)
    db.session.commit()
    return'<h1>ADdd new url!</h1>'
    
class test(Resource):
    def get(self):
        return testModule1.hello()
api.add_resource(test, '/app-notice') # Route_1


if __name__ == '__main__':
     app.run(debug=True,port=5002)
