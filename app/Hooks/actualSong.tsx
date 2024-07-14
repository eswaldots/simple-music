import { createContext, useContext, useState } from "react";
import { Audio } from "expo-av";
export const GlobalSong = createContext({
    globalIds: 1,
    setGlobalIds: () => {},
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
  const [globalIds, setGlobalIds] = useState(1);
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
        setIsFinished,
          globalIds,
          setGlobalIds,
      }}
    >
      {children}
    </GlobalSong.Provider>
  );
};
