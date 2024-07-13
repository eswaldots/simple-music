import { View, Text, TextInput, Image, Dimensions, TouchableOpacity, ScrollView, SafeAreaView,FlatList   } from "react-native";
import * as imagePicker from 'expo-image-picker';
import * as DocumentPicker from "expo-document-picker";
import {useState} from 'react';
import Svg, { Path } from "react-native-svg"
import { Alert } from "react-native";
import { Tracks } from '../assets/Tracks';
import {useContext} from 'react';
export default function createSong() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const [image, setImage] = useState(null);
    const [mp3, setMp3] = useState(null);
    const pickFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        if (!result.canceled) {
            setMp3(JSON.stringify(result.assets[0].uri));
        }
        else if (!result.success){
            Alert('No file selected', "No file selected");
        }
    }
    if (mp3) {
        console.log('saving')
    Tracks.push({
    id: 3,
    name: 'Melee main theme',
    artist: 'The counsouls',
    img: image,
    mp3: mp3
})}
    const setTracks = useContext(Tracks);
    const pickImage = async () => {
    let result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
        if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    }
    function Camera(props) {
        return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#FFF"
    strokeWidth={1.5}
    className="size-6"
    viewBox="0 0 24 24"
    width={32}
    height={32}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm2.25-2.25h.008v.008h-.008V10.5Z"
    />
  </Svg>
);    }
    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={{
            flexGrow: 1,
            gap: 40,
            alignItems: 'center',    
        }} className='p-5 py-10 flex-1 flex flex-col max-w-screen max-h-screen bg-white gap-10'>
        <Text className='font-bold text-3xl'>Add a new song</Text>
        <View  className='container bg-gray-200 flex-1 max-h-96 items-center justify-center max-w-80 rounded-xl'>
           {image && <Image source={{uri: image}} className='flex container flex-1 w-full h-full rounded-xl' resizeMode="cover"/>}
           <TouchableOpacity onPress={pickImage} className='absolute rounded-full h-20 w-20 bg-black opacity-70 items-center justify-center'><Camera/></TouchableOpacity
           >
        </View>
            <View className='gap-5'>
            <TextInput style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'lightgray',
                borderRadius: 10,
                padding: 12,
                width: width * 0.75,
            }} placeholder='Enter a title'></TextInput>
            <TextInput style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'lightgray',
                borderRadius: 10,
                padding: 12,
                width: width * 0.75,
            }} placeholder='Enter an artist' ></TextInput>
            </View>
            <TouchableOpacity onPress={pickFile} className='bg-black w-40 rounded-full items-center justify-center h-12'>
            <Text className='text-white font-bold'>Add</Text>
            </TouchableOpacity>     
            </ScrollView>
    )
}