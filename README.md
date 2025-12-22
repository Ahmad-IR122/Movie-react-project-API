# 🎬 Movies App

A modern **Movies Web Application** built with **React.js** as part of my **Front-End Internship at ITG**. The application allows users to explore movies using the **TMDB API**, including popular, now playing, and upcoming movies, with search functionality and detailed movie pages.

---

## 🚀 Features

* Browse **Popular Movies** (most trending movies on TMDB)
* View **Now Playing** movies in theaters
* Explore **Upcoming** movies
* 🔍 **Search Movies** with live results
* 🎞️ **Movie Details Page** (poster, overview, rating)
* ⚡ **Redux Toolkit** for global state management
* Centralized API handling using `createAsyncThunk`
* Fully responsive UI (desktop & mobile)
* Clean and modern design

---

## 🛠️ Technologies Used

* **React.js**
* **React Router DOM** (routing & navigation)
* **Redux Toolkit** (state management)
* **React Redux**
* **TMDB API** (movies data source)
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

---

## 🔑 Environment Variables

### How to Get a TMDB API Key

1. Go to the official TMDB website: [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Create an account or log in.
3. Navigate to **Settings → API** from your profile menu.
4. Click **Create** or **Request an API Key**.
5. Choose **Developer** and fill in the required information.
6. After approval, copy your **API Key (v3 auth)**.

### Using the API Key

Create a `.env` file in the root directory and add your TMDB API key:

```env
REACT_APP_API_KEY=your_tmdb_api_key_here
```

> ⚠️ Do not push your API key to GitHub.

---

## 🧠 Redux Implementation

The project uses **Redux Toolkit** to manage global application state and handle API calls efficiently.

### Redux Flow

* `movieSlice.js` manages movies data, loading state, and errors
* API requests are handled using `createAsyncThunk`
* Redux store is configured in `store.js`
* The application is wrapped with `<Provider>` in `index.js`

### Example State Shape

```js
{
  movies: [],
  status: 'idle | loading | succeeded | failed',
  error: null,
  page: 1
}
```

This approach improves scalability and avoids prop drilling.

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

The app will run at:

```
http://localhost:3000
```

---

## 🌐 API Reference

* **TMDB Base URL**

```
https://api.themoviedb.org/3
```

* **Popular Movies** (used to display trending movies)

```
/movie/popular
```

* **Now Playing Movies**

```
/movie/now_playing
```

* **Upcoming Movies**

```
/movie/upcoming
```

* **Search Movies**

```
/search/movie
```

---

## 📌 Future Improvements

* Add pagination or infinite scrolling
* Add movie trailers
* Add favorites / watchlist
* Improve animations and UI transitions

---

## 👨‍💻 Author

Developed by **Ahmad Irshaid**

---

## 📄 License

This project was developed as part of a **Front-End Internship at ITG** and uses the free **TMDB API**.

---
### <span aria-hidden="true">✅</span> Deploy Preview for *fantastic-gaufre-b957eb* ready!


|  Name | Link |
|:-:|------------------------|
|<span aria-hidden="true">🔨</span> Latest commit | 77e48a54d9ac7fe15b64df8063b6b1a37502289d |
|<span aria-hidden="true">🔍</span> Latest deploy log | https://app.netlify.com/projects/fantastic-gaufre-b957eb/deploys/6949451d0e85180008f8f4ad |
|<span aria-hidden="true">😎</span> Deploy Preview | [https://deploy-preview-10--fantastic-gaufre-b957eb.netlify.app](https://deploy-preview-10--fantastic-gaufre-b957eb.netlify.app) |
|<span aria-hidden="true">📱</span> Preview on mobile | <details><summary> Toggle QR Code... </summary><br /><br />![QR Code](https://app.netlify.com/qr-code/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2RlcGxveS1wcmV2aWV3LTEwLS1mYW50YXN0aWMtZ2F1ZnJlLWI5NTdlYi5uZXRsaWZ5LmFwcCJ9.Rg9VDnnjQ3vDS9rG_bXe3IyplKMgGlUbQtfL1J8sIfU)<br /><br />_Use your smartphone camera to open QR code link._</details> |
---
<!-- [fantastic-gaufre-b957eb Preview](https://deploy-preview-10--fantastic-gaufre-b957eb.netlify.app) -->
_To edit notification comments on pull requests, go to your [Netlify project configuration](https://app.netlify.com/projects/fantastic-gaufre-b957eb/configuration/notifications#deploy-notifications)._
---
✨ Feel free to fork the project and improve it!
