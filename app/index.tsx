
import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import {images} from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';

export default function App() {

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full items-center min-h-[85vh] px-4'>
          <Image
            className='w-[130px] h-[84px]'
            source={images.logo}
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilites with {' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='mt-7 text-sm font-pregular text-gray-100 text-center'>
              Where creativity meets innovation: embark on a journey of limitless explortion with Aora
          </Text>
          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push('/SignIn')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
  