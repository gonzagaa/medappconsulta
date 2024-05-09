import { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, Modal,TextInput, SafeAreaView, StatusBar,screenOptions } from 'react-native';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import bgimage from '../../Image/IMG.png';
import logoimage from '../../Image/logo.png';
import lgimage from '../../Image/lgimage.png';
import styles from './styles';





export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalzinVisible, setModalzinVisible] = useState(false);
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
        <StatusBar backgroundColor="red" barStyle="default" />
  
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
                                                            <Text style={styles.miniplace}>E-mail</Text>
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
                                
                                
                        </TouchableOpacity >
  
                        </Modal>
  
          </SafeAreaView>
  
      </ImageBackground>
        
    );
  }