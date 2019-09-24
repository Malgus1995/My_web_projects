from flask_jsonpify import jsonify


def hello():
    return jsonify({'text':'Hello World!'})