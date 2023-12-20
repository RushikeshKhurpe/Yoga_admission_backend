# Admission System Backend

## Introduction

This repository contains the backend code for an Admission System. The system is built using Node.js and Express, with data storage handled by MongoDB. It provides endpoints for admitting students and checking for duplicate entries.

## Features

1. **Admission Endpoint (`/api/admission`):**
   - Accepts POST requests to admit a student.
   - Validates the input data, checking for duplicate entries and ensuring that all required fields are provided.
   - Performs age validation (must be between 18 and 65).
   - Saves the admission details to the MongoDB database.
   - Simulates payment logic (commented out), which can be replaced with actual payment processing.

2. **Check Duplicate Endpoint (`/api/checkDuplicate`):**
   - Accepts POST requests to check for duplicate entries based on first name, last name, and email.
   - Returns a JSON response indicating whether a duplicate entry exists.

3. **Middleware:**
   - Utilizes `body-parser` to parse incoming JSON requests.
   - Implements Cross-Origin Resource Sharing (CORS) using the `cors` middleware.

4. **Database Connection:**
   - Connects to MongoDB using the `connectDB` function from the `db.js` file.
   - Uses the Mongoose library for MongoDB interactions.

5. **Error Handling:**
   - Provides error handling for various scenarios, returning appropriate HTTP status codes and error messages.

6. **Logging:**
   - Logs relevant information to the console, including admission details and error messages.

## Running the Application

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/admission-system-backend.git
   cd admission-system-backend

2. **Install Dependencies:**
    ```bash
    npm install

3.  **Configure MongoDB:**

Update the MongoDB connection details in the db.js file.

4. **Run the Application:**
     ```bash
     node server.js

## ER Model

![ER Model](https://drive.google.com/file/d/1nrMj2ta5wwcI1z-tXGGTIHkvRR7MeSC-/view?usp=sharing)
