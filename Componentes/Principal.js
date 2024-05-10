import  React, { Component, useState } from 'react';
import { Text, View, ScrollView, Image, Button, ImageBackground, StyleSheet, wordWrap, TouchableOpacity, Platform ,Modal,TouchableHighlight,TextInput, CheckBox ,handleSubmit, Alert, ViewBase} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './Config';
import { updateCurrentUser } from 'firebase/auth';
import ListarMedicos from './Listadoc';
import HomeScreen from '../Pages/Home';
import Details from './Details';



const Principal = ({navigation}) => {
    const emergencia = require('../Image/emergencia.png');
    const psiquiatra = require('../Image/celular.png');
    const psicologo = require('../Image/cerebro.png');
    const [modalVisible, setModalVisible] = useState(false);
    const lgimage = require('../Image/lgimage.png');
    const [elementVisible, setElementVisible] = useState(false);
    const [modalzinVisible, setModalzinVisible] = useState(false);


    const closeModalzinAndNavigate = () => {
        console.log("Fechando modal e navegando");
        setModalVisible(false); setModalzinVisible(false)
        navigation.navigate('ListarMedicos');
    };

    const openModal = () => {
        console.log("Abrindo modal");
        setModalVisible(true);
      };

      const Modalzin = () => {
        console.log("Abrindo modal");
        setModalzinVisible(true); setModalVisible (false)
      };
      
      

    return (   
      
    
                    
       
        <View>
         

                <View style={styles.container}>
                        <Text style={styles.label}>Com o que podemos te ajudar?</Text>
                        <Text style={styles.subtexto}>Escolhemos os melhores especialistas e clínicos gerais especialmente para você!</Text>

                        <View style={styles.botoesEspecialidades}>
                          <ImageBackground source={emergencia} style={styles.fotinha} imageStyle={{ borderRadius: 30}}>
                              <TouchableOpacity style={styles.atendimento} onPress={openModal}>
                              <Text style={styles.atendimentotext}>Atendimento Clinico</Text>
                              </TouchableOpacity>
                          </ImageBackground>

                          <View style={styles.netflix}>
                              <ImageBackground source={psicologo} style={styles.fotinhapequena} imageStyle={{ borderRadius: 25}}>
                                  <TouchableOpacity style={styles.atendimentopsicologo}>
                                      <Text style={styles.textopequeno}>Psicologo</Text>
                                  </TouchableOpacity>
                              </ImageBackground>

                              <ImageBackground source={psiquiatra} style={styles.fotinhapequena} imageStyle={{ borderRadius: 25}}>
                                  <TouchableOpacity style={styles.atendimentopsi}>
                                      <Text style={styles.textopequeno}>Psiquiatra</Text>
                                  </TouchableOpacity>
                              </ImageBackground>
                          </View>
                        </View>
                        

                        <Text style={styles.textinho}>• Em casa de dúvidas sobre consultas e agendamentos entre em contato com nosso suporte 24h</Text>

                        
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
                                            <Text style={styles.textomodal}>O que você deseja?</Text>
                                        </View>

                                      <View>
                                            <TouchableOpacity style={styles.botaomodal}>
                                            <Text style={styles.textobotaomodal} onPress={Modalzin}>CONSULTAR AGORA</Text>
                                            </TouchableOpacity>  
                                            <TouchableOpacity style={styles.botaomodal} onPress={closeModalzinAndNavigate}>
                                            <Text style={styles.textobotaomodal}>AGENDAR CONSULTA</Text>
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
                                                <Text style={styles.textomodal1}>Você irá realizar sua consulta agora!</Text>
                                                  <Text style={styles.testochamada}>Antes precisamos fazer um teste de chamada e verificar sua conexão, tudo bem?</Text>
                                          </View>
                                        
                                           <View>
                                           <TouchableOpacity style={styles.botaomodal} >
                                              <Text style={styles.textobotaomodal}>TESTAR CHAMADA</Text>
                                            </TouchableOpacity>  
                                          </View>
                                        
                                        
                             </View>

                             </TouchableOpacity>

                         </Modal>

        </View>


    );
}

export default Principal;

const styles = StyleSheet.create({

container:{
    padding: 10,
    marginTop: 25,
    paddingHorizontal: 30,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    height: "100%",
  },

  label: {
      
    fontFamily: "Monteserrat",
    fontSize: 22,
    marginLeft: 4,
    color: "#034677",
    fontWeight: '600',
    letterSpacing: 1.1,
    width: '100%',
    marginBottom: 12,
  },


  subtexto: {
    marginBottom: -2,
    fontFamily: "Monteserrat",
    marginLeft: 4,
    fontWeight: '200',
    color: "#034677",
    fontSize: 18,
    
},

botoesEspecialidades: {
  flexDirection: "colum",
},

atendimento:{
      padding: 16,    
      paddingBottom: 125,
      borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.07)'

    
},
atendimentotext:{
    fontSize: 35,
    color: 'white',
    textAlign: 'left',
    fontWeight: '700',
    lineHeight: 32,
    paddingTop: 10,
},

fotinha:{
    marginTop: 30,
},

netflix:{
    gap: 16,
    flexDirection: "row",
    marginTop: 16,

},

pop:{
    position:"absolute",
    bottom: 0,
    alignItems: "center",
    

},

fotinhapequena:{
  flex: .5,
},


atendimentopsi:{
    padding: 16,    
    paddingBottom: 130,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.07)'
},

atendimentopsicologo:{
    padding: 16,    
    paddingBottom: 125,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.07)'
    
},

textopequeno:{
    fontSize: 24,
    color: 'white',
    textAlign: 'left',
    fontWeight: '700',
    lineHeight: 32,
},

textinho:{
    fontFamily: "Monteserrat",
    fontWeight: '200',
    color: "#034677",
    fontSize: 11,
    marginTop: 30,
    textAlign: "center",
},


centureview:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
},

 modalview:{
      width:"100%", 
      backgroundColor: "#4B92E5",
      padding: 20,
      borderRadius: 40,
      flex: .46,
      paddingBottom: Platform.OS === 'ios' ? 40 : 0,     
      
    },

  viewimage:{
    position: 'absolute',
    top: -75,
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

    imagemmodal:{
    width:80,
    height: 80,
  },


    textomodal:{
    fontSize: 30,
    color: "white",
    textAlign: "left",
    fontFamily: "Monteserrat",
    fontWeight: '700',
    paddingTop: 90,
    lineHeight: 26,
    marginBottom: 30,
  },

    viewbemvindo:{
    paddingLeft: 30,
    paddingRight: 30,
  },

  botaomodal:{
    backgroundColor: "white",
    padding: 10,
    marginTop: 16,
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
    color: "#4B92E5",
    fontFamily: 'Montserrat', 
    fontWeight: '700',

  },

testochamada:{
    fontFamily: "Monteserrat",
    marginLeft: 4,
    fontWeight: '300',
    color: "white",
    fontSize: 18,
    marginBottom: 26,
},

textomodal1:{
    fontSize: 30,
    color: "white",
    textAlign: "left",
    fontFamily: "Monteserrat",
    fontWeight: '700',
    paddingTop: 90,
    lineHeight: 26,
    marginBottom: 4,
  },

});
  