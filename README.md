# 📘 Online Examination Management System

An **Online Examination Management System** developed as a full-stack web application for academic use.  
The system provides a secure and structured platform where **teachers** can create and manage online examinations, and **students** can attempt exams within a predefined time limit.

This project is designed to automate the complete examination lifecycle and reduce the limitations of traditional, manual examination systems.

---

## 🚀 Features

### 👩‍🏫 Teacher Module
- Secure login and authentication
- Create and manage examinations
- Add **MCQ** and **Direct/Descriptive** questions
- Publish exams for students
- View exam statistics and student performance
- Manage students (view and delete student records)

### 👨‍🎓 Student Module
- Secure registration and login
- Attempt exams within a defined time duration
- Automatic exam submission on time expiry
- View exam results and best score.

---

## 🛠️ Technology Stack

### Frontend
- HTML  
- CSS (custom UI with animations)  
- Vanilla JavaScript (SPA-style navigation)

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Tools & Libraries
- Mongoose (MongoDB ODM)  
- JSON Web Token (JWT)  
- Visual Studio Code  

---

## 🧱 System Architecture

The project follows a **three-tier architecture**:

1. **Presentation Layer**  
   - User Interface built with HTML, CSS, and Vanilla JavaScript  
   - SPA-style navigation using `history.pushState()`  

2. **Application Layer**  
   - Backend logic implemented using Node.js and Express.js  
   - RESTful API architecture  

3. **Data Layer**  
   - MongoDB database for persistent data storage  

The frontend and backend communicate through **internally developed REST APIs**.

---

## 🗄️ Database Collections

- **Users** – Stores student and teacher details  
- **Exams** – Stores exam metadata and configuration  
- **Questions** – Stores MCQ and direct questions linked to exams  
- **Attempts** – Stores student exam attempts, answers, and scores  

---

## 🔐 Authentication & Security

- JWT-based authentication  
- Role-based access control (Student / Teacher)  
- Secure password storage  
- Protected API routes  
- Time-bound exam enforcement  

---

## 📂 Project Documentation

Complete project documentation is available in:

- `documentation.md` – Contains detailed explanation of system design, database schema, modules, APIs, and architecture  

---

## ⚠️ Limitations

- Requires a stable internet connection  
- Browser-dependent execution  
- No AI-based proctoring implemented  

---

## 🔮 Future Enhancements

- AI-based cheating detection and proctoring  
- Live exam monitoring  
- Mobile application support  
- Export results in PDF / Excel format  
- Advanced admin analytics dashboard  

---

## 📌 Note

This project uses **only internally developed REST APIs**.  
❌ No external or third-party APIs or frontend frameworks are used.

---

## 👤 Author

**Shrawan Kumar Jha**  
BSc Information Technology  
Final Year Academic Project

---

## 📜 License

This project is developed strictly for **academic and educational purposes**.
