# TNskills_AIblognest
# AI BlogNest 🤖📝

AI BlogNest is a blog management API that allows users to create, read, update, and delete blog posts. It also integrates Gemini AI to generate blog content and summarize existing content.

## Features

- User Registration and Login
- JWT Authentication
- Create, Read, Update and Delete Blogs
- MongoDB Database Integration
- AI Blog Generation
- AI Content Summarization
- REST API Testing using Thunder Client

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Google Gemini API
- Thunder Client
- VS Code

## Project Structure

```text
src/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── blogController.js
│   └── aiController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── models/
│   ├── User.js
│   └── Blog.js
├── routes/
│   ├── authRoutes.js
│   ├── blogRoutes.js
│   └── aiRoutes.js
├── services/
│   └── geminiService.js
├── app.js
└── server.js
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Blogs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/blogs/` | Create a new blog |
| GET | `/api/blogs/` | Get all blogs |
| GET | `/api/blogs/:id` | Get a specific blog |
| PUT | `/api/blogs/:id` | Update a blog |
| DELETE | `/api/blogs/:id` | Delete a blog |

### AI Features

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/ai/generate-blog` | Generate a blog using Gemini AI |
| POST | `/api/ai/summarize` | Summarize blog content using Gemini AI |

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Install the required packages:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.6-flash
```

Start the development server:

```bash
npm run dev
```

The API will run at:

```text
http://localhost:5000
```

## Testing

The API endpoints can be tested using Thunder Client or Postman.

The project supports user authentication, blog CRUD operations, AI-powered blog generation, and AI-powered summarization.

## Team Project

This project was developed as part of the **Naan Mudhalvan** program.

## Project Status

✅ Backend API Completed  
✅ MongoDB Connected  
✅ JWT Authentication Working  
✅ Blog CRUD Operations Working  
✅ Gemini AI Integration Working
