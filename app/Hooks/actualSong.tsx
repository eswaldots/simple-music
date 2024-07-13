import { createContext, useContext, useState } from "react";
import { Audio } from "expo-av";
export const GlobalSong = createContext({
  idSong: 0,
  setIdSong: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  rate: 0,
  setRate: () => {},
  sound: undefined,
  setSound: () => {},
  mp3: undefined,
  setMp3: () => {},
  percent: 0,
  setPercent: () => {},
  total: 0,
  setTotal: () => {},
  isFinished: false,
  setIsFinished: () => {},
});
export const GlobalProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [idSong, setIdSong] = useState(0)
  const [rate, setRate] = useState(0);
  const [sound, setSound] = useState("");
  const [mp3, setMp3] = useState("");
  const [percent, setPercent] = useState(0);
  const [total, setTotal] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  return (
    <GlobalSong.Provider
      value={{
        isPlaying,
        setIsPlaying,
        rate,
        setRate,
        sound,
        setSound,
        percent,
        total,
        setPercent,
        setTotal,
        idSong,
        setIdSong,
        isFinished,
        setIsFinished
      }}
    >
      {children}
    </GlobalSong.Provider>
  );
};
