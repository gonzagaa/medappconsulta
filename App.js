import { StatusBar } from 'expo-status-bar';
import  React, { Component, useState } from 'react';
import { Text, View, ScrollView, Image, Button, ImageBackground, StyleSheet, wordWrap, TouchableOpacity, Modal,TouchableHighlight, TextInput, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Componentes/Details';
import { firebase } from './Componentes/Config';
import Principal from './Componentes/Principal';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListarMedicos from './Componentes/Listadoc';
import { AntDesign } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const bgimage = require('./Image/IMG.png');
  const logoimage = require('./Image/logo.png');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalzinVisible, setModalzinVisible] = useState(false);
  const lgimage = require('./Image/lgimage.png');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  loginUser = async (email,password) =>{
    try {
      await firebase.auth().signInWithEmailAndPassword(email,password);setModalzinVisible(false)
      navigation.navigate('Principal');

    } catch (error){
      alert(error.message)
    }

  }
  
  const openModal = () => {
    console.log("Abrindo modal");
    setModalVisible(true);
  };

  const closeModalAndNavigate = () => {
    console.log("Fechando modal e navegando");
    setModalVisible(false); setModalzinVisible(false)
    navigation.navigate('Details');
  };

  const Modalzin = () => {
    console.log("Abrindo modal");
    setModalzinVisible(true);
  };

  return (


    <ImageBackground source={bgimage} style={styles.bgimage} resizeMode='cover'>

        <SafeAreaView style={styles.paizao}>

             <View style={styles.imageContainer}>
              <Image source={logoimage} style={styles.logoimage} resizeMode='contain'></Image>
              </View>

              <View style={styles.vazia}></View>
              
              <View style={styles.conteudopg}>
                <Text style={styles.textbody}>Transformando {"\n"}saúde em {"\n"}conexão</Text>
              
                 <View>
                        <TouchableOpacity style={styles.botao} onPress={openModal}>
                        <Text style={styles.textbotao}>CRIAR CONTA</Text>
                        </TouchableOpacity>
                 </View>

                  <View style={styles.viewbotao}>
                             <TouchableOpacity onPress={Modalzin}>
                             <Text style={styles.linha}>Entrar na minha conta</Text>
                            </TouchableOpacity>
                            
                             <TouchableOpacity>
                             <Text style={styles.linha}>Esqueci a senha</Text>
                             </TouchableOpacity>
                  </View>

              </View>
                      
                      <Modal 
                        style={styles.pop}
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          console.log("Pedido para fechar modal");
                          setModalVisible(false);
                        }}
                        >
 
                    <TouchableOpacity style={styles.centureview} onPress={()=> setModalVisible (false)}>

                            <View style={styles.modalview} >
                                  
                                    <View style={styles.viewimage}>
                                        <Image source={lgimage} style={styles.imagemmodal} resizeMode='contain'></Image>
                                    </View>

                                    <View style={styles.viewbemvindo}>
                                        <Text style={styles.textomodal}>Boas vindas ao Medconsulta!</Text>
                                        <Text style={styles.textfrase}>Para criar sua conta vamos precisar de algumas informações tudo bem?</Text>
                                    </View>
  
                                    <View style={styles.boxtopicos}>
                                        <Text style={styles.topicos}>• Número de CPF</Text>
                                        <Text style={styles.topicos}>• Nome completo</Text>
                                        <Text style={styles.topicos}>• Telefone e e-mail</Text>
                                   </View>   


                                   <View>
                                        <TouchableOpacity style={styles.botaomodal} onPress={closeModalAndNavigate}>
                                        <Text style={styles.textobotaomodal}>OK, ENTENDI</Text>
                                        </TouchableOpacity>  
                                  </View>
        
                            
                            </View>
        
        
                    </TouchableOpacity >
    
                      </Modal>

                      <Modal 
                              style={styles.pop}
                              animationType="slide"
                              transparent={true}
                              visible={modalzinVisible}
                              onRequestClose={() => {
                                console.log("Pedido para fechar modal");
                                setModalzinVisible(false);
                              }}>

                      
                      <TouchableOpacity style={styles.centureview} onPress={()=> setModalzinVisible (false)}>

                        <View style={styles.modalview} >
                                                          
                                                            <View style={styles.viewimage}>
                                                                <Image source={lgimage} style={styles.imagemmodal} resizeMode='contain'></Image>
                                                            </View>

                                                            <View style={styles.viewbemvindo}>
                                                                <Text style={styles.textomodal}>Bom te ver novamente!</Text>
                                                                <Text style={styles.textfrase}>Digite seu Email para entrar na sua conta</Text>
                                                            </View>

                                                            <View style={styles.imputcontainer}>
                                                            <Text style={styles.miniplace}>CPF</Text>
                                                                <TextInput
                                                                    style={styles.input}
                                                                    onChangeText={(email)=> setEmail(email)}
                                                                    autoCapitalize='none'
                                                                    autoCorrect={false}
                                                                    placeholder="Digite aqui seu e-mail"
                                                                    keyboardType="email-address"
                                                                  />
                                                          </View>   
                                                          
                                                          <View style={styles.imputcontainer}>
                                                            <Text style={styles.miniplace}>Digite sua senha</Text>
                                                              <TextInput
                                                              style={styles.input}
                                                              onChangeText={(password)=> setPassword(password)}
                                                              autoCorrect={false}
                                                              secureTextEntry={true}
                                                              placeholder="Digite sua senha"
                                                              />
                                                          </View>

                                                          <View>
                                                                <TouchableOpacity style={styles.botaomodal} onPress={()=> loginUser(email,  password)}>
                                                                <Text style={styles.textobotaomodal}>ENTRAR</Text>
                                                                </TouchableOpacity>  
                                                          </View>
                                
                                                    
                        </View>
                                  
                      </TouchableOpacity>

                      </Modal>

        </SafeAreaView>

    </ImageBackground>
      
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: true}}/>
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: true}}/>
        <Stack.Screen name="ListarMedicos" component={ListarMedicos} options={{ headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  bgimage: {
      width:'100%',
      height: '100%',
      resizeMode: 'cover',
    },

    textbody:{
      color: 'white',
      fontSize: 40,
      fontFamily: 'Montserrat',
      fontWeight: '700',
      lineHeight: 32,
    
      paddingTop:10
  },
 
  imageContainer:{
   position: 'absolute',
   top: -195,
   right: '75%',
   paddingTop: 10,
   flex: .2,
},

  logoimage:{
      width:70,
  },

  botao:{
      backgroundColor: 'white',
      padding: 12,
      marginTop: 16,
      borderRadius: 50,

  },
  viewbotao:{
      marginTop: 16,

  },

  
  textbotao:{
      textAlign: "center",
      fontSize: 18,
      color: '#4B92E5',
      fontFamily: 'Montserrat', 
      fontWeight: '700',

  },

  linha:{
      fontFamily: 'Montserrat',
      fontWeight: '300',
      textAlign: "center",
      fontSize: 16,
      color: 'white',
      padding: 9,
  },

  centureview:{
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.3)",

  },

  pop:{
      alignItems: "center",
  },

  modalview:{
      width:"100%", 
      backgroundColor: "white",
      padding: 20,
      borderRadius: 40,
      flex: .46,
      paddingBottom: Platform.OS === 'ios' ? 40 : 0,     

      
    },

  viewimage:{
      position: 'absolute',
      top: -80,
      left: "50%",
      transform:[{translateX: -50}],
      backgroundColor: "white",
      borderWidth: 4,
      borderRadius: 900, 
      borderColor: "#4B92E5",
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,

    },

    textomodal:{
      fontSize: 30,
      color: "#034677",
      textAlign: "left",
      fontFamily: "Monteserrat",
      fontWeight: '700',
      paddingTop: 50,
      lineHeight: 26,
    },

    viewbemvindo:{
      paddingLeft: 30,
      paddingRight: 30,

    },


    imagemmodal:{
      width:80,
      height: 80,

    },

    textfrase:{
      color: "#034677",
      fontFamily: "Monteserrat",
      textAlign: "left",
      fontSize: 16,
      width: "75%",
      marginTop: 5,
      fontWeight: '300',

    },

    boxtopicos:{
      marginTop: 24,
      paddingLeft: 30,
      paddingRight: 30,



    },

    topicos:{
      marginTop: 5,
      color: "#034677",
      fontFamily: "Monteserrat",
      fontSize: 16,
      fontWeight: '600',



    },

    botaomodal:{
      backgroundColor: "#4B92E5",
      padding: 10,
      marginTop: 25,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 50,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,


    },


    textobotaomodal:{
      textAlign: "center",
      fontSize: 18,
      color: "white",
      fontFamily: 'Montserrat', 
      fontWeight: '700',


    },

    inputContainer: {
      marginBottom: 20,
      
      position: "relative",
    },

    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      borderColor: "#034677",
      marginTop: 4,
      marginBottom: 7,
      marginLeft: 30,
      marginRight: 30,
    },
    miniplace:{
      color: "#034677",
      fontFamily: "Monteserrat",
      fontSize: 12,
      fontWeight: '600',
      backgroundColor: 'white',
      alignSelf: "flex-start",
      position: "relative",
      zIndex: 3,
      marginLeft: 45,
      bottom: -14,
      padding: 4,
  },

  vazia:{
    flex:.7,

  },

conteudopg:{
  flex: .3,
  paddingHorizontal: 30,
},

paizao:{
   flex: 1,
   paddingVertical: Platform.OS === 'ios' ? 40 : 0,
},


});




export default App; 