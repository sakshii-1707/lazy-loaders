# 🚀 Lazy Loaders – React Routing & Lazy Loading Experiments

This repository contains two React experiments focused on:

- Route-based navigation
- Code splitting using React.lazy
- Suspense fallback handling
- Component organization and routing structure

The purpose of this project is to understand how React handles routing and improves performance through lazy loading.

---

# 📌 Experiment 1: Lazy Routing App

## 🔍 Overview

A routing experiment demonstrating lazy loading between:

- Home
- About
- Contact

Each page is dynamically imported and rendered only when accessed.

## 🧠 Concepts Demonstrated

- Route-based lazy loading
- Dynamic imports (`import()`)
- Suspense fallback UI
- Code splitting
- Navigation using React Router DOM

## 🏗 Structure

routing-lazy/

src/  
 ├── pages/  
 │   ├── Home.jsx  
 │   ├── About.jsx  
 │   └── Contact.jsx  
 ├── App.jsx  
 ├── main.jsx  
 └── App.css  

## ⚙️ Key Implementation

```js
const Home = lazy(() => import("./pages/Home"));
<Suspense fallback={<div className="loader">Loading...</div>}>


#Experiment 2: Profile Dashboard App
🔍 Overview

A simple profile dashboard showcasing:

Profile information

Projects and internships

Skills section

Navigation between sections

This experiment focuses on understanding routing setup and component structuring.

🧠 Concepts Demonstrated

Routing configuration

Component-based structure

Navigation using React Router

Layout organization

🏗 Structure

lazy-loading/

src/
├── Components/
│ └── dashboard.jsx
├── App.jsx
├── main.jsx
└── App.css

🔥 What This Repository Demonstrates

✔ Understanding of React Router
✔ Implementation of React.lazy & Suspense
✔ Route-based code splitting
✔ Performance-aware development
✔ Organized component structure

⚙️ Installation

Clone the repository:

git clone https://github.com/sakshii-1707/lazy-loaders.git

Navigate to project folder:

cd lazy-loaders
npm install
npm run dev

## ✅ Results

- Successfully implemented route-based navigation across multiple components.
- Applied React.lazy and Suspense for dynamic component loading.
- Achieved route-level code splitting to optimize performance.
- Displayed a centered fallback loader during initial component load.
- Observed faster navigation after first load due to component caching.
- Structured multiple React experiments within a single repository in an organized manner.
- Improved understanding of routing architecture and dynamic imports in React.
- Gained hands-on experience with performance-aware frontend development.

<img width="1914" height="813" alt="image" src="https://github.com/user-attachments/assets/f86af605-0a47-45a2-acf6-9642182438c5" />

<img width="1437" height="844" alt="image" src="https://github.com/user-attachments/assets/f28903c5-f668-4d59-9dc6-0f7131276832" />

<img width="1797" height="759" alt="image" src="https://github.com/user-attachments/assets/dd58ab24-fc39-46f9-a8e1-71cb85ad6aae" />

<img width="1617" height="768" alt="image" src="https://github.com/user-attachments/assets/caa69cf4-61b2-4e5c-a28b-4460ff3f2d81" />



