import { Text, TouchableOpacity, View } from "react-native";
import Menu from "../Menu";
import Info from "../assets/Info";
import Controls from "../assets/Controls";
import { Audio } from "expo-av";
import { useContext, useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Tracks } from "../assets/Tracks";
import { GlobalSong } from "../Hooks/actualSong";
import { loadAsync } from "expo-font";
export default function Index({}) {
  // Canciones desde el archivo de assets
  const Songs = Tracks;
  const router = useRouter();
  const actualLink = useLocalSearchParams()
  const [id, setID] = useState(Number(actualLink.id));
  const [Song, setSong] = useState({id: 0, name: '', artist: '', img: '', mp3: ''})
  useEffect(() => {
    setSong(Songs.find((Song) => Song.id === id))}, [id])
  const {idSong, setIdSong} = useContext(GlobalSong)
    const { isPlaying, setIsPlaying } = useContext(GlobalSong);
  const {isFinished, setIsFinished} = useContext(GlobalSong);
    const mp3 = Song.mp3;
    // Estado de la canción actual
    const { sound, setSound } = useContext(GlobalSong);
    // Hora de la canción
    const { rate, setRate } = useContext(GlobalSong);
    const [time, setTime] = useState(0);
    const { percent, setPercent } = useContext(GlobalSong);
    const { total, setTotal } = useContext(GlobalSong);
    // Reproduce la cancion
    async function playSound() {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync({uri: mp3}, {
        positionMillis: rate || 0,
        shouldPlay: isPlaying,
      });
      setIsPlaying(true);
      setSound(sound);
      console.log("Playing Sound");
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate(Playback);
    }
    const [nextId, setNextId] = useState(0)
    const Playback = async (e) => {
      setIsFinished(e.didJustFinish);
      setPercent(e.positionMillis);
      setTotal(e.durationMillis);
    };
    // Quita el sonido cuando hay un cambio de canción
    async function quitSound() {
      sound.unloadAsync();
      setRate(0);
    }
    // Pausa la canción y guarda el estado en donde quedo :)
    async function pauseSound() {
      const rate = await sound.getStatusAsync();
      await sound.pauseAsync();
      setRate(() => rate.positionMillis);
    }
    async function nextSound() {
      quitSound()
      setNextId(id + 1);
      nextId < 3 ? (setID(nextId)) : (setID(0))
      setIdSong(id)
    }
    async function backSound() {
      quitSound()
      setNextId(id);
      nextId - 1 === -1 ? (setID(2)) : (setID(nextId-1))
    }
    // Ni idea
    useEffect(() => {
      if (sound) {
      Playback(sound.getStatusAsync());
      }
    }, [Song]);
    useEffect(() => {
      return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
    }, [Song]);
    useEffect(() => {
      setIdSong(id);
      playSound();
    }, [Song]);
    const setPosition = (e) => {
      setPercent(e);
      sound.setPositionAsync(e);
    }
    return (
      <>
      <View className="flex flex-col flex-1 m-8 gap-5 justify-center items-stretch">
          <View className="flex flex-row flex-1 max-w-screen max-h-5 justify-center mt-4">
            <TouchableOpacity className="flex flex-row flex-1 max-h-2 shadow-2xl max-w-20 bg-black rounded-xl"></TouchableOpacity>
          </View>
          <Info title={Song.name} artist={Song.artist} img={Song.img}></Info>
          <Controls
            total={total}
            percent={percent}
            PlaySong={playSound}
            PauseSong={pauseSound}
            QuitSong={quitSound}
                        setPosition={setPosition}
                        isFinished={isFinished}
          ></Controls>
        </View>
      </>
    );
  }
