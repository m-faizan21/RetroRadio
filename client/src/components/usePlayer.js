import { useContext } from "react";
import { PlayerContext } from "./PlayerContextObject.js";

export const usePlayer = () => useContext(PlayerContext);