# Assesment Exam

A full-stack web application built using the MERN stack (MongoDB, Express, React, Node), Vite as the frontend build tool, and Tailwind CSS for styling.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Environment Variables](#environment-variables)
3. [Installation and Setup](#installation-and-setup)
4. [Scripts](#scripts)
5. [Setting Up MongoDB](#setting-up-mongodb)
6. [Features](#features)
7. [License](#license)

---

### 1. Technologies Used

**Frontend**:
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for fast and efficient builds.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

**Backend**:
- **Node.js**: JavaScript runtime for the backend server.
- **Express**: Lightweight web application framework for Node.js.
- **MongoDB**: NoSQL database to store application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

---
### 2. Environment Variables

Create a `.env` file in both `client` and `server` folders with the following values:

#### Backend (`server/.env`)

```plaintext
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=your_jwt_expire_time


```

### 3. Installation and Setup

#### Clone the repository:

```bash
git clone https://github.com/XjorLml/Assesment-Exam.git
cd Assesment Exam


```
#### Install dependencies:
#### For the backend:

```bash
cd server
npm install


```
#### For the backend:

```bash
cd client
npm install


```
### Set up environment variables:
Create `.env` files in both `client` and `server` directories as specified in the [Environment Variables](#3-environment-variables) section.

### Start the application:

**Start the backend server:**

```bash
cd server
npm run dev


```

**Start the frontend:**

```bash
cd client
npm run dev


```
### 4. Scripts

**Backend Scripts** (in `server/package.json`):

- `npm start`: Start the server.
- `npm run dev`: Start the server with nodemon for hot reloading.

**Frontend Scripts** (in `client/package.json`):

- `npm run dev`: Run the frontend in development mode.
- `npm run build`: Build the frontend for production.


### 5. Setting Up MongoDB

To run the application, you'll need to set up a MongoDB database. You can either use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (a cloud-based MongoDB service) or set up a local MongoDB instance.

#### Using MongoDB Atlas:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account if you don't have one.
2. Create a new cluster.
3. Get your connection string by navigating to the **Clusters** page and clicking on the **Connect** button.
4. In the `client/.env` and `server/.env` files, set the `MONGO_URI` environment variable to your MongoDB Atlas connection string.

Example:

```plaintext
MONGO_URI=your_mongodb_atlas_connection_string


```
### 6. Features

- **Authentication**: Secure login and registration with JWT.
- **Responsive UI**: Styled with Tailwind CSS for mobile-first design.
- **API Integration**: RESTful API for CRUD operations on MongoDB.
- **Efficient Bundling**: Vite for fast development and build processes.

### 7. License

This project is licensed under the MIT License.


