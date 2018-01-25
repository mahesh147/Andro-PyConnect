# Server

# Importing Flask and request from the flask module to setup the server and process POST request
from flask import Flask, request

# json module has been imported to display the json data

import json
app = Flask(__name__)
 
@app.route("/", methods=['POST']) # This is sets up the a root directory and listens for POST requests
def hello(): # This function gets called whenever the app tries to send a message
     data=request.get_json() # The receivec data is stored into data
     message=json.dumps(data) # The json data gets dumped into message.
     message=json.loads(message) # The message reads back the json dumped json data
     print (message["message"]) # The message that has the "message" key gets printed onto the screen
     return "" # Something needs to returned else python will give error. I don't why it does that.
 
if __name__== "__main__":
     
     app.run(host='0.0.0.0') 
     # Here the host needs to specified as 0.0.0.0. Only then will the server external IP will be public.