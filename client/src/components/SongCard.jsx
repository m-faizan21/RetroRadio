import { usePlayer } from "./usePlayer.js";

const SongCard = ({ title, artist, src, index, songsList }) => {
  const { setCurrentSong, setPlaylist, setCurrentIndex, setShouldAutoPlay } = usePlayer();

  const handleClick = () => {
    setPlaylist(songsList);
    setCurrentIndex(index);
    setCurrentSong({ title, artist, src });
    setShouldAutoPlay(true); // Set shouldAutoPlay to true when a song is clicked
    localStorage.setItem("lastSongIndex", index); // Save the clicked song index to localStorage for persistence
  };

  return (
    <div onClick={handleClick} className="bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700 transition duration-300 cursor-pointer w-24 shrink-0">
      <div className="w-full h-20 bg-zinc-600 rounded-md mb-2"></div>
      <h3 className="text-white font-bold truncate text-sm">{title}</h3>
      <p className="text-zinc-400 text-xs truncate">{artist}</p>
    </div>
  );
};

export default SongCard;