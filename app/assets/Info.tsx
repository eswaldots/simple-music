import { View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg"
// Informacion de la cancion actual
export default function Info({title = "High and Dry", artist='Radiohead', img}) {
    return  (
        <View className='flex flex-col flex-1 items-center gap-8 justify-around'>
        <View style={{
    shadow: {  
        shadowOffset: { width: 10, height: 10 },  
        shadowColor: 'black',  
        shadowOpacity: 1,  
        elevation: 3,  
        zIndex:999,  
      }  
  }} className='container shadow- shadow-gray-400 bg-gray-300 flex-1 max-h-full max-w-full rounded-xl'>
            <Image source={img} className='flex container flex-1 w-full h-full rounded-xl' resizeMode="cover"/>
        </View>
        <View className='text-center flex-col items-center'>
        <Text className='text-3xl font-bold flex-5'>{title}</Text>
        <Text className='text-2xl opacity-40'>{artist}</Text>
        </View>
        </View>
    )
}