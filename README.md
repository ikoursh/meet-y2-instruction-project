# [meet-y2-instruction-project](https://meet-y2-ta.web.app)

## General
This demo web app is an API playground that lets you play with 3 Nasa APIs.

## Architecture
This project is split into 3 parts: frontend (react), backend (flask), and firebase.

### Frontend
The frontend React client parses the url and conditionally renders the required components. 
When it needs to do something on the backend (like making an API request which requires the api key stored on the backend), it makes a post request to the backend.
All user authentication is handled on the frontend via firebase. To learn how the server authenticates the user - see the "backend" section.
The UI framework used is Carbon Design by IBM.
Deployment is handled by firebase deploy.

### Backend
The backend is written in flask and always returns JSON data to POST requests.
To authenticate users it verifies the authentication JWT token that was sent to the frontend via firebase after authentication.
Deployment is handled by Deta.

### Firebase
In order to persist the current API being used, the state is saved in the firestore realtime database.
The rules enforsed means you can only access refrences begining with your UID.

# Routes
As of now, this web app has 3 main routes.

## Home
`/`

## Auth
`/login` and `/register`

## Dashboard
`/dashboard`
Note: this is a restricted route. You must be signed in to make proper use of it.

