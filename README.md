# 🔐 NestJS URL Shortener API

A full-featured URL shortener application built using **NestJS** and **MongoDB**. This project allows users to register and log in securely using JWT-based authentication, shorten long URLs, track usage analytics, and access shortened links with ease. It includes features like protected routes, rate limiting to prevent brute-force attacks, and integrated API documentation using Swagger.

Live URL: [https://url-shortener-k9uk.onrender.com](https://url-shortener-k9uk.onrender.com)

## 🧰 Tech Stack

- **Framework:** [NestJS](https://nestjs.com/) (TypeScript-based Node.js framework)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication:** JWT (JSON Web Tokens) + Bcrypt (Password hashing)
- **Security:** @nestjs/throttler for rate limiting
- **API Documentation:** Swagger (via @nestjs/swagger)
- **Deployment:** [Render](https://render.com/)

## 🛠️ Local Setup & Running the Application

### 📦 Prerequisites

- Node.js v18+
- MongoDB (local instance or cloud like MongoDB Atlas)
- npm or yarn installed

---

### 🚀 Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ashwastaken78867/URL_Shortener.git
   cd URL_Shortener

2. Install dependencies

     npm install

3. Set up environment variables
   Create a .env file in the root directory and add:

   MONGODB_URI=mongodb://localhost:27017/url-shortener
   JWT_SECRET=your_jwt_secret_key
   BASE_URL=http://localhost:3001

4. Run the app in development mode

    npm run start:dev

   The app will start at: http://localhost:3001
   Swagger Docs: http://localhost:3001/docs


## 📬 API Endpoints

| Method | Endpoint           | Description                  | Auth Required |
|--------|--------------------|------------------------------|----------------|
| POST   | `/auth/register`   | Register a new user          | ❌ No          |
| POST   | `/auth/login`      | Login and receive JWT token  | ❌ No          |
| POST   | `/api/shorten`     | Create a short URL           | ✅ Yes         |
| GET    | `/r/:shortCode`    | Redirect to original URL     | ❌ No          |
| GET    | `/api/stats/:code` | View analytics of short URL  | ✅ Yes         |

---

## ✅ Bonus Features Completed

- 🔐 **JWT Authentication**  
  Implemented secure login and route protection using JSON Web Tokens. Authenticated routes require a valid token in the `Authorization` header.

- 🚫 **Rate Limiting**  
  Used `@nestjs/throttler` to limit login attempts to 5 per minute per IP, protecting against brute-force attacks.

- 🧪 **Swagger Documentation**  
  Integrated Swagger for interactive API testing at `/docs`. All routes are documented with request/response schemas and auth handling.

- 📎 **Custom Error Handling**  
  Added a global exception filter to return a user-friendly message for rate-limited requests (HTTP 429).


## 📄 API Documentation (Swagger)

Interactive API docs are available at:

```bash
https://url-shortener-k9uk.onrender.com/docs




