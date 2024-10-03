import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps {
  title: String,
  handlePress: Function,
  containerStyles: String
  textStyles: String,
  isLoading: Boolean,
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handlePress, containerStyles, textStyles, isLoading  }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''} `}>
      <Text className='text-primary text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})