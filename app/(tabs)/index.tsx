
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function App() {

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl'>Aora! - By KVK</Text>
      <Link href='/profile' style={{ color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}
  