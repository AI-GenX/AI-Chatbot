# AI Chatbot

A simple chatbot application that uses a Python backend with Flask and a responsive frontend built with HTML, CSS, and JavaScript.

## Features
- Interactive chatbot interface.
- Python backend for handling user input and generating responses.
- Responsive design with CSS for better user experience.
- Easy integration of additional responses and features.

## Technologies Used
- **Backend:** Python (Flask)
- **Frontend:** HTML, CSS, JavaScript

## Prerequisites
- Python 3.7 or higher
- Flask (`pip install flask`)
- A web browser

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/AI-GenX/AI-Chatbot.git
cd AI-Chatbot
```

### Set Up the Backend
1. Install the required Python library:
   ```bash
   pip install flask
   ```

2. Start the Flask server:
   ```bash
   python app.py
   ```

   The server will start at `http://127.0.0.1:5000/`.

### Run the Frontend
1. Open the `index.html` file in your web browser.
2. Interact with the chatbot using the input box and send button.

## Project Structure
```
AI-Chatbot/
├── app.py          # Flask backend
├── index.html      # Frontend HTML
├── styles.css      # Frontend CSS
├── script.js       # Frontend JavaScript
└── README.md       # Project documentation
```

## How It Works
1. The user inputs a message in the frontend interface.
2. The message is sent to the Flask backend via a POST request.
3. The backend processes the input and generates a response based on predefined logic.
4. The response is sent back to the frontend and displayed to the user.

## Example Interaction
- **User:** Hello
- **Chatbot:** Hi there!

- **User:** What is your name?
- **Chatbot:** I'm Chatbot! What's yours?

## Future Enhancements
- Add natural language processing (NLP) for more complex conversations.
- Store chat history.
- Support for multiple languages.

## Contributing
Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the Apache License 2.0. See the LICENSE file for details.

## Contact
For any questions or feedback, please open an issue in the repository.

