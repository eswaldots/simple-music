import { View, Image, Text, TouchableOpacity } from "react-native";
import Svg, {Path} from "react-native-svg";
import { useContext, useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import { GlobalSong } from "./Hooks/actualSong";
// Componente de play
function Play(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={26}
      fill="none"
      {...props}
    >
      <Path fill="#000" d="M23 13 .5 25.99V.01L23 13Z" />
    </Svg>
  );
}
// Componente de pausa
function Pause(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={30}
      fill="none"
      {...props}
    >
      <Path fill="#000" d="M.5 0h7v30h-7zM14.5 0h7v30h-7z" />
    </Svg>
  );
}
export default function Float({here, id = null, name, artist, img, mp3 }) {
  const { percent, setPercent } = useContext(GlobalSong);
    const { isPlaying, setIsPlaying } = useContext(GlobalSong);
  const { total, setTotal } = useContext(GlobalSong);
  const router = useRouter();
  // Define el sonido actual
  const { sound, setSound } = useContext(GlobalSong);
  // Tiempo en el que se pauso
  const { rate, setRate } = useContext(GlobalSong);
  // No ejecutar el useEffect al principio de la aplicación
  const firstRender = useRef(true);
  // Reproduce el sonido
    const [file, setFile] = useState('')
    useEffect(() => {
        if (mp3) {
            console.log(mp3);
        setFile(mp3)}
    }, [mp3]);
  async function playSound() {
    console.log("Loading Sound");
      console.log("File to play:", file);
      const { sound } = await Audio.Sound.createAsync({ uri: file }, {
      shouldPlay: isPlaying,
      positionMillis: rate || 0,
    });
    setIsPlaying(true);
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate(Playback);
  }
  const {isFinished, setIsFinished} = useContext(GlobalSong);
  const Playback = async (e) => {
    setPercent(e.positionMillis);
    setTotal(e.durationMillis);
    setIsFinished(e.didJustFinish);
  };
  async function pauseSound() {
    const time = await sound.getStatusAsync();
    setRate(time.positionMillis);
    await sound.pauseAsync();
  }
  // Quita el sonido cuando hay un cambio de canción
  async function quitSound() {
    sound.unloadAsync();
    setRate(0);
  }
  // Quita el sonido de la memoria
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [name]);
 useEffect(() => {
    if (sound) {
      quitSound();
      playSound();}
  }, [here]);
  const changeState = () => {
    isPlaying
      ? (setIsPlaying(false), pauseSound())
      : (setIsPlaying(true), playSound(rate));
  };
  return (
    <View className="absolute bottom-0 my-auto mx-auto left-0 right-0 px-[25px] py-5 bg-slate-200 gap-5 flex flex-1 max-h-48 flex-row max-w-screen items-center">
      <View className="container max-w-20 rounded-xl bg-black">
          <Image source={{uri: img}} className='max-w-20 h-20 bg-slate-300 rounded-xl'/>
      </View>
      <TouchableOpacity
        onPress={() => router.push(`(Songs)/${id}`)}
        classname="flex flex-col"
      >
        <Text className="text-2xl font-medium">{name}</Text>
        <Text className="opacity-40 text-xl text-md font-light">{artist}</Text>
      </TouchableOpacity>
      <View className="flex flex-col flex-1 max-h-20 items-end">
        <TouchableOpacity onPress={changeState}>
          {isPlaying ? <Pause /> : <Play />}
        </TouchableOpacity>
      </View>
    </View>
  );
}
