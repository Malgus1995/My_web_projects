from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from Message import testModule1
from flask_sqlalchemy import SQLAlchemy
import os;


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///Notice&URL_DB.db'
CORS(app)


db = SQLAlchemy(app)

class URL_Management(db.Model):
    site_name = db.Column(db.String(120),primary_key=True)
    site_url = db.Column(db.String(120))
"""
@app.route('/<titlename>/<authorname>')
def index(titlename, authorname):
    url = URL_Management(titlename=titlename,authorname=authorname)
    db.session.add(url)
    db.session.commit()
    return'<h1>ADdd new url!</h1>'
 """  
 
@app.route("/add_url", methods=['POST'])
def add_url():
    if request.method == 'POST':
        result = request.form
        response = Response(status=200)
        print(result)
        return response



    print(request.json)
    return "Hello World!"
    """
    post = URL_Management(post_name=post_name)
    db.session.add(post)
    db.session.commit()
    return'<h1>ADd new post!</h1>'
    """
 
class test(Resource):
    def get(self):
        return testModule1.hello()
api.add_resource(test, '/app-notice') # Route_1


if __name__ == '__main__':
     app.run(debug=True,port=5002)
