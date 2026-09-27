import AtmosphereSound from "./AtmosphereSound.jsx";

const ambienceSounds = [
  { name: "Baarish", icon: "🌧️", file: "/Barish.mp3" },
  { name: "Hawa", icon: "🍃", file: "/Hawa.mp3" },
  { name: "Chidiya", icon: "🐦", file: "/Birds.mp3" },
];

const AtmosphereControl = () => {
  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-2 items-end">
      {ambienceSounds.map((sound) => (
        <AtmosphereSound key={sound.name} {...sound} />
      ))}
    </div>
  );
};

export default AtmosphereControl;