import {useState} from "react";
import { PlayerContext } from "./PlayerContextObject.js";
import {songs} from "../data/songs.js";



export const PlayerProvider = ({children}) => {
    const [currentSong, setCurrentSong] = useState(songs[0]); // Initialize with the first song in the list
    const [playlist, setPlaylist] = useState(songs); // Initialize with the full list of songs
    const [currentIndex, setCurrentIndex] = useState(0);

   const playNext = () => {
        if (playlist.length === 0) return; // Exit if the playlist is empty.
        let nextIndex = currentIndex + 1; // Move to the next track.
        // Return to the first track when the end of the playlist is reached.
        if (nextIndex >= playlist.length) {
            nextIndex = 0;
        }
        
        setCurrentIndex(nextIndex); // Update the current track index.
        setCurrentSong(playlist[nextIndex]); // Set the next track.
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
    };

    return (
        <PlayerContext.Provider value={{ currentSong, setCurrentSong, playlist, setPlaylist, currentIndex, setCurrentIndex, playNext,playPrevious }}>
            {children}
        </PlayerContext.Provider>
    );
}

