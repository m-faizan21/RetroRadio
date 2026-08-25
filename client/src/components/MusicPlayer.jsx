import {useRef, useState, useEffect} from "react";
import {Volume2, Volume1, VolumeX, Play, Pause, SkipBack, SkipForward} from "lucide-react";
import {usePlayer} from "./usePlayer.js";

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const { currentSong, playNext, playPrevious } = usePlayer();

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


    useEffect(() =>{
        audioRef.current.volume = volume;
    },[volume]);

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

    const getVolumeIcon = () => {
        if (volume === 0) return <VolumeX size={20} />;
        if (volume < 0.5) return <Volume1 size={20} />;
        return <Volume2 size={20} />;
    };

    return(
        <div className="fixed bottom-0 left-0 w-full bg-zinc-900 p-4 text-white">
            <audio 
                ref={audioRef} 
                src={currentSong?.src} 
                onTimeUpdate={() => setProgress(audioRef.current.currentTime)}
                onLoadedMetadata={() => 
                    {setDuration(audioRef.current.duration);
                        setProgress(0);
                    }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            ></audio>
            <p>{currentSong ? `${currentSong.title} - ${currentSong.artist}` : "Koi gaana nahi chal raha"}</p>
            <div className="flex items-center gap-3">
                <button onClick={playPrevious}>
                    <SkipBack size={20} />
                </button>
                <button onClick={togglePlay}>
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button onClick={playNext}>
                    <SkipForward size={20} />
                </button>
            </div>

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

            <div className="flex items-center gap-2">
                <span onClick={() => setVolume(volume === 0 ? 0.8 : 0)} className="cursor-pointer">
                    {getVolumeIcon()}
                </span>
                <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                />
            </div>

        </div>
    );
};

export default MusicPlayer;