# 🎬 Movie React Application

A React movie browsing application powered by the **TMDB API**.  
It includes popular movies with pagination, now-playing and upcoming views, search, and movie details pages.

## ✨ Features

- Browse **Popular Movies** on the home page
- Load more popular movies (Redux pagination state)
- View **Now Playing** movies
- View **Upcoming** movies
- Search movies from the navbar
- Open a detailed movie page by movie ID
- Responsive layout for desktop and mobile

## 🧰 Tech Stack

- React 18
- React Router DOM
- Redux Toolkit + React Redux
- Create React App (react-scripts)
- TMDB API
- Bootstrap (via CDN) + custom CSS

## 📦 Prerequisites

- Node.js (LTS recommended)
- npm
- A TMDB API key

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_API_KEY=your_tmdb_api_key_here
```

> Never commit your API key.

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Ahmad-IR122/Movie-react-project-API.git
cd Movie-react-project-API
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

App URL:

```text
http://localhost:3000
```

## 📜 Available Scripts

- `npm start` — run development server
- `npm run build` — create production build
- `npm test` — run tests

## 🧭 Routes

- `/` — Popular movies
- `/now-playing` — Now Playing list
- `/upcoming` — Upcoming list
- `/movie/:id` — Movie details page

## 📁 Project Structure

```text
Movie-react-project-API/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── app/
│   │   └── store.jsx
│   ├── Components/
│   │   ├── Actors.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MovieHeader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Search.jsx
│   │   └── SearchResultList.jsx
│   ├── features/
│   │   └── movie/
│   │       └── movieSlice.jsx
│   ├── Images/
│   ├── pages/
│   │   ├── MovieDetails.jsx
│   │   ├── NowPlaying.jsx
│   │   └── Upcoming.jsx
│   ├── Styles/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 👨‍💻 Author

Developed by **Ahmad Irshaid**.
