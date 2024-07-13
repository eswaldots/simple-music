import { Link, Redirect, useRouter } from "expo-router";
import { Tracks } from "./assets/Tracks"
import { Image, View, Text, TouchableOpacity, Button} from "react-native"
import { useContext, useState } from "react";
import "./global.css"
import Float from "./Float";
import { GlobalProvider, GlobalSong } from "./Hooks/actualSong";
// Primera instancia del enrutador
export default function Index() {
    const {idSong, setIdSong} = useContext(GlobalSong);
    const router = useRouter()
    // Redirigiendo a los usuarios al reproductor ([id])
    // Inicializando la importación
    const Songs = (Tracks)
    const [here, setHere] = useState(0);
    // Mappeandola
    const Song = Tracks.find(Track => Track.id === idSong)
    return (
        <View className='p-5 py-10 flex-1 flex flex-col max-w-screen max-h-screen bg-white'>
            <Text className='font-bold text-3xl mb-5'>Featured Songs</Text>
            <TouchableOpacity onPress={() => router.push('createSong/createSong')} className='mb-5'>
            <View className='flex flex-row items-center gap-5 m-2'>
            <Image className='max-h-16 rounded-xl max-w-16' source={require('./assets/add.jpg')}/>
            <View className='flex flex-col'>
                <Text className='font-medium text-xl'>Your song</Text>
                <Text className='text-lg font-normal opacity-40'>Add a new song</Text>
            </View>
            </View>
            </TouchableOpacity>
    {Songs.map(Track => (
            <TouchableOpacity onPress={() => {setIdSong(Track.id), setHere(here => here + 1) }} key={Track.id}>
            <View className='flex flex-row items-center gap-5 m-2'>
            <Image className='max-h-16 rounded-xl max-w-16' source={Track.img}/>
            <View className='flex flex-col'>
                <Text className='font-medium text-xl'>{Track.name}</Text>
                <Text className='text-lg font-normal opacity-40'>{Track.artist}</Text>
            </View>
            </View>
            </TouchableOpacity>))
            }
            <Float here={here} id={Song.id} name={Song.name} artist={Song.artist} img={Song.img} mp3={Song.mp3}></Float>
            </View>
    )
}