# 📚 MERN Book Store

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb\&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase\&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss\&logoColor=white)

A **full-stack MERN Book Store** application built using **MongoDB, Express.js, React.js, and Node.js**. The application provides a complete online bookstore experience with secure authentication, book management, shopping cart, order processing, and an admin dashboard.

---

## 🚀 Features

### 👤 User Features

* 🔐 User Registration & Login using Firebase Authentication
* 📚 Browse all available books
* 🔍 View detailed information about each book
* 🛒 Add books to shopping cart
* ❌ Remove individual items from cart
* 🗑️ Clear entire shopping cart
* 📦 Place orders
* 📄 View order history
* 📱 Fully responsive design

### 👨‍💼 Admin Features

* ➕ Add new books
* ✏️ Edit existing books
* 🗑️ Delete books
* 📊 Admin Dashboard
* 📈 View sales statistics
* 📚 Manage book inventory
* 📦 Manage customer orders

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Redux Toolkit
* RTK Query
* Tailwind CSS
* Swiper.js
* React Hook Form
* SweetAlert2

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Authentication

* Firebase Authentication
* Google Sign-In

### Database

* MongoDB Atlas

### Tools

* Git
* GitHub
* Postman
* VS Code

---

## 📂 Project Structure

```text
Book-Store/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── books/
│   │   ├── orders/
│   │   ├── users/
│   │   └── stats/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/adityanagalla7/Book-Store.git
```

### 2. Navigate to the project

```bash
cd Book-Store
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Install backend dependencies

```bash
cd ../backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
DB_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Create a `.env` file inside the **frontend** folder if required for Firebase configuration.

---

## ▶️ Run the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Open your browser:

```
http://localhost:5173
```

---

## 📸 Application Modules

* 🏠 Home Page
* 📚 Book Listing
* 📖 Book Details
* 🔐 Login & Registration
* 🛒 Shopping Cart
* 💳 Checkout
* 📦 Order History
* 📊 Admin Dashboard
* 📚 Book Management

---

## 🔥 API Overview

### Books

* GET `/api/books`
* GET `/api/books/:id`
* POST `/api/books/create-book`
* PUT `/api/books/edit/:id`
* DELETE `/api/books/del/:id`

### Orders

* POST `/api/orders`
* GET `/api/orders/email/:email`

### Admin

* GET `/api/admin/stats`

---

## 📈 Future Improvements

* 💳 Payment Gateway Integration (Stripe/Razorpay)
* ❤️ Wishlist
* ⭐ Book Ratings & Reviews
* 🔎 Advanced Search & Filters
* 📧 Email Notifications
* 📱 Progressive Web App (PWA)
* 🌙 Dark Mode

---

## 📚 What I Learned

Through this project I gained practical experience with:

* Building a complete MERN Stack application
* Designing REST APIs with Express.js
* MongoDB Atlas integration using Mongoose
* Firebase Authentication
* Redux Toolkit & RTK Query
* State management in React
* CRUD operations
* Admin dashboard development
* Shopping cart implementation
* Order management
* Responsive UI development using Tailwind CSS
* Git & GitHub workflow

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Aditya Nagalla**

* GitHub: https://github.com/adityanagalla7

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.

It motivates me to build more open-source projects.
