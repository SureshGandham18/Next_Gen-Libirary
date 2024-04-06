from flask import Flask, render_template, request, session,jsonify
import os
# from werkzeug.utils import secure_filename
from IPython.display import Markdown
import textwrap
from PyPDF2 import PdfReader
import json
import re
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

app.secret_key="AIzaSyDZEMVPe"
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])
print('hello')
def book_recommonder(data):
    res = chat.send_message(['Recommend 7 books based the given in input(provide only tiles without any description)(give content with html tags <li>cd)',data])
    return res.text

@app.route('/submit_data', methods=['POST','GET'])
def submit_data():
    if request.method == 'POST':
        data = request.json  # Get the JSON data sent from the frontend
        # Process the received data here
        degree = data.get('degree')
        department = data.get('department')
        related_info = data.get('related_info')
        data = 'degree'+':'+degree+','+'department'+':'+department+','+'related_info'+":"+related_info
        # Perform any required operations with the data
        print("Received data:", data)
        des = book_recommonder(data)
        session['result'] = des
        print(des)
        return jsonify({'message': 'Data received successfully'}), 200
    else:
        result = session.get('result')
        print(result)
        return jsonify({'display':result}),200
if __name__ == '__main__':
    app.run(debug=True)