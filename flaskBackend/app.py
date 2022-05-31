from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():  # put application's code here
    return {
        "title": "API Playground",
        "description": "Explore and experiment with new & exiting APIs right from your browser",
        "text": "It has never been easier to experiment with RESTful APIs in a simple and intuitive way. "
                "Secured by Google's Firebase authentication service and state of the art image recognition for 2 factor authentication, you can be sure your data is kept safe and secure. "
    }


@app.route('/')
def login():  # put application's code here
    return {
        "data": "nothing here"
    }


@app.errorhandler(404)
def not_found(error):
    return {
        "error": "Not found"
    }


if __name__ == '__main__':
    app.run()
