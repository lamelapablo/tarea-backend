# Product API with Express, Prisma, SQLite & Image Upload

This project is a RESTful API built with **Express**, **Prisma**, and **SQLite**, designed to manage products with image support. It includes endpoints for creating and retrieving products, handles image uploads via `multer`, and serves static assets for development purposes.

## 🚀 Technologies Used

- **Express** – Fast, minimalist web framework for Node.js  
- **Prisma** – Type-safe ORM for database access  
- **SQLite** – Lightweight embedded database  
- **TypeScript** – Static typing for scalable development  
- **Multer** – Middleware for handling multipart/form-data (image uploads)

## 📦 Setup Instructions

1. **Install dependencies**

```bash
npm install
```

2. **Run DB migration**
```bash
npx prisma migrate dev --name init
```

3. **Seed the DB (optional)**
```bash
npx ts-node ./prisma/seed.ts
```

3. **Start the development server**
```bash
npm run dev
```
