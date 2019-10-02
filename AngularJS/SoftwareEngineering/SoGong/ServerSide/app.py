from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///sqlite.db'
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
