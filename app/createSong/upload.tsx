import { Text, View, TouchableOpacity } from 'react-native';
import Float from "../Float"
export default function Upload() {
	return (
		<>
		<View className='flex flex-1 flex-col justify-center items-center'>
		<TouchableOpacity className='bg-black w-64 rounded-full items-center justify-center h-24'>
            <Text className='text-white text-2xl font-extrabold'>Upload mp3</Text>
        </TouchableOpacity>     
		</View>
		</>
		)
}