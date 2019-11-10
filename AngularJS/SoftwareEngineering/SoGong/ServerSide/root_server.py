from flask import Flask, request, Response, json
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from Message import testModule1
from flask_sqlalchemy import SQLAlchemy
from Crolling import Notice_Parser
import os;
import json


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///Notice&URL_DB.db'
CORS(app)


"""
이 배열을 디비에 저장하게 해야댐
"""
temp_email_list = []
"""
이 배열을 디비에 저장하게 해야댐
"""
temp_url_list = []
"""
이 배열을 디비에 저장하게 해야댐
"""
temp_member_list=[]


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

@app.route("/check_duplicate_id",methods=['POST'])
def check_duplicated_member():
    res = True
    if request.method == 'POST':
        checks_id = request.data.decode("utf-8")
        data = {"duplicate_statue":"false"}
        for one in temp_member_list:
            res= not (one['userid']==checks_id)
        data["duplicate_statue"] = res;
        response = app.response_class(response=json.dumps(data),status=200,mimetype='application/json')
    return response
        
        

@app.route("/join_member",methods=['POST'])
def join_member():
    if request.method == 'POST':
        new_face_info = json.loads(request.data)
        temp_member_list.append(new_face_info)
        data = {"join_statue":"true"} # Your data in JSON-serializable type
        print(temp_member_list)
        response = app.response_class(response=json.dumps(data),status=200,mimetype='application/json')
    return response
 
@app.route("/add_url", methods=['POST'])
def add_url():
    if request.method == 'POST':
        data = {"some_key":"some_value"} # Your data in JSON-serializable type
        data_url_info = json.loads(request.data)
        print(data_url_info)
        if(data_url_info not in temp_url_list):
            temp_url_list.append(data_url_info)
        response = app.response_class(response=json.dumps(data),status=200,mimetype='application/json')
    return response

@app.route("/modify_url", methods=['POST'])
def modify_url():
    if request.method == 'POST':
        data = {"some_key":"some_value"} # Your data in JSON-serializable type
        data_url_info = json.loads(request.data)
        print(data_url_info)
        temp_url_list.clear()
        temp_url_list.append(data_url_info)
        print(temp_url_list)
        response = app.response_class(response=json.dumps(data),status=200,mimetype='application/json')
    return response


@app.route("/del_url_list", methods=['POST'])
def del_url():
    if request.method == 'POST':
        data = {"some_key":"some_value"} 
        data_url_info = json.loads(request.data)
      #  print(data_url_info)
        if(data_url_info in temp_url_list):
            temp_url_list.remove(data_url_info)
       # print(len(data_url_info))
    return jsonify(data)

@app.route("/get_registered_url", methods=['POST'])
def get_registered_url():
    if request.method == 'POST':
        response = {'url_list':temp_url_list}
    return response

@app.route("/app-notice", methods=['POST'])
def send_req():
    if request.method == 'POST':
        data =Notice_Parser.make_entire_refined_data(temp_url_list[0]['requestedurl'])
        print(data)
    return jsonify(data)


@app.route("/add_email_list", methods=['POST'])
def register_email_list():
    if request.method == 'POST':
        data = {"some_key":"some_value"} 
        data_email_info = json.loads(request.data)
        #print(data_email_info)
        if(data_email_info not in temp_email_list):
            temp_email_list.append(data_email_info)
    return jsonify(data)

@app.route("/del_email_list", methods=['POST'])
def delete_email_list():
    if request.method == 'POST':
        data = {"some_key":"some_value"} 
        data_email_info = json.loads(request.data)
        #print(data_email_info)
        if(data_email_info in temp_email_list):
            temp_email_list.remove(data_email_info)
        print(len(temp_email_list))
    return jsonify(data)

@app.route("/get_email_list", methods=['POST'])
def get_registerd_email_list():
    response = {'email_list':temp_email_list}
    return jsonify(response)

#@app.route("/get_email_list", methods=['POST'])
#def get_registerd_email_list():
#    response = {'email_list':temp_email_list}
#    return jsonify(response)


    
#class test(Resource):
#    def get(self):
#        return testModule1.hello()
#api.add_resource(test, '/app-notice') # Route_1
#aa = Notice_Parser.make_entire_refined_data()


if __name__ == '__main__':
     app.run(debug=True,port=5002)

