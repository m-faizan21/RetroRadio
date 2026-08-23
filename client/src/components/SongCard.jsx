import {usePlayer} from "./usePlayer.js";

const SongCard = ({ title, artist, src }) => {
    const { setCurrentSong } = usePlayer();
  return (
    <div onClick={() => setCurrentSong({ title, artist, src })} className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition duration-300 cursor-pointer w-48">
      {/* Gaane ka Cover Image banegi yahan */}
      <div className="w-full h-40 bg-zinc-600 rounded-md mb-4"></div>
      
      {/* Gaane ki Details */}
      <h3 className="text-white font-bold truncate">{title}</h3>
      <p className="text-zinc-400 text-sm truncate">{artist}</p>
    </div>
  );
};

export default SongCard;