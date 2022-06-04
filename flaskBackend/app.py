from flask import Flask, request
from flask_cors import CORS

import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate("firebase_key.json")
firebase_app = firebase_admin.initialize_app(cred)

app = Flask(__name__)
CORS(app)


@app.route('/', methods = ["POST"])
def hello_world():  # put application's code here
    return {
        "title": "API Playground",
        "description": "Explore and experiment with new & exiting APIs right from your browser",
        "text": "It has never been easier to experiment with RESTful APIs in a simple and intuitive way. "
                "Secured by Google's Firebase authentication service and state of the art image recognition for 2 factor authentication, you can be sure your data is kept safe and secure. "
    }


@app.route('/', methods = ["POST"])
def login():  # put application's code here
    return {
        "data": "nothing here"
    }

@app.route('/dashboard', methods = ["POST"])
def dashboard():
    data = request.get_json();
    print(data);
    if "token" not in data.keys():
        return {
            "error": "Unauthorized"
        }, 401
    decoded_token = auth.verify_id_token(data["token"], firebase_app, True);
    print(decoded_token);
    return {};



@app.errorhandler(404)
def not_found(error):
    return {
        "error": "Not found"
    }


if __name__ == '__main__':
    app.run()
