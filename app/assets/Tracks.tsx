import AsyncStorage from "@react-native-async-storage/async-storage";
export const Tracks= [
   {
       id: 0,
        name: String,
        artist: String,
        img: String,
        mp3: './melee.mp3'
    },
]
const getData = async() => {
    const k = await AsyncStorage.getAllKeys();
    const vals = await AsyncStorage.multiGet(k);
    const log = JSON.parse(vals[0][1])
for(const i  in vals) {
    Tracks.push(JSON.parse(vals[i][1]))
}}
getData();
export default function Redirect()  {
    return (
        <Redirect href='index' />
    )
}