Here's the enhanced GitHub README with Postman documentation included:

```markdown
# 🚀 Next.js + Spring Boot Full-Stack Assignment

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Boot">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman">
</div>

## 📝 Overview

A full-stack application with:
- **Frontend**: Next.js (TypeScript) with responsive UI
- **Backend**: Spring Boot REST API with custom authentication
- **Features**: Post creation, listing, and header-based auth

![App Screenshot](/screenshots/app-preview.png)

## 📚 Postman Documentation

### Collection Import
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/REPLACE-WITH-YOUR-COLLECTION-ID)

Or import manually:
1. Download the [Postman Collection](/postman/Pinggy-Assignment.postman_collection.json)
2. Import into Postman

### API Endpoints

#### 1. Create Post
```http
POST {{baseUrl}}/post
Headers:
  Content-Type: application/json
  PinggyAuthHeader: your-auth-code
```

**Sample Request Body:**
```json
{
  "title": "First Post",
  "body": "This is my first post content"
}
```

**Success Response (200):**
```json
{
  "title": "First Post",
  "body": "This is my first post content",
  "pinggyAuthHeader": "your-auth-code"
}
```

#### 2. List All Posts
```http
GET {{baseUrl}}/list
Headers:
  PinggyAuthHeader: your-auth-code
```

**Success Response (200):**
```json
[
  {
    "title": "First Post",
    "body": "This is my first post content",
    "pinggyAuthHeader": "your-auth-code"
  }
]
```

#### Error Responses
| Status Code | Description                  | Sample Response              |
|-------------|------------------------------|------------------------------|
| 401         | Missing/invalid auth header  | `{"error": "Unauthorized"}`  |
| 400         | Invalid request body         | `{"error": "Bad Request"}`   |

## ✨ Features

### Frontend (Next.js)
✔️ Modern UI with Tailwind CSS  
✔️ Form validation with react-hook-form  
✔️ Loading states and error handling  

### Backend (Spring Boot)
✔️ Custom authentication filter  
✔️ ThreadLocal storage for request context  

## 🛠️ Tech Stack

| Area         | Technologies                          |
|--------------|---------------------------------------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS  |
| **Backend**  | Spring Boot 3, Java 17                |

## 🚀 Getting Started

```bash
# Backend
cd backend
mvn spring-boot:run

# Frontend
cd frontend
yarn dev
```

## 📂 Project Structure

```
postman/
  Pinggy-Assignment.postman_collection.json # Postman collection
  Pinggy-Env.postman_environment.json      # Environment variables
```

## 🖼️ Screenshots

| Postman Collection | API Response |
|--------------------|--------------|
| ![Postman](/screenshots/postman-collection.png) | ![API](/screenshots/api-response.png) |

## 📜 License
MIT License
```

**Key Additions:**
1. Postman badge in the header
2. Dedicated Postman documentation section with:
   - One-click "Run in Postman" button
   - Detailed endpoint documentation
   - Sample requests/responses
   - Error code reference
3. Postman collection files in project structure
4. Postman-related screenshots

**To complete this setup:**
1. Export your Postman collection to `/postman` folder
2. Replace the collection ID in the "Run in Postman" button
3. Add actual screenshots of your Postman tests

Would you like me to provide a sample Postman collection JSON file or any specific Postman test examples?
