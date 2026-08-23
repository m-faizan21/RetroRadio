import SongCard from '../components/SongCard';

const songs = [
  { title: "Tu Pyar Hai Kisi Aur Ka", artist: "Kumar Sanu", src: "/khwaab-ka-musafir.mp3" },
  { title: "Dil Diyan Gallan", artist: "Arijit Singh" , src: "/khwaab-ka-musafir.mp3"},
  { title: "Channa Mereya", artist: "Arijit Singh", src: "/khwaab-ka-musafir.mp3" },
  { title: "Tum Hi Ho", artist: "Arijit Singh", src: "/khwaab-ka-musafir.mp3" },
  { title: "Lag Jaa Gye", artist: "Arijit Singh", src: "/khwaab-ka-musafir.mp3" },
  { title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", src: "/khwaab-ka-musafir.mp3" },

];

const Home = () => {
  return (
    <div className="p-8 pt-24 bg-zinc-950 min-h-screen">
      <h2 className="text-white text-2xl font-bold mb-6">Trending Now</h2>
      <div className="flex flex-wrap gap-6">
        {songs.map((song) => (
          <SongCard key={song.title} title={song.title} artist={song.artist} src={song.src} />
        ))}
      </div>
    </div>
  );
};

export default Home;