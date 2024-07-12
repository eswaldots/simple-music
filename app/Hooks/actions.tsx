import { createContext, useContext } from "react";
import { Audio } from "expo-av";
import { GlobalSong } from "./actualSong";
//const { isPlaying, setIsPlaying } = useContext(GlobalSong);
export const pauseSound = createContext(async () => {
  const { song, setSong } = useContext(GlobalSong);
  const { rate, setRate } = useContext(GlobalSong);
  const time = await song.getStatusAsync();
  await song.pauseAsync();
  setRate(() => time.positionMillis);
});

