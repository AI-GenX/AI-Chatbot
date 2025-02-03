from flask import Flask, render_template, request, jsonify
import speech_recognition as sr

app = Flask(__name__)

def voice_to_text():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Speak Something...")
        audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio)
            print("You Said:", text)
            return text
        except sr.UnknownValueError:
            return "Sorry, I couldn't understand."
        except sr.RequestError as e:
            return f"Error with the service: {e}"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_text', methods=['POST'])
def get_text():
    text = voice_to_text()
    return jsonify({"text": text})

if __name__ == "__main__":
    app.run(debug=True)
