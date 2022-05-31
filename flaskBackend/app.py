from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/')
def hello_world():  # put application's code here
    return {
        "title" : "My weird app"
    }
@app.errorhandler(404)
def not_found(error):
    return {
        "error" : "Not found"
    }
if __name__ == '__main__':
    app.run()
