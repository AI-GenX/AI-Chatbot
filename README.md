# AI Chatbot

A simple chatbot application that integrates Firebase authentication with a responsive frontend built using HTML, CSS, and JavaScript.

## Features
- User authentication (Sign Up and Log In) using Firebase.
- Interactive chatbot interface.
- Responsive design with CSS for better user experience.
- Easy integration of additional responses and features.

## Technologies Used
- **Backend:** Firebase (Authentication)
- **Frontend:** HTML, CSS, JavaScript

## Prerequisites
- A Firebase project set up in your Firebase console.
- A web browser.

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/AI-GenX/AI-Chatbot.git
cd AI-Chatbot
```

### Set Up Firebase
1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Go to **Project Settings** > **General** > **Your apps** > **Web app** and register your app.
3. Copy the Firebase configuration object provided.

### Configure `firebase-config.js`
1. Open the `firebase-config.js` file in the project.
2. Replace the placeholder configuration with your Firebase configuration:
   ```javascript
   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

   // Your web app's Firebase configuration
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       measurementId: "YOUR_MEASUREMENT_ID"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   ```
   Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, and other placeholders with the values from your Firebase project settings.

   for this first go to firebase console and create a project
   then go an create a web app and give it a name then go in the script section (you can see it while setting up web app ) put all the values that is asked from there
   then go to build and then to auth and then start the auth with email and password.

### Run the Application
1. Open the `login.html` file in your web browser.
2. Sign up or log in using the authentication form.
3. After successful login, you'll be redirected to `index.html`.

## Project Structure
```
AI-Chatbot/
├── firebase-config.js  # Firebase configuration
├── auth.js             # Firebase authentication logic
├── login.html          # Login and Sign-Up page
├── index.html          # Main chatbot interface
├── styles.css          # Frontend CSS
├── script.js           # Frontend JavaScript for chatbot functionality
└── README.md           # Project documentation
```

## How It Works
1. The user signs up or logs in using the authentication form.
2. Firebase handles user authentication and validates credentials.
3. Upon successful login, the user is redirected to the main chatbot interface (`index.html`).
4. In the chatbot interface:
   - The user inputs a message in the frontend.
   - The response is generated and displayed.

## Example Interaction
- **User:** Hello
- **Chatbot:** Hi there!

- **User:** What is your name?
- **Chatbot:** I'm Chatbot! What's yours?

## Future Enhancements
- Add natural language processing (NLP) for more complex conversations.
- Store chat history in a database.
- Support for multiple languages.

## Contributing
Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the Apache License 2.0. See the LICENSE file for details.

## Contact
For any questions or feedback, please open an issue in the repository.

