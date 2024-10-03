import React from 'react';
import { Image, View, Text, ImageSourcePropType } from 'react-native';

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={`w-6 h-6 ${focused ? 'opacity-100' : 'opacity-50'}`}
      />
      <Text className={`text-xs ${focused ? 'color' : 'text-gray-500'}`}  style={{ color: color}}>
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
