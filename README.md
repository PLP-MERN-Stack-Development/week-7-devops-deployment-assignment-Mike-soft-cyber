[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19865633&assignment_repo_type=AssignmentRepo)
# MERN Stack Integration Assignment

This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Assignment Overview

You will build a blog application with the following features:
1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application

# MERN Blog

A full-stack blog application built with **MongoDB, Express, React, and Node.js (MERN)**.

---

## 📚 **Table of Contents**

- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## ✨ **Features**

✅ Create, read, update, and delete (CRUD) blog posts  
✅ RESTful API with Express.js and Mongoose  
✅ React front-end styled with **Tailwind CSS** and **shadcn/ui**  
✅ Axios for API calls  
✅ React Router for navigation

---

## 🔗 **API Endpoints**

**Base URL:** `http://localhost:5000/posts`

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| GET    | /posts      | Get all posts           |
| GET    | /posts/:id  | Get a single post by ID |
| POST   | /posts      | Create a new post       |
| PUT    | /posts/:id  | Update a post by ID     |
| DELETE | /posts/:id  | Delete a post by ID     |

---

### 📥 **POST /posts**

**Request Body Example**

```json
{
  "title": "My First Blog Post",
  "body": "This is the content of my post.",
  "author": "Michael Kariuki"
}

## **1. Clone the repository**

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-Mike-soft-cyber.git
cd week-4-mern-integration-assignment-Mike-soft-cyber



## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/) 
