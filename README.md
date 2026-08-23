# 🎵 Retro Radio (Work In Progress)

A modern, responsive music streaming Single Page Application (SPA), featuring a global audio player with independent ambience/mood layering planned for future phases.

## 🚀 Current Progress

**Phase 1 — Foundation**
* Initialized React application using Vite
* Configured React Router DOM for navigation
* Set up Tailwind CSS with a dark-themed layout

**Phase 2 — Player + State Management**
* Built a reusable `SongCard` component driven by props
* Rendered dynamic song listings using `.map()` over a song data array
* Implemented a persistent `MusicPlayer` with play/pause, seek bar, and live progress/duration display
* Added global state management via React Context API (`PlayerContext` + `usePlayer` hook) to sync the currently playing song across components without prop drilling

**Upcoming**
* Backend API (Express + MongoDB) for real song data
* User authentication (JWT + HttpOnly cookies)
* Personal playlists with ownership-based access control
* "Mahol" — independent ambience/mood audio layer (rain, café, roadside, etc.)

## 🛠️ Tech Stack
* React.js + Vite
* React Router DOM
* Tailwind CSS
* Context API (state management)
* *(Planned: Node.js, Express, MongoDB, JWT)*

## ⚙️ Local Setup Instructions

1. Clone the repository:
   git clone https://github.com/m-faizan21/RetroRadio.git

2. Navigate to the client directory:
   cd client

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

## 👨‍💻 Author
Mohd Faizan