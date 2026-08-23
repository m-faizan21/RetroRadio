import {useState} from "react";
import { PlayerContext } from "./PlayerContextObject.js";



export const PlayerProvider = ({children}) => {
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <PlayerContext.Provider value={{ currentSong, setCurrentSong }}>
            {children}
        </PlayerContext.Provider>
    );
}

