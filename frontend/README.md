# UberClone Frontend

This is the frontend for the UberClone project, built with React and Vite. It provides user and captain authentication, registration, protected pages, and context-based state management.

---

## Features

- **User Flow:** Register, login, logout, and access protected user pages.
- **Captain Flow:** Register, login, logout, and access protected captain pages.
- **Context API:** Authentication state managed via React Context for both users and captains.
- **Protected Routes:** Only authenticated users/captains can access their respective home and logout pages.
- **Responsive UI:** Modern design with social login buttons (Google, Apple, Facebook).

---

## Project Structure

```
frontend/
├── .env
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── context/
│   │   ├── CaptainContext.jsx
│   │   └── UserContext.jsx
│   └── pages/
│       ├── CaptainHome.jsx
│       ├── CaptainLogin.jsx
│       ├── CaptainLogout.jsx
│       ├── CaptainProtectedWrapper.jsx
│       ├── CaptainSignup.jsx
│       ├── Home.jsx
│       ├── Start.jsx
│       ├── UserLogin.jsx
│       ├── UserLogout.jsx
│       ├── UserProtectedWrapper.jsx
│       └── UserSignup.jsx
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Go to the frontend folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file and set your backend API URLs:
   ```
   VITE_BASE_URL=http://localhost:5000
   VITE_BACKEND_URL=http://localhost:5000
   ```

### Running the App

Start the development server:
```
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Main Pages & Routes

| Route                | Description                          |
|----------------------|--------------------------------------|
| `/`                  | Start page (choose user/captain)     |
| `/login`             | User login                           |
| `/signup`            | User registration                    |
| `/Home`              | User protected home                  |
| `/users/logout`      | User logout (protected)              |
| `/captain-login`     | Captain login                        |
| `/captain-signup`    | Captain registration                 |
| `/captain-home`      | Captain protected home               |
| `/captains/logout`   | Captain logout (protected)           |

---

## Authentication Flow

- **Login/Signup:** On success, JWT token is stored in `localStorage`.
- **Protected Pages:** Wrapped with `UserProtectedWrapper` or `CaptainProtectedWrapper` to check authentication and fetch profile.
- **Logout:** Removes token and redirects to login.

---

## Context Usage

- `UserContext.jsx` and `CaptainContext.jsx` provide global state for user/captain data and authentication status.

---

## Customization

- Update API endpoints in `.env` as needed.
- Modify styles in `App.css` and `index.css`.
- Add more pages/components as required.

---

##