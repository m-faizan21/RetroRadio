import SongCard from '../components/SongCard';
import {songs} from "../data/songs.js";

const Home = () => {
  
  return (
    <div className="p-8 pt-24 bg-zinc-950 min-h-screen">
      <h2 className="text-white text-2xl font-bold mb-6">Trending Now</h2>
      <div className="flex flex-wrap gap-6">
        {songs.map((song,index) => (
          <SongCard
            key={song.title}
            title={song.title}
            artist={song.artist}
            src={song.src}
            index={index}
            songsList={songs}
        />
        ))}
      </div>
    </div>
  );
};

export default Home;