import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Src/Screen/HomeScreen';
import ListingItems from './Src/Screen/ListingItems';
import DotoScreen from './Src/Screen/DotoScreen';



const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Doto">
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="List" component={ListingItems}/>
        <Stack.Screen options={{headerShown:false}} name="Doto" component={DotoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;