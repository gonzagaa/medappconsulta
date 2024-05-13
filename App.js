
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Componentes/Details';
import Principal from './Componentes/Principal';
import ListarMedicos from './Componentes/Listadoc';
import Testcam from './Componentes/Testecam';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import lgimage from '././Image/lgimage.png';

import { View, screenOptions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Agendamentos from './Componentes/Agendamentos';
import ContaCriada from './Componentes/Contacriada';



const Tab = createBottomTabNavigator(); 


function MenuTab (){
    return(
      <Tab.Navigator 
          initialRouteName="Feed"
          screenOptions={{

            tabBarInactiveTintColor: '#034677',
            tabBarActiveTintColor: "#4b92e5",
            tabBarStyle: {
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              elevation: 0,
              height: 90,
              backgroundColor: "#fff",
              borderTopStartRadius: 25,
              borderTopEndRadius: 25,
              borderWidth: 1,
              borderColor: "#4B92E5",
              borderTopWidth: 1,
              borderTopColor: "#4B92E5"
            }
          }}>

        <Tab.Screen 
        name="Details" 
        component={Details} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Ionicons name="calendar-outline" size={size} color={color}/>
          }}/>

        <Tab.Screen 
        name="Feed" 
        component={Principal} 
        options={{ 
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.viewimage}>
                <Image source={lgimage} style={styles.imagemmodal} resizeMode='contain'></Image>
              </View>
            )
          },

          }}/>

        <Tab.Screen 
        name="Listarmedicos" 
        component={ListarMedicos} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Ionicons name="headset-outline" size={size} color={color}/>
          }} />
      </Tab.Navigator>
    );
  }



  const Stack = createStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}} />
          
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
    }} />

                <Stack.Screen name='ContaCriada' component={ContaCriada} options={{
                            headerShown: false,
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
          
          <Stack.Screen name="Principal" component={MenuTab} options={{ headerShown: false}}/>
          
          <Stack.Screen name="ListarMedicos"component={ListarMedicos} options={{ 
          headerShown: true,
          headerTintColor: "#034677",
            headerTitle: 'Atendimento Médico',
            headerTitleVisible: false,
            headerBackTitle: 'Voltar',
           
          headerStyle: {
            backgroundColor: 'white',
            borderBottomWidth: 0.3,  
            borderBottomColor: "#034677",  
          }
          }} />

          <Stack.Screen name="Agendamentos" component={Agendamentos} options={{ headerShown: true,
            headerTintColor: "#034677",
              headerTitle: 'Agendar Consulta',
              headerBackTitle: 'Voltar',}}/>

            <Stack.Screen name="Testcam"component={Testcam} options={{ 
                      headerShown: true,
                      headerTintColor: "#034677",
                        headerTitle: 'Atendimento Médico',
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

  const styles = StyleSheet.create({
  
    viewimage:{
      position: 'absolute',
      top: -35,

      backgroundColor: "white",
      borderWidth: 3,
      borderRadius: 900, 
      borderColor: "#4B92E5",
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,

    },

    imagemmodal:{
      width: 40,
      height: 40,
    },

  })

