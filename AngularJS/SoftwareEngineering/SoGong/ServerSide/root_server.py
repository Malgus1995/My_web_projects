from flask import Flask, request, Response, json
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from Message import testModule1
from flask_sqlalchemy import SQLAlchemy
from Crolling import Notice_Parser
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
@app.route("/login_ask",methods=['POST'])
def login_ask():
    if request.method == 'POST':
        data = {"login_status":"true"} # Your data in JSON-serializable type
        response = app.response_class(response=json.dumps(data),status=200,mimetype='application/json')
    return response
 
@app.route("/add_url", methods=['POST'])
def add_url():
    if request.method == 'POST':
        data = {"some_key":"some_value"} # Your data in JSON-serializable type
        response = app.response_class(response=json.dumps(data),status=200,mimetype='application/json')
    return response


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
aa = Notice_Parser.make_entire_refined_data()


#if __name__ == '__main__':
#     app.run(debug=True,port=5002)

