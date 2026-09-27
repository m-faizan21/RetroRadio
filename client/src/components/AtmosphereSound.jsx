import { useRef, useState } from "react";

const AtmosphereSound = ({ name, icon, file }) => {
  const audioRef = useRef(null);
  const [isOn, setIsOn] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const toggle = () => {
    if (isOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsOn(!isOn);
  };

  return (
    <div
        className={`flex items-center gap-2 backdrop-blur-md border rounded-full px-3 py-1.5 transition-colors ${
          isOn ? "bg-blue-400/30 border-blue-200/50" : "bg-zinc-900/60 border-white/10"
        }`}
      >
      <audio ref={audioRef} src={file} loop></audio>
      <button onClick={toggle} className="text-lg">
        {icon}
      </button>
      {isOn && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => {
            const newVol = Number(e.target.value);
            setVolume(newVol);
            audioRef.current.volume = newVol;
          }}
          className="w-16 accent-blue-400"
        />
      )}
    </div>
  );
};

export default AtmosphereSound;