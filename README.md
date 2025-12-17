# Movie-react-project-API

# 🎬 Movies App

A modern **Movies Web Application** built with **React.js** that allows users to explore movies using **TMDB API**. The app provides features like browsing popular, now playing, and upcoming movies, searching for movies, and viewing detailed movie information.

---

## 🚀 Features

* Browse **Popular Movies**
* View **Now Playing** movies
* Explore **Upcoming** movies
* 🔍 **Search** for movies with live results
* 🎞️ Movie **Details Page** (poster, overview, rating, etc.)
* ⚡ **Redux Toolkit** for global state management
* Centralized movie data fetching using async thunks
* Responsive design (works on desktop & mobile)
* Clean and modern UI

---

## 🛠️ Technologies Used

* **React.js**
* **React Router DOM** (for navigation)
* **Redux Toolkit** (state management)
* **React Redux**
* **TMDB API** (movie data)
* **Bootstrap** (layout & responsiveness)
* **CSS** (custom styling)

---

## 📁 Project Structure

```
src/
│── Components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── Card.jsx
│   ├── Search.jsx
│   ├── Footer.jsx
│
│── Pages/
│   ├── Home.jsx
│   ├── NowPlaying.jsx
│   ├── Upcoming.jsx
│   ├── MovieDetails.jsx
│
│── store/
│   └── store.js
│
│── features/
│   └── movie/
│       ├── movieSlice.js
│       └── movieThunk.js
│
│── App.jsx
│── index.js
```

````

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your TMDB API key:

```env
REACT_APP_API_KEY=58fb8d1df7ee00b190f579117698b6af
````

> ⚠️ Make sure **NOT** to push your API key to GitHub.

---

## 🧠 Redux Implementation

This project uses **Redux Toolkit** to manage global state such as movies list, loading states, errors, and pagination.

### Redux Flow

* `movieSlice.js` handles the state (movies, status, error)
* Async API calls are managed using `createAsyncThunk`
* Redux store is configured in `store.js`
* The app is wrapped with `<Provider>` in `index.js`

### Example State Shape

```js
{
  movies: [],
  status: 'idle | loading | succeeded | failed',
  error: null,
  page: 1
}
```

Redux helps keep the app scalable and avoids prop drilling.

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/movies-app.git
cd movies-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm start
```

The app will run on:

```
http://localhost:3000
```

---

## 🌐 API Reference

* **TMDB Base URL:**

  ```
  https://api.themoviedb.org/3
  ```

* **Popular Movies**

  ```
  /movie/popular
  ```

* **Now Playing**

  ```
  /movie/now_playing
  ```

* **Upcoming**

  ```
  /movie/upcoming
  ```

* **Search Movies**

  ```
  /search/movie
  ```

##

---

## 📌 Future Improvements

* Add pagination or infinite scrolling
* Add movie trailers
* Add favorites / watchlist
* Improve animations & UI transitions

---

## 👨‍💻 Author

Developed by **Ahmad Irshaid**

---

## 📄 License

This project was developed as part of my **Front-End internship @ ITG** and uses the free TMDB API.

---

✨ Feel free to fork the project and improve it!
