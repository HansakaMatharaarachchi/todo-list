# 🚀 React Todo List with User Authentication

This is a React application that provides a **Todo List** with basic **user authentication**. The project demonstrates how to manage user authentication using React's context and local state, and allows users to add, edit, delete, and mark todo items as complete/incomplete.

## 🌟 Features

### 1. **User Authentication**
- **Sign Up**: Users can register with an email, password, and name.
- **Login**: Users can log in using their registered email and password.
- **Authentication State Management**: Managed with React Context.
- **Form Validation**: Basic validation using **Formik** and **Yup**.
- **Error Feedback**: Users are notified of success/failure during login/registration.

### 2. **Todo List**
- **Add Todo**: Users can create new todo items by providing a title and description.
- **Edit Todo**: Modify existing todo items.
- **Delete Todo**: Remove items from the todo list.
- **Toggle Completion**: Mark todos as completed or incomplete.
- **Data Persistence**: Todos persist across page reloads using browser local storage.

### 3. **Additional Features**
- **Client-Side Routing**: **React Router** is used to separate authentication and todo pages.
- **Responsive Design**: The app is optimized for both desktop and mobile.
- **Clean UI**: Modern, clean design with user-friendly forms and validation feedback.
  
---

## 📚 Tech Stack

- **React**: Frontend framework
- **React Context**: To manage state globally
- **Formik**: For form state management
- **Yup**: For validation schema
- **React Router**: For navigation between pages
- **Tailwind and Antd**: For responsive and clean UI styling
- **LocalStorage**: For persisting todo data across sessions

---

## ⚙️ Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure that you have the following installed:
- [Node.js](https://nodejs.org/en/) (v14 or later)
- npm (Node Package Manager) or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HansakaMatharaarachchi/todo-list.git
   cd todo-list
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   Or, if you're using yarn:
   ```bash
   yarn install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```
   Or for yarn:
   ```bash
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:5173/`.

---

By following this README, you should be able to get the project up and running easily ✨

---
