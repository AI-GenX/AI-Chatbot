from flask import Flask, request, jsonify

app = Flask(__name__)

responses = {
    "hello": ["Hi there!", "Hello! How can I assist you?", "Hey!"],
    "how are you": ["I'm just a program, but I'm functioning perfectly!", "Doing great! How about you?"],
    "what is your name": ["I'm Chatbot! What's yours?"],
    "help": ["Sure, I'm here to help! What do you need assistance with?"],
}

def generate_response(user_input):
    user_input = user_input.lower()
    for key in responses:
        if key in user_input:
            return random.choice(responses[key])
    return "I'm not sure I understand. Can you rephrase that?"

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message', '')
    response = generate_response(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
