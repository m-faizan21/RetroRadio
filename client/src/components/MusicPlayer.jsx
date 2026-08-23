import {useRef, useState, useEffect} from "react";
import {usePlayer} from "./usePlayer.js";

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
    const { currentSong } = usePlayer();

    useEffect(() => {
        if (currentSong) {
            audioRef.current.load();
            audioRef.current.play().catch((err) => {
                                                    if (err.name !== "AbortError") {
                                                        console.error("Play error:", err);
                                                    }
                                                    });
           
            
        }
    }, [currentSong]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }   

        
    };

    const formatTime = (time) => {
        if(!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return(
        <div className="fixed bottom-0 left-0 w-full bg-zinc-900 p-4 text-white">
            <audio 
                ref={audioRef} 
                src={currentSong? currentSong.src : "/khwaab-ka-musafir.mp3"} 
                onTimeUpdate={() => setProgress(audioRef.current.currentTime)}
                onLoadedMetadata={() => 
                    {setDuration(audioRef.current.duration);
                        setProgress(0);
                    }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            ></audio>
            <p>{currentSong ? `${currentSong.title} - ${currentSong.artist}` : "Koi gaana nahi chal raha"}</p>
            <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>

            <div className="flex items-center gap-2">
                <span>{formatTime(progress)}</span>
                <input
                type="range"
                min="0"
                max={duration || 0}
                value={progress}
                onChange={(e) => {
                    audioRef.current.currentTime = e.target.value;
                    setProgress(e.target.value);
                }}
                />
                <span>{formatTime(duration)}</span>
            </div>
        </div>
    );
};

export default MusicPlayer;