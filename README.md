# 🎬 Jetflix — Discover Your Next Favorite Movie

**Jetflix** is a movie discovery and watchlist application built using React. It allows users to search for movies, explore movie details, discover cast information, and save their favorite movies to a personal watchlist.

The application uses the TMDb API to retrieve movie information and Redux Toolkit to manage application-wide state.

## ✨ Features

- **Movie Search:** Search for movies using the TMDb API.
- **Debounced Search:** Reduces unnecessary API requests while users type.
- **Movie Details:** Explore detailed information about individual movies.
- **Cast Information:** View the cast associated with a movie.
- **Watchlist Management:** Add and remove movies from your personal watchlist.
- **Persistent Watchlist:** Preserves saved movies using browser LocalStorage.
- **Pagination:** Navigate through multiple pages of search results.
- **Movie Sorting:** Sort movies based on their ratings.
- **Loading & Error Handling:** Provides appropriate feedback during API requests and when errors occur.
- **Responsive UI:** A dark, cinematic interface designed for a movie discovery experience.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| Redux Toolkit | Managing global application state |
| React Redux | Connecting React components to Redux |
| React Router DOM | Client-side navigation |
| Axios | Making HTTP requests |
| Material UI | UI components and styling |
| MUI Icons | Interface icons |
| TMDb API | Movie information and cast data |
| LocalStorage | Persisting the watchlist |

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar/
│   ├── SearchBar/
│   ├── MovieCard/
│   ├── MovieList/
│   ├── Loading/
│   ├── CastCard/
│   ├── CastList/
│   └── Pagination/
│
├── pages/
│   ├── Home/
│   ├── MovieDetails/
│   └── Watchlist/
│
├── redux/
│   ├── moviesSlice.js
│   ├── watchlistSlice.js
│   └── store.js
│
├── services/
│   └── tmdbApi.js
│
└── utils/
    ├── imageUtils.js
    ├── movieUtils.js
    └── storage.js
```

*The structure above describes the main architectural organization*

## 🧠 Key Implementation Details

### 1. State Management with Redux Toolkit

Redux Toolkit manages shared application state, including:

- Movie search results.
- Loading and error states.
- Current pagination details.
- Search query and sorting preferences.
- User watchlist.

This keeps shared data consistent across different pages and components.

### 2. Asynchronous API Requests

Used `createAsyncThunk` and Axios to handle asynchronous movie API requests.

The TMDb API provides movie search results, movie details, and cast information.

### 3. Debounced Search

Implemented a debounce mechanism in the search component to avoid making an API request for every keystroke.

This improves the search experience and reduces unnecessary network requests.

### 4. Watchlist Persistence

Redux Toolkit manages watchlist operations, while LocalStorage preserves the saved movies across browser refreshes.

### 5. Pagination and Sorting

Implemented pagination for navigating movie search results and Redux-based sorting to maintain the selected sorting preference while navigating between pages.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- A TMDb API account and API access token

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the project directory

```bash
cd Jetflix
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the environment variable

Create a `.env.local` file in the project root and add your TMDb API access token:

```env
VITE_TMDB_TOKEN=your_tmdb_access_token
```

**Note:** Never commit your actual API token to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access Jetflix.

## 🎨 Design

Jetflix features a dark cinematic interface with navy and purple backgrounds, complemented by pink accents.

The design focuses on creating an enjoyable movie discovery experience with custom branding and dedicated empty-state artwork.

## 📚 What I Learned

Building Jetflix helped me strengthen my practical understanding of:

- React component architecture and reusable components.
- Managing shared state using Redux Toolkit.
- Handling asynchronous operations with `createAsyncThunk`.
- Integrating third-party APIs using Axios.
- Implementing client-side routing.
- Managing persistent state using LocalStorage.
- Handling loading, error, and empty states.
- Organizing a React application into maintainable modules.

## 🔮 Future Improvements

- User authentication and individual watchlists.
- Advanced movie filtering and discovery.
- Improved mobile responsiveness.
- Additional movie and TV show discovery features.

## 👨‍💻 Author

**Karthik Kona**

A Computer Science graduate interested in software development, Java, React, and full-stack application development.

---

*Jetflix — Good Movies. Great Vibes.*
