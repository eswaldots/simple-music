import { View, Text, Pressable } from 'react-native'
import MenuIcon from "./assets/Icons";
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
// Header de el reproductor
export default function Menu() {
    const router = useRouter()
    return (
        <View className='flex flex-row flex-1 items-center max-h-10 justify-between'>
            <TouchableOpacity onPress={() => router.push('../index')}>
            <MenuIcon width='32px' height='32px'/>
            </TouchableOpacity>
            <Text className='tracking-widest text-lg font-bold'>EZWAL</Text>
        </View>
    )
}