import "react-native-gesture-handler"
import { StyleSheet, Text, View } from 'react-native';

import{NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from './screens/Home';
import IssLocation from './screens/IssLocation';
import Meteor from './screens/Meteor';

const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
  <Stack.Screen name="HomeScreen" component={Home}/>
  <Stack.Screen name="IssLocationScreen" component={IssLocation}/>
  <Stack.Screen name="MeteorScreen" component={Meteor}/>
</Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
