import { useContext, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import Svg, { Path, G, Circle, Defs, Rect } from "react-native-svg";
import { Slider } from "@react-native-assets/slider";
import { GlobalSong } from "../Hooks/actualSong";
import {useRouter} from "expo-router"
// Svg de los iconos del reproductor
function Play(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={89}
      height={87}
      fill="none"
      {...props}
    >
      <G filter="url(#a)">
        <Circle cx={44.5} cy={33} r={30} fill="#000" />
        <Path fill="#fff" d="M59.5 33 37 45.99V20.01L59.5 33Z" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}
function Next(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={30}
      fill="none"
      {...props}
    >
      <Path fill="#000" d="M30.5 15 8 27.99V2.01L30.5 15Z" />
      <Path fill="#000" d="M24.5 0h7v30h-7z" />
    </Svg>
  );
}
function Back(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={30}
      fill="none"
      {...props}
    >
      <Path fill="#000" d="M1.5 15 24 2.01v25.98L1.5 15Z" />
      <Path fill="#000" d="M7.5 30h-7V0h7z" />
    </Svg>
  );
}
function Pause(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={89}
      height={87}
      fill="none"
      {...props}
    >
      <G filter="url(#a)">
        <Rect width={60} height={60} x={14.5} y={3} fill="#000" rx={30} />
        <Path fill="#fff" d="M34 18h7v30h-7zM48 18h7v30h-7z" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}
// Controles de la cancion
<<<<<<< HEAD
export default function Controls({ total, percent, PlaySong, PauseSong, NextSong, BackSong }) {
  const router = useRouter()
=======
export default function Controls({ total, percent, PlaySong, PauseSong, QuitSong, setPosition }) {
  const router = useRouter()
  const {idSong, setIdSong} = useContext(GlobalSong);
  const [nextId, setNextId] = useState(0);
  const {rate, setRate} = useContext(GlobalSong);
>>>>>>> be28b31 (Fixing local laptop bug)
  // Estado de la cancion
  const { isPlaying, setIsPlaying } = useContext(GlobalSong);
  // Reproduce la cancion
  const PlaySound = () => {
    PlaySong();
    setIsPlaying(() => true);
  };
  // Pausa la cancion
  const PauseSound = () => {
    PauseSong();
    setIsPlaying(() => false);
  };
  const NextSound = () => {
<<<<<<< HEAD
    NextSong();
    setIsPlaying(() => true)
  }
  const BackSound = () => {
    BackSong();
  }
=======
      QuitSong();
      console.warn(idSong);
      idSong + 1 < 3 ? router.replace(`(Next)/${idSong + 1}`) :
      router.replace(`(Next)/${0}`);
  }
  const BackSound = () => {
    QuitSong();
      console.warn(idSong);
      idSong - 1 === -1 ? router.replace(`(Back)/${2}`) :
      router.replace(`(Back)/${idSong - 1}`);
  }
  //percent >= total -13 && (NextSound());
  const {isFinished, setIsFinished} = useContext(GlobalSong);

  isFinished && (NextSound());
>>>>>>> be28b31 (Fixing local laptop bug)
  return (
    <>
      <Slider
        minimumValue={0}
        thumbStyle={{ backgroundColor: 'black' }}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#FFFFFF"
        thumbTintColor="#FFFFFF"
        value={percent}
        maximumValue={total}
<<<<<<< HEAD
=======
        onValueChange={value => setPosition(value)}
        tapToSeek={true}
        slideOnTap={true}
        className="flex-auto flex-row w-full items-center justify-center bg-gray-300 drop-shadow-xl shadow-2xl max-h-2 gap-10 rounded-xl min-h-2"
        step={1}
        tapToSeek={true}
>>>>>>> be28b31 (Fixing local laptop bug)
        slideOnTap={true}
        className="flex-auto flex-row w-full items-center justify-center bg-gray-300 drop-shadow-xl shadow-2xl max-h-2 gap-10 rounded-xl min-h-2"
      ></Slider>
      <View className="flex flex-row items-center justify-center gap-10">
        <TouchableOpacity onPress={BackSound} className="mb-5">
          <Back />
        </TouchableOpacity>
        {isPlaying ? (
          <TouchableOpacity onPress={PauseSound}>
            <Pause />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={PlaySound}>
            <Play />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={NextSound} className="mb-5">
          <Next></Next>
        </TouchableOpacity>
      </View>
    </>
  );
}
