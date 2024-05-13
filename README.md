# React_Project_Sutlej-Dependency-020

## Introduction
The React_Project_Sutlej-Dependency-020 is a web application designed to cater to wine enthusiasts, offering them a platform to discover a wide array of wines, delve into their unique characteristics, and exchange insights and experiences. Users can seamlessly browse through diverse wines, access comprehensive details about each selection, and engage with fellow enthusiasts through comments and ratings. Additionally, the platform incorporates user-friendly features such as a shopping cart function, search capability, and robust authentication mechanisms for signup and login.

## Project Type
Fullstack

## Deplolyed App
Frontend: https://project-akhil97negi-akhilesh-negis-projects-39e7c552.vercel.app/ <br>
Database: https://react-project-sutlej-dependency-020-3.onrender.com/

## Directory Structure
![image](https://github.com/DishaPaltani/React_Project_Sutlej-Dependency-020/assets/154895694/ceb57f51-d1ce-4ba1-91ee-f65e1947713d)


## Video Walkthrough of the project
https://youtu.be/TiygHY7CxHM

# List out the key features of our application.

-Wine browsing
-Wine details view
-User comments and ratings
-User-friendly website design
-Shopping cart functionality
-Search functionality
-User signup and login

## design decisions or assumptions
List your design desissions & assumptions

## Installation & Getting Started

# Create React App (CRA)
 First, ensure you have Node.js installed on your system. You can download and install it from Node.js website.
Open your terminal.<br>
To create a new React app using CRA, run the following command:

```bash
npx create-react-app my-app
```
Replace my-app with your preferred project name.<br>
Navigate to your project directory:

```bash
cd my-app
```
# Vite
First, ensure you have Node.js installed on your system. You can download and install it from Node.js website.
Open your terminal.<br>
To create a new React app using Vite, run the following command:

```bash
npm init vite@latest my-app --template react
```
Replace my-app with your preferred project name.<br>
Navigate to your project directory:

```bash
cd my-app
```
Install Dependencies
Navigate to the root directory of your project.<br>
Install necessary dependencies:

```bash
npm install axios react-router-dom redux react-redux redux-thunk
```
Configuration
Set up your project structure according to your needs. You can organize your components, pages, and assets in the src directory.
Configure your routes using react-router-dom if necessary.<br>
Set up Redux for state management if required. Create reducers, actions, and store as per your application's needs.
Running the Project<br>
Once you have completed the setup and configuration, you can start the development server.
For CRA:

```bash
npm start
```
For Vite:
```bash
npm run dev
```
Open your browser and navigate to http://localhost:3000 (if using CRA) or the URL shown in your terminal (if using Vite) to view your project.

```bash
npm install my-project
cd my-project
npm start
```

## Usage
Provide instructions and examples on how to use your project.

```bash
# Example
```
![image](https://github.com/DishaPaltani/React_Project_Sutlej-Dependency-020/assets/154895694/d897f357-a06c-4169-ab65-44d984484e28)

![image](https://github.com/DishaPaltani/React_Project_Sutlej-Dependency-020/assets/154895694/493d0838-864b-4bcd-a25b-61f23a88f901)
![image](https://github.com/DishaPaltani/React_Project_Sutlej-Dependency-020/assets/154895694/2f9a4fc8-766f-4474-9209-2ed271a16404)
![image](https://github.com/DishaPaltani/React_Project_Sutlej-Dependency-020/assets/154895694/8aa2985c-f1a4-4824-a069-add534b8fe9e)


## Credentials
Provide user credentials for autheticated pages
userName:"Baba@gmail.com",
password:"Baba123",

## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

Follow these steps to set up a JSON server for your project:

1. **Initialize npm**: Start by initializing a new npm project in your project directory:  npm init -y
 
2. **Install JSON Server**: Install JSON Server as a dependency in your project: npm install json-server
  

3. **Prepare Data File**: Create a JSON file to serve as your database. Make sure the file has a `.json` extension and contains your data in JSON format.

4. **Create Server Script**: Create a `server.js` file to define your JSON Server configuration and routes.

5. **Create .gitignore**: Create a `.gitignore` file and add `node_modules` to it to exclude the `node_modules` directory from version control.

6. **Define Start Script**: In your `package.json` file, add a `start` script to start the JSON Server:
``json
"scripts": {
  "start": "node server.js"
}

7. Add to Repository: Add your project files to your Git repository: git add .
8. Commit Changes: Commit your changes to Git: git commit -m "msg"
9. Push to Remote Repository: Push your changes to your remote Git repository: git push origin main
10. Use JSON Server: You can use JSON Server to serve your data by running the following command: npm start.

Create Webservice Option: If you want to host your JSON Server online, you can paste the GitHub code link in the appropriate option to generate a JSON server on your account.<br>

That's it! You've now set up a JSON server for your project. You can access your JSON server by visiting http://localhost:3000.

In this project, we have used Render to create JSON server online.

## API Endpoints

Data Servers: - https://react-project-sutlej-dependency-020-3.onrender.com/

In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET /api/items - retrieve all items
POST /api/items - create a new item
PUT /api/items - update particular data

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- React
- CSS
- CRA, Vite
