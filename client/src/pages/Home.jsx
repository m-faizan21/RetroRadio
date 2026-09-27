import SongCard from '../components/SongCard';
import { songs } from "../data/songs.js";
import TapriHome from "../assets/TapriHome.png";

const Home = () => {
  return (
    <div
      className="p-8 pt-24 pb-40 min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${TapriHome})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <h2 className="text-white text-2xl font-bold mb-6">Trending Now</h2>

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll hover:[animation-play-state:paused] w-max">
            {[...songs, ...songs].map((song, index) => (
              <SongCard
                key={index}
                title={song.title}
                artist={song.artist}
                src={song.src}
                index={index % songs.length}
                songsList={songs}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;