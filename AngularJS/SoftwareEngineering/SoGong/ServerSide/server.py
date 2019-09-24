from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from Message import testModule1


app = Flask(__name__)
api = Api(app)

CORS(app)

class test_1(Resource):
    def get(self):
        return testModule1.hello()
api.add_resource(test_1 '/app-notice') # Route_1


if __name__ == '__main__':
     app.run(debug=True,port=5002)
