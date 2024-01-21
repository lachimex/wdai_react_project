from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import hashlib


app = Flask(__name__)
CORS(app)


app.config["JWT_SECRET_KEY"] = "super-secret"
jwt = JWTManager(app)

users = []
logged_user = ""

def hash_string(input_string):
    sha256_hash = hashlib.sha256()
    sha256_hash.update(input_string.encode('utf-8'))
    hashed_string = sha256_hash.hexdigest()
    return hashed_string


@app.route('/register', methods=["POST"])
def register():
    username = request.json.get("username", None)
    if len(username) <= 1 or len(request.json.get("password")) <= 1:
        return jsonify({"msg": "User and password must be at least 2 signs"}), 200
    for user in users:
        if user['username'] == username:
            return jsonify({"msg": "User is in the system already"}), 200
    hashed_password = hash_string(request.json.get("password"))
    users.append({'username': username, 'password': hashed_password})
    return jsonify({"msg": "User registered succesfully"}), 200


@app.route('/login', methods=["POST"])
def login():
    username = request.json.get("username", None)
    hashed_password = hash_string(request.json.get("password"))
    for user in users:
        if username == user['username'] and hashed_password == user['password']:
            access_token = create_access_token(identity=username)
            response_data = {
                'token': access_token,
                'username': user['username'],
                }
            logged_user = user['username']
            return jsonify(response_data)
    else:
        return jsonify({"msg": "Bad username or password"}), 401

    
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

def getLoggedInUser():
    return logged_user


if __name__ == '__main__':
    app.run()