# 👤 User Profile System

## 📌 Project Overview

The **User Profile System** is a full‑stack web application that provides secure user registration, authentication, and profile management. The system allows users to sign up, log in, view their profile details, and update profile information. The backend is built using **Node.js, Express, and MongoDB**, while the frontend is developed using **React**. Environment variables are used to securely manage sensitive credentials.

**Implementation Approach**:

* RESTful API architecture
* JWT‑based authentication for secure access
* Password hashing for security
* Modular backend structure (routes, controllers, models)
* Environment‑based configuration using `.env`

---

## ⚙️ Setup / Run Instructions

### ✅ Prerequisites

Make sure you have the following installed on your system:

* **Node.js** (v18 or above recommended)
* **npm** or **yarn**
* **MongoDB** (local or MongoDB Atlas)
* **Git**

---

### 🧾 1. Clone the Repository

```bash
git clone https://github.com/pratham162u/user-profile-system.git
cd user-profile-system

```

---

### 🖥️ 2. Backend Setup

#### Navigate to backend folder

```bash
cd backend
```

#### Install dependencies

```bash
npm install
```

#### Create `.env` file

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ **Important:** Do NOT upload the real `.env` file to GitHub. Add `.env` to `.gitignore`.

#### Run backend server

```bash
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

### 🌐 3. Frontend Setup

#### Navigate to frontend folder

```bash
cd ../frontend
```

#### Install dependencies

```bash
npm install
```

#### Run frontend

```bash
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api
```

### 🔐 Authentication APIs

#### 1. Register User

**POST** `/auth/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

#### 2. Login User

**POST** `/auth/login`

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "jwt_token_here"
}
```

---

### 👤 User Profile APIs

#### 3. Get User Profile

**GET** `/users/profile`

Headers:

```
Authorization: Bearer <token>
```

#### 4. Update User Profile

**PUT** `/users/profile`

```json
{
  "name": "Updated Name"
}
```

---

## 🗄️ Database Schema

### User Collection

```js
User {
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date
}
```

* **email** is unique
* **password** is stored in hashed format

---

## 📁 Folder Structure

```
user-profile-system/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── .env (not pushed)
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🤖 AI Tool Usage Log (MANDATORY)

This project was developed with the assistance of **AI tools** for learning and development support.

**AI Tool Used:** ChatGPT (OpenAI)

**Usage Details:**

* Understanding backend architecture (Node.js + Express)
* Debugging runtime and crypto‑related errors
* Designing REST APIs and database schema
* Writing and structuring this README documentation

All logic, implementation decisions, and final code integration were performed by the developer.

---

## 📝 Notes

* Ensure MongoDB service is running before starting backend
* Use Postman for API testing
* Keep `.env` secure and private

---
