<div align="center">

# 🚀 DevStack

**A curated collection of tools, technologies, and resources for modern software developers.**

[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📌 About The Project

**DevStack** is a responsive web application designed to help developers discover, organize, and manage their modern tech stacks. Built with a focus on performance, accessibility, and sleek visual components, DevStack makes exploring developer tools effortless.

---

## 🛠️ Built With

- **Build Tool:** Vite
- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, DaisyUI
- **Icons:** React Icons (`react-icons`)

---

## ✨ Key Features

- **⚡ Responsive Dynamic Components**  
  Fully optimized layout featuring a sticky navigation header, custom responsive logo handling, and adaptive desktop/mobile footers.

- **🎨 Centralized Theme Gradients**  
  Unified global styling powered by custom CSS utilities (`bg-theme-gradient`, `text-theme-gradient`) with seamless Orange-Pink-Violet themes.

- **🔄 Interactive Tech Stack Management**  
  Add, view, and remove technologies dynamically from your personal stack with smooth UI feedback and event propagation handling.

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/devstack.git](https://github.com/your-username/devstack.git)
   cd devstack
   ```
2. **Install dependencies**

   ```bash
   npm install
   Run the development server

   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```


**FAQs**
What is JSX and why is it used in React.js?

JSX is simply a combination of HTML and JS file. We can write HTML elements and JavaScript logic in the same file. React.JS uses JSX file because it simplifies the process of creating implementing and managing components.


Props vs State:
Props are passed into a child component from its parent component to deliver certain data while State is a variable which is created and used in a component to store local dynamic data. A prop cannot be modified from a child component but a state can be updated.

useState:
useState is a React hook, used for storing site's local data so that it can be used for developing different logic in the site. useState hook comes with a state variable and a setter function that sets and changes the value of the variable.
For example, I've used it to show the skill cards added in  the 'Your Stack' section in DevStack website.

useEffect:
useEffect is another hook in React which is used to perform a certain work which's result or effect has to be used in other functionalities in a website. Such as loading data from api with useEffect and let the whole site use the data.
I had to load the JSON data because it let the website to be dynamic and gives a chance to use components dynamically.  .json is the standard language for api and data communication, that's why the data is in JSON format.


Key in .map() method:
.map() iterates through an array and assigning an unique value to each item through key prop let the method recognise,  compare and manage each item more accurately.

Conditional Rendering:
This is a way of showing elements dynamically depending on certain conditions in a website. It renders specific UI elements in the website through conditional evaluation, declared with ternary operator.


Data sharing between parent and child component:
In a React application, data is sent through props from a parent to a child component. And a child component can send data through a callback function passed down from its parent as arguments.