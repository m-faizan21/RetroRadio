import { usePlayer } from "./usePlayer.js";

const SongCard = ({ title, artist, src, index, songsList }) => {
  const { setCurrentSong, setPlaylist, setCurrentIndex } = usePlayer();

  const handleClick = () => {
    setPlaylist(songsList);
    setCurrentIndex(index);
    setCurrentSong({ title, artist, src });
  };

  return (
    <div onClick={handleClick} className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition duration-300 cursor-pointer w-48">
      <div className="w-full h-40 bg-zinc-600 rounded-md mb-4"></div>
      <h3 className="text-white font-bold truncate">{title}</h3>
      <p className="text-zinc-400 text-sm truncate">{artist}</p>
    </div>
  );
};

export default SongCard;