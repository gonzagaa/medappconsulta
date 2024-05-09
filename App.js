import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Componentes/Details';
import Principal from './Componentes/Principal';
import ListarMedicos from './Componentes/Listadoc';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { screenOptions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
       
        <Stack.Screen name="Details" component={Details} options={{
          headerShown: true,
          headerTintColor: "#034677",
            headerTitle: '',
            headerTitleVisible: false,
            headerBackTitle: 'Voltar',
            
           
          headerStyle: {
            backgroundColor: 'white',
            borderBottomWidth: 0.3,  
              borderBottomColor: "#034677",  
          }
        }}/>
      
      <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false}}/>

        <Stack.Screen name="ListarMedicos" component={ListarMedicos} options={{ 
          headerShown: true,
          headerTintColor: "#034677",
            headerTitle: '',
            headerTitleVisible: false,
            headerBackTitle: 'Voltar',
           
          headerStyle: {
            backgroundColor: 'white',
            borderBottomWidth: 0.3,  
            borderBottomColor: "#034677",  
          }
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App; 