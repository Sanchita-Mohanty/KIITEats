# KiitEats 🍔🍕🌮

Welcome to **KiitEats**, a food pre-ordering website designed specifically for **college canteens**. 🎓🍽️

KiitEats allows students to conveniently pre-order food, make online payments, and receive a token for food pickup. This project is being developed as a **full-stack web application** with a **React frontend** and a **Node.js backend** (currently under development).

---

## 🚀 Features

- **Pre-order Food**: Browse through a variety of food items and place your order in advance.
- **Online Payments**: Easily make payments for food orders through integrated payment systems.
- **Token Generation**: Get a unique token for seamless food pickup after ordering. 🎟️
- **Canteen Availability Map**: Check which items are available at any time with an interactive map. 🗺️
- **Responsive Design**: Fully optimized for both **desktop** and **mobile** users. 📱💻

---

## ⚙️ Tech Stack

### **Frontend (Completed)**

- **React**: For building dynamic and responsive user interfaces. ⚛️
- **HTML5**, **CSS3**, **JavaScript**: For structuring and styling the application. 🌐

### **Backend (In Progress)**

- **Node.js**: Handles server-side logic and processes requests. 🌳
- **Express.js**: Builds the backend API to manage user and order data. 🚀
- **MongoDB**: Stores user data, orders, and other dynamic content. 🗃️
- **Stripe API**: Integration for seamless online payments (future implementation). 💳

### **Additional Tools**

- **JWT (JSON Web Tokens)**: For secure user authentication (coming soon). 🔒
- **GitHub Actions**: Automates deployments and CI/CD processes. ⚙️

---

## 🛠️ Getting Started

### **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js** and **npm** on your machine. 🖥️
- **MongoDB** for the database. 📦
- **Stripe Account** for payment integration (optional for testing). 💳

### **Installation**

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/Sanchita-Mohanty/KiitEats.git
    cd KiitEats
    ```

2. **Install Dependencies**:

   - **Frontend**:
     ```bash
     cd client
     npm install
     ```

   - **Backend** (In Progress):
     ```bash
     cd server
     npm install
     ```

3. **Start the Development Server**:
   - **Frontend**:
     ```bash
     cd client
     npm start
     ```
   - The **Backend** server is under development and will be available soon. 🚧

4. **Access the Website**:  
   Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the frontend in action! 🔥

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
MONGODB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret (coming soon)
---
