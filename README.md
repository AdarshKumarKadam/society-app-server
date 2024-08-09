
---

### **Backend (BE) - README.md**

```markdown
# Society Management Application - Backend

## Overview

This repository contains the backend code for the Society Management Application, a MERN stack project that provides RESTful API services to manage the data and operations of a residential society.

## Features

- User authentication and authorization (JWT)
- CRUD operations for users, notices, events, and complaints
- Role-based access control (Admin, Resident,Security,Staff)
- Secure password management with bcrypt

## Tech Stack

- **Server Framework:** Node.js with Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **ORM:** Mongoose
- **Environment Management:** dotenv

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AdarshKumarKadam/society-app-server.git
    cd society-app-server.git
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. **Create a `.env` file:**

    Create a `.env` file in the root directory with the following environment variables:

    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/society-management
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the server:**

    ```bash
    npm run server
    ```

    or

    ```bash
    yarn run server
    ```

    The API should be running on [http://localhost:3000](http://localhost:3000).


### Folder Structure

```plaintext
src/
│
├── controllers/      # Route handlers
├── models/           # Mongoose models
├── routes/           # API routes
├── middlewares/      # Custom middleware functions
├── config/           # Configuration files
├── utils/            # Utility functions
├── createApp.js      # Express app setup
├── index.js          # Entry point
└── ...
