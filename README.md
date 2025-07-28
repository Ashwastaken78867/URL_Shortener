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

cnpm run start:dev
App will be running at: http://localhost:3001

