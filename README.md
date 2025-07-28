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
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
npm install

🔑 Environment Setup
Create a .env file in the root:

MONGODB_URI=mongodb://localhost:27017/url-shortener
JWT_SECRET=your_jwt_secret
BASE_URL=http://localhost:3001


🧪 Run Locally
npm run start:dev

App will be running at: http://localhost:3001

📬 API Endpoints

Method	 Endpoint	         Description	                 Auth
POST	   /auth/register	   Register new user	           ❌
POST	   /auth/login	     Login with JWT	               ❌
POST	   /api/shorten	     Create short URL	             ✅
GET	     /r/:shortCode	   Redirect to original URL	     ❌
GET	     /api/stats/:code	 View analytics for short URL	 ✅

📄 Full docs available at: http://localhost:3001/docs


🔐 Authentication (Bonus Feature)
JWT-based authentication

Secure password hashing with bcrypt

Routes like /api/shorten and /api/stats/:code require a valid JWT


🚫 Rate Limiting (Bonus Feature)
The /auth/login route is protected from brute-force attacks using @nestjs/throttler.

✅ Configuration
Max Requests: 5 per IP

Window: 60 seconds

Scoped: Only on /auth/login

@Throttle('login')
@Post('login')

ThrottlerModule.forRoot([
  {
    name: 'login',
    ttl: 60000,
    limit: 5,
  },
])

📎 Custom Error Response

{
  "statusCode": 429,
  "error": "Too Many Requests",
  "message": "Too many login attempts. Try again in a minute.",
  "path": "/auth/login",
  "timestamp": "2025-07-28T16:00:00.000Z"
}

🌐 Deployed URL
Coming soon... (Add your Railway/Render/EC2 URL here)


🎥 Project Demo
📹 Watch Demo


✅ Bonus Features Completed
 JWT-based authentication system

 Rate limiting on login route

 Swagger API documentation


👨‍💻 Author
Ash Bagda
GitHub


---

### ✅ Next Steps for You:
1. Replace:
   - `your-username` in GitHub link
   - `your-demo-link` with your Google Drive or Loom link
   - `Deployed URL` if you've deployed it
2. Save it as `README.md` in your root folder.

Let me know if you want a `video script` or help writing your project explanation for the demo!


