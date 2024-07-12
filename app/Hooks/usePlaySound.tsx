import {GlobalSong} from "./actualSong"
export default async function playSound(mp3) {
    const { isPlaying, setIsPlaying } = useContext(GlobalSong);
    const { song, setSong } = useContext(GlobalSong);
    const { sound } = await Audio.Sound.createAsync(mp3);
    const { rate, setRate } = useContext(GlobalSong);
    console.log("Loading Sound");
    console.log("Playing Sound");
    setIsPlaying(true);
    setSong(sound);
    await sound.playFromPositionAsync(rate);}