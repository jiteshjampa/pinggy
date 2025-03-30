
# 🚀 Pinggy Full-Stack Assignment SpringBoot + Next Js

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

## 📚 Postman Documentation

### Collection Import
[Run in Postman](https://imf-gadget.postman.co/workspace/New-Team-Workspace~e7452297-e8da-4a4f-9c00-f2ca6703be5b/collection/36484787-2f4dce94-16e1-401d-96f8-17580970023f?action=share&creator=36484787)

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
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS  |
| **Backend**  | Spring Boot 3.4.4, Java 17                |

## 🚀 Getting Started

```bash
# Backend
cd backend
mvn spring-boot:run

# Frontend
cd frontend
yarn dev
```


## 🖼️ Screenshots

