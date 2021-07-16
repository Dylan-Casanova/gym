import React from 'react';
import Home from './components/HomeScreen';
import History from './components/History';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './components/Signup';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#164eb6' } }}>
        <Stack.Screen name="Home" component={Home} options={{ title: '', }}/>
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Signup" component={SignUp} options={{headerTintColor:"white"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

