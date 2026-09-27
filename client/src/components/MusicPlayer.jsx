import { useRef, useState, useEffect } from "react";
import { Volume2, Volume1, VolumeX, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { usePlayer } from "./usePlayer.js";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const { currentSong, playNext, playPrevious, shouldAutoPlay, setShouldAutoPlay } = usePlayer();

    useEffect(() => {
    if (currentSong) {
        audioRef.current.load();
        if (shouldAutoPlay) {
        audioRef.current.play().catch((err) => {
            if (err.name !== "AbortError") console.error("Play error:", err);
        });
        setShouldAutoPlay(false);
        }
    }
    }, [currentSong]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const getVolumeIcon = () => {
    if (volume < 0.05) return <VolumeX size={18} />;
    if (volume < 0.5) return <Volume1 size={18} />;
    return <Volume2 size={18} />;
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-full shadow-lg px-6 py-3 text-white flex items-center gap-4 z-50">
      <audio
        ref={audioRef}
        src={currentSong?.src}
        onTimeUpdate={() => setProgress(audioRef.current.currentTime)}
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration);
          setProgress(0);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={playNext}
      ></audio>

      <p className="text-sm truncate w-32 shrink-0">
        {currentSong ? `${currentSong.title}` : "No song"}
      </p>

      <button onClick={playPrevious} disabled={!currentSong} className="text-white hover:text-green-400 transition-colors shrink-0">
        <SkipBack size={18} />
      </button>
      <button onClick={togglePlay} className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform shrink-0">
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
      <button onClick={playNext} disabled={!currentSong} className="text-white hover:text-green-400 transition-colors shrink-0">
        <SkipForward size={18} />
      </button>

      <input
        type="range"
        min="0"
        max={duration || 0}
        value={progress}
        onChange={(e) => {
          audioRef.current.currentTime = e.target.value;
          setProgress(e.target.value);
        }}
        className="flex-1 accent-green-500"
      />
      <span className="text-xs shrink-0">{formatTime(progress)}</span>

      <span onClick={() => setVolume(volume === 0 ? 0.8 : 0)} className="cursor-pointer shrink-0">
        {getVolumeIcon()}
      </span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="w-16 accent-green-500 shrink-0"
      />
    </div>
  );
};

export default MusicPlayer;