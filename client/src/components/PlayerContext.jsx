import {useState} from "react";
import { PlayerContext } from "./PlayerContextObject.js";
import {songs} from "../data/songs.js";



export const PlayerProvider = ({children}) => {

    const savedIndex = localStorage.getItem("lastSongIndex"); // Retrieve the last played song index from localStorage
    const initialIndex = savedIndex ? Number(savedIndex) : 0; // Default to the first song if no index is saved

    const [currentSong, setCurrentSong] = useState(songs[initialIndex]); // Initialize the current song based on the saved index or default to the first song
    const [playlist, setPlaylist] = useState(songs); // Initialize the playlist with the songs array
    const [currentIndex, setCurrentIndex] = useState(initialIndex); // Initialize the current index based on the saved index or default to 0


    const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

   const playNext = () => {
        if (playlist.length === 0) return; // Exit if the playlist is empty.
        let nextIndex = currentIndex + 1; // Move to the next track.
        // Return to the first track when the end of the playlist is reached.
        if (nextIndex >= playlist.length) {
            nextIndex = 0;
        }
        
        setCurrentIndex(nextIndex); // Update the current track index.
        setCurrentSong(playlist[nextIndex]); // Set the next track.
        localStorage.setItem("lastSongIndex", nextIndex); // Save the current track index to localStorage for persistence.
    };

    const playPrevious = () => {
        if (playlist.length === 0) return;

            let prevIndex = currentIndex - 1; // Move to the previous track.
            // Wrap around to the last track when the beginning of the playlist is reached.
            if (prevIndex < 0) {
                prevIndex = playlist.length - 1;
            }

        setCurrentIndex(prevIndex);
        setCurrentSong(playlist[prevIndex]);
        localStorage.setItem("lastSongIndex", prevIndex);
    };

    return (
        <PlayerContext.Provider value={{ currentSong, setCurrentSong, playlist, setPlaylist, currentIndex, setCurrentIndex, playNext, playPrevious, shouldAutoPlay, setShouldAutoPlay  }}>
            {children}
        </PlayerContext.Provider>
    );
}

