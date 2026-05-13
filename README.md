# Premium Greetings & Wishes App

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A professional, production-ready internship submission for a customizable Greetings & Wishes platform. This application enables users to select background templates and automatically overlays their profile picture and name onto the image for a personalized experience.

---

## 📖 Table of Contents
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Installation & Setup](#-installation--setup)
* [Project Structure](#-project-structure)
* [Technical Documentation](#-technical-documentation)
* [Future Roadmap](#-future-roadmap)

---

## ✨ Features

### 1. Authentication Flow
- **Multi-Login Support:** Seamless integration with Google OAuth, Email/Password, and Guest login modes via Firebase.
- **Profile Integration:** Automatically captures user identity to populate the greeting templates.

### 2. Personalization Engine (Core Logic)
- **Live Preview:** Users can view templates with their name and photo overlaid in real-time.
- **Dynamic Overlay Engine:** Precision placement of user assets onto various background templates (Birthday, Anniversary, Festivals).
- **Image Generation:** Uses `html2canvas` to merge multiple DOM layers into a single downloadable image.

### 3. Monetization & UX
- **Premium Tiering:** Clear visual distinction between 'Free' and 'Premium' templates.
- **Subscription UX:** Clicking a premium template triggers a professionally designed subscription/upsell popup.
- **Framer Motion:** Smooth UI transitions and interactive elements.

### 4. Sharing Capabilities
- **Native Share Sheet:** Integrated Web Share API to allow direct sharing to WhatsApp, Instagram, and other social platforms.
- **Instant Download:** Option to save the personalized greeting directly to the device.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 18 (Vite) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **State Management** | Zustand |
| **Backend/Auth** | Firebase (Authentication & Firestore) |
| **Image Processing** | html2canvas |
| **Routing** | React Router DOM v6 |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16.0 or higher)
- npm or yarn

### Steps
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/chaithu10000/premium-greetings-app.git](https://github.com/chaithu10000/premium-greetings-app.git)
   cd premium-greetings-app
