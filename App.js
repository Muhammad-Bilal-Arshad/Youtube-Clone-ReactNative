import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
const stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />

      </stack.Navigator>
    </NavigationContainer>
  );
}


