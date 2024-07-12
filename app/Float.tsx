import { View, Image, Text, TouchableOpacity, Button } from "react-native";
import Controls from "./assets/Controls";
import Svg, { Path, G, Circle, Defs, Rect } from "react-native-svg";
import { useContext, useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import { GlobalSong } from "./Hooks/actualSong";
import { playSound, pauseSound } from "./Hooks/actions";
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
<<<<<<< HEAD
export default function Float({ id = null, name, artist, img, mp3 }) {
=======
export default function Float({here, id = null, name, artist, img, mp3 }) {
>>>>>>> be28b31 (Fixing local laptop bug)
  const { percent, setPercent } = useContext(GlobalSong);
  const { total, setTotal } = useContext(GlobalSong);
  const router = useRouter();
  // Define el sonido actual
  const { sound, setSound } = useContext(GlobalSong);
  // Tiempo en el que se pauso
  const { rate, setRate } = useContext(GlobalSong);
  // No ejecutar el useEffect al principio de la aplicación
  const firstRender = useRef(true);
  // Reproduce el sonido
<<<<<<< HEAD
  async function playSound(millis) {
=======
  async function playSound() {
>>>>>>> be28b31 (Fixing local laptop bug)
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(mp3, {
      shouldPlay: isPlaying,
      positionMillis: rate || 0,
    });
    setIsPlaying(true);
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate(Playback);
  }
<<<<<<< HEAD
  const Playback = async (e) => {
    setPercent(e.positionMillis);
    setTotal(e.durationMillis);
=======
  const {isFinished, setIsFinished} = useContext(GlobalSong);
  const Playback = async (e) => {
    setPercent(e.positionMillis);
    setTotal(e.durationMillis);
    setIsFinished(e.didJustFinish);
>>>>>>> be28b31 (Fixing local laptop bug)
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
<<<<<<< HEAD
    playSound();
=======
>>>>>>> be28b31 (Fixing local laptop bug)
  }
  // Quita el sonido de la memoria
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
<<<<<<< HEAD
  }, [sound]);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      quitSound();
    }
  }, [name]);
=======
  }, [name]);
 useEffect(() => {
    if (sound) {
      quitSound();
      playSound();}
  }, [here]);
>>>>>>> be28b31 (Fixing local laptop bug)
  const { isPlaying, setIsPlaying } = useContext(GlobalSong);
  const changeState = () => {
    isPlaying
      ? (setIsPlaying(false), pauseSound())
      : (setIsPlaying(true), playSound(rate));
  };
  return (
    <View className="absolute bottom-0 my-auto mx-auto left-0 right-0 bg-opacity-60 px-[25px] py-5 gap-5 bg-slate-100 flex flex-1 max-h-42  flex-row max-w-screen items-center">
      <View className="size-16 rounded-xl bg-slate-200">
        <Image className="size-16 rounded-xl" source={img} />
      </View>
      <TouchableOpacity
        onPress={() => router.push(`(Songs)/${id}`)}
        classname="flex flex-col"
      >
        <Text className="text-xl font-medium">{name}</Text>
        <Text className="opacity-40 text-md font-normal">{artist}</Text>
      </TouchableOpacity>
      <View className="flex flex-col flex-1 max-h-20 items-end">
        <TouchableOpacity onPress={changeState}>
          {isPlaying ? <Pause /> : <Play />}
        </TouchableOpacity>
      </View>
    </View>
  );
}
