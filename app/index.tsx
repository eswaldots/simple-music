import { useRouter } from "expo-router";
import { Tracks } from "./assets/Tracks"
import {Image, View, Text, TouchableOpacity, ScrollView} from "react-native"
import {useContext, useEffect, useState} from "react";
import "./global.css"
import Float from "./Float";
import { GlobalSong } from "./Hooks/actualSong";
// Primera instancia del enrutador
export default function Index() {
    const {idSong, setIdSong} = useContext(GlobalSong);
    const router = useRouter()
    // Redirigiendo a los usuarios al reproductor ([id])
    // Inicializando la importación
    const [Songs, setSongs] = useState(Tracks)
    useEffect(() => {
        setSongs(Tracks)
    }, [idSong]);
    console.log(Tracks.length);
    const [here, setHere] = useState(0);
    // Mappeandola
    /*const [Song, setSong] = useState({        id: 0,
        name: String,
        artist: String,
        img: String,
        mp3: './melee.mp3'})*/
     const Song = Tracks.find(Track => Track.id === idSong)
    return (
        <>
        <ScrollView className='p-5 py-10 flex-1 flex flex-col max-w-screen max-h-svh bg-white'>
            <Text className='font-bold text-3xl mb-5'>Featured Songs</Text>
            <TouchableOpacity onPress={() => router.push('createSong/createSong')} className='mb-5'>
            <View className='flex flex-row items-center gap-5 m-2'>
                <Image source={require("./assets/add.jpg")} className='flex container flex-1 max-w-20 max-h-20 rounded-full' resizeMethod={'resize'}/>
            <View className='flex flex-col'>
                <Text className='font-bold text-2xl'>Your song</Text>
                <Text className='text-xl font-medium opacity-40'>Add a new song</Text>
            </View>
            </View>
            </TouchableOpacity>
    {Tracks && Songs.map(Track => ( Track.id >= 1 ?
            <TouchableOpacity onPress={() => {setIdSong(Track.id), setHere(here => here + 1)}} key={Track.id}>
            <View className='flex flex-row items-center gap-5 m-2'>
            <Image source={{uri: Track.img}} className='w-20 h-20 rounded-xl'/>
            <View className='flex flex-col'>
                <Text className='font-medium text-2xl'>{Track.name}</Text>
                <Text className='text-xl font-light opacity-40'>{Track.artist}</Text>
            </View>
            </View>
            </TouchableOpacity>
        :
            <View></View>
    ))
            }
            </ScrollView>
            <Float here={here} id={Song.id} name={Song.name} artist={Song.artist} img={Song.img} mp3={Song.mp3}></Float>
            </>
    )
}