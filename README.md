# 🔐 NestJS URL Shortener API

A full-featured URL shortener built with **NestJS** and **MongoDB**, supporting:

- URL shortening with analytics  
- User registration & login (JWT-based)  
- Route protection via authentication  
- 🔒 Rate limiting on login (bonus feature)  
- 🧪 Swagger documentation for easy testing  

---

## 🚀 Getting Started

### 🛠️ Prerequisites

- Node.js v18+  
- MongoDB instance (local or cloud)  
- Yarn or npm  

---

### 📦 Installation

```bash
git clone https://github.com/Ashwastaken78867/URL_Shortener.git
cd URL_Shortener
npm install

## 🔑 Environment Setup
Create a .env file in the root directory:

MONGODB_URI=mongodb://localhost:27017/url-shortener
JWT_SECRET=your_jwt_secret
BASE_URL=http://localhost:3001

## 🧪 Run Locally
npm run start:dev
App will be running at: http://localhost:3001

## 📬 API Endpoints
| Method | Endpoint           | Description                  | Auth Required |
| ------ | ------------------ | ---------------------------- | ------------- |
| POST   | `/auth/register`   | Register a new user          | ❌             |
| POST   | `/auth/login`      | Login with JWT               | ❌             |
| POST   | `/api/shorten`     | Create short URL             | ✅             |
| GET    | `/r/:shortCode`    | Redirect to original URL     | ❌             |
| GET    | `/api/stats/:code` | View analytics for short URL | ✅             |

## 📄 Full Swagger documentation available at:
http://localhost:3001/docs

## 🔐 Authentication (Bonus Feature)
JWT-based authentication

Passwords are hashed with bcrypt

Pass token via Authorization header as Bearer <token>

Routes like /api/shorten and /api/stats/:code require authentication

🚫 Rate Limiting (Bonus Feature)
The /auth/login route is protected using @nestjs/throttler to prevent brute-force attacks.

✅ Configuration
Max Requests: 5 per minute

Scoped: Only applied to /auth/login

Custom error message returned on too many requests

// app.module.ts
ThrottlerModule.forRoot([
  {
    name: 'login',
    ttl: 60000,  // 60 seconds
    limit: 5,    // 5 requests per IP
  },
]);
// auth.controller.ts
@Throttle('login')
@Post('login')

📎 Custom Error Response

{
  "statusCode": 429,
  "error": "Too Many Requests",
  "message": "Too many login attempts. Try again in a minute.",
  "path": "/auth/login",
  "timestamp": "2025-07-28T16:00:00.000Z"
}

🌐 Deployed URL
Coming soon...

🎥 Project Demo
📹 [Add your Loom/Google Drive demo link here]


✅ Bonus Features Completed

   ✅ JWT-based authentication
   ✅ Rate limiting on login route
   ✅ Swagger API documentation


👨‍💻 Author
Ash Bagda
GitHub: Ashwastaken78867

