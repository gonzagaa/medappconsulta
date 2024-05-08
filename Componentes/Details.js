import  React, { Component, useState } from 'react';
import { Text, View, ScrollView, Image, Button, ImageBackground, StyleSheet, wordWrap, TouchableOpacity, Modal,TouchableHighlight,TextInput, CheckBox ,handleSubmit, Alert, KeyboardAvoidingView, SafeAreaView, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from './Config';
import { updateCurrentUser } from 'firebase/auth';
import ListarMedicos from './Listadoc';
import { AntDesign } from '@expo/vector-icons';


const Details = ({navigation}) => {
   
    const [cpf, setCpf] = useState('');
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    
    const [elementVisible, setElementVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const validatePassword = () => {
      if (password !== confirmPassword) {
        Alert.alert("Erro", "As senhas não coincidem");
        return false;
      }
      if (password.length < 8 || !/\d/.test(password) || !/[A-Za-z]/.test(password)) {
        Alert.alert("Erro", "A senha não atende aos requisitos mínimos");
        return false;
      }
      return true;
    };
 
  
  

  const checkPasswordStrength = (password) => {
    const length = password.length;
    const hasNumbers = /\d/.test(password);
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);


    if (length >= 8 && hasNumbers && hasLetters && hasSpecialChars && hasMixedCase) {
      return 'strong';
    } else if (length >= 6 && hasNumbers && hasLetters) {
      return 'medium';
    } else if (length > 0) {
      return 'weak';
    }
    return null;
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    setPasswordStrength(checkPasswordStrength(password));
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 'strong') {
      return 'green';
    } else if (passwordStrength === 'medium') {
      return 'yellow';
    } else if (passwordStrength === 'weak') {
      return 'red';
    } else {
      return 'transparent';
    }
  };
 

      registerUser = async (cpf,fullName,birthDate,email,mobile, password) => { 
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth() .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url:'https://medconsulta-a7c63.firebaseapp.com',
        })
        .then(() => {
          alert('Verification email sent')
        }).catch((error) => {
          alert(error.message)
        })
        .then(() => {
          firebase.firestore().collection('cadastro')
          .doc(firebase.auth().currentUser.uid)
          .set ({cpf, fullName, birthDate, email, mobile, password})
      })
    
      .catch((error) => {alert(error.mensage)})
    
    })
    .catch((error => {alert(error.mensage)}))
    }
    

    return (
<KeyboardAvoidingView
      style={styles.containerKeyBoard}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <ScrollView style={styles.container}>

{elementVisible ? (
<View style={styles.containersenha}>

        <Text style={styles.labelsenha}>Vamos criar uma senha</Text>
        <Text style={styles.subtexto}>
          Crie uma senha segura para sua conta
        </Text>
        <Text style={styles.topicossenha}>• Mínimo de 8 caracteres;</Text>
        <Text style={styles.topicossenha}>• Uso de, no mínimo, uma letra;</Text>
        <Text style={styles.topicossenha}>• Uso de, no mínimo, um número;</Text>
        <Text style={styles.topicossenha}>• Para te deixar mais segure uilize um caractere especial (#?!@)</Text>
        
        <View>
        <View>
            <Text style={styles.miniplacesenha}>Digite sua senha</Text>
            <View style={[styles.passwordStrengthIndicator, { backgroundColor: getPasswordStrengthColor() }]} />
            <Text style={styles.senha}>Nivel da senha</Text>
        <TextInput
          style={styles.inputsenha}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={!passwordVisible}
          placeholder="Digite sua senha"
        />
        </View>
         <TouchableOpacity
          style={styles.eyeButtonsenha}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Text style={styles.eyeTextsenha}>{passwordVisible ? '👁️' : '👁️'}</Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.miniplacesenha}>Confirmar senha</Text>
         <TextInput
        style={styles.inputsenha}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={!confirmPasswordVisible}
        placeholder="Confirmar senha"
      />
      </View>
        <TouchableOpacity
          style={styles.eyeButtonsenha}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <Text style={styles.eyeTextsenha}>{passwordVisible ? '👁️' : '👁️'}</Text>
        </TouchableOpacity>
        </View>
        
        
        <TouchableOpacity onPress={()=> registerUser (cpf,fullName,birthDate,email,mobile, password)}style={styles.botaosenha}>
            <Text style={styles.buttonTextsenha}>CONTINUAR</Text></TouchableOpacity> 
          
      </View>
) : null}


        <View style={styles.principalForm}>

        <View style={styles.inputContainer}>
          
          <Text style={styles.label}>Digite o número do seu CPF</Text>
          <Text style={styles.subtexto}>Com ele podemos criar o seu cadastro</Text>
          <Text style={styles.miniplace}>CPF</Text>
          <Text style={styles.miniplaceend}>*</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCpf}
            value={cpf}
            placeholder="000.000.000-00"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Qual seu nome completo?</Text>
          <Text style={styles.miniplace}>Nome completo</Text>
          <Text style={styles.miniplaceend}>*</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFullName}
            value={fullName}
            placeholder="Digite seu nome completo"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Qual sua data de nascimento?</Text>
          <Text style={styles.miniplace}>Data de nascimento</Text>
          <Text style={styles.miniplaceend}>*</Text>
          <TextInput
            style={styles.input}
            onChangeText={setBirthDate}
            value={birthDate}
            placeholder="dd/mm/aaaa"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Informações para contato</Text>
            <Text style={styles.subtexto}>Elas serão usadas para enviar informações sobre suas consultas</Text>
          <Text style={styles.miniplace}>Email</Text>
          <Text style={styles.miniplacemail}>*</Text>
          <TextInput
            style={styles.inputmail}
            onChangeText={setEmail}
            value={email}
            placeholder="Digite aqui seu e-mail"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.miniplace}>Celular</Text>
          <Text style={styles.miniplaceend}>*</Text>
          <TextInput
            style={styles.input}
            onChangeText={setMobile}
            value={mobile}
            placeholder="(00) 00000-0000"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.checkboxContainer}>
        
          <Text style={styles.labelbox}>Li e aceito as políticas de privacidade</Text>
        </View>
        <TouchableOpacity onPress={() => setElementVisible(!elementVisible)} style={styles.button}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableOpacity>
        </View>

    
      </ScrollView>

</KeyboardAvoidingView>
    );
  }
  
  export default Details;



  const styles = StyleSheet.create({
  
    principalForm:{
      paddingBottom: 100,
    },
    container:{
        paddingVertical: 30,
        padding: 30,
        backgroundColor: 'white',
        height: "100%",
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
      marginBottom: 7
    },
    inputmail: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#034677",
        marginTop: 4,
        marginBottom: -15,
        position: 'relative',
      },

    label: {
      
      fontFamily: "Monteserrat",
      fontSize: 22,
      marginLeft: 4,
      color: "#034677",
      fontWeight: '600',
      letterSpacing: 1.1,
      width: '100%',
    },

    subtexto: {
        marginBottom: -2,
        fontFamily: "Monteserrat",
        marginLeft: 4,
        fontWeight: '200',
        color: "#034677",
        fontSize: 18,
        
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
        marginLeft: 6,
        bottom: -14,
        padding: 4,
    },

    miniplaceend:{
        color: "#034677",
        fontFamily: "Monteserrat",
        fontSize: 12,
        fontWeight: '600',
        backgroundColor: 'white',
        alignSelf: "flex-end",
        position: 'absolute',
        zIndex: 3,
        right:12,
        bottom: 35,
        padding: 4,
    },
    miniplacemail:{
        color: "#034677",
        fontFamily: "Monteserrat",
        fontSize: 12,
        fontWeight: '600',
        backgroundColor: 'white',
        alignSelf: "flex-end",
        position: 'absolute',
        zIndex: 3,
        right:12,
        bottom: 13,
        padding: 4,
    },

    labelbox:{
        fontFamily: "Monteserrat",
        fontSize: 14,
        marginLeft: 4,
        color: "#034677",
        fontWeight: '300',
        letterSpacing: 1.1,
        width: '100%',
        marginTop: 25,


    },

    button: {
        backgroundColor: "#4B92E5",
        padding: 10,
        marginTop: 15,
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
    buttonText: {
        textAlign: "center",
        fontSize: 18,
        color: "white",
        fontFamily: 'Montserrat', 
        fontWeight: '700',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      marginRight: 8,
    },

    containersenha:{
      
      backgroundColor: 'white',
      height: '100%',

  },
  inputsenha: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      borderColor: "#034677",
      marginTop: 4,
      marginBottom: 36
    },


  eyeButtonsenha: {
    marginLeft: 10,
  },
  eyeTextsenha: {
    fontSize: 15,
    position: 'absolute',
    top: -67,
    right: 10
  },
  labelsenha: {
    
   fontFamily: "Monteserrat",
   fontSize: 22, 
   marginLeft: 4, 
   color: "#034677",
   fontWeight: '600',
   letterSpacing: 1.1,
   width: '100%',
   marginBottom: 6,


    },
    
   subtextosenha: {
      marginBottom: 20,
      fontFamily: "Monteserrat",
      marginLeft: 4,
      fontWeight: '200',
      color: "#034677",
      fontSize: 18,
      
  },

  topicossenha:{
      marginTop: 5,
      color: "#034677",
      fontFamily: "Monteserrat",
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 5,
    },

    miniplacesenha:{
      color: "#034677",
      fontFamily: "Monteserrat",
      fontSize: 12,
      fontWeight: '600',
      backgroundColor: 'white',
      alignSelf: "flex-start",
      position: "relative",
      zIndex: 3,
      marginLeft: 6,
      bottom: -14,
      padding: 4,
  },


  passwordStrengthIndicator: {
    height: 3,
    width: '95%',
    borderRadius: 20,
    marginBottom: 20,
    position:'absolute',
    bottom: -10,
    left: '2%',

  },

  botaosenha: {
      backgroundColor: "#4B92E5",
      padding: 10,
      marginTop: 15,
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

  buttonTextsenha: {
      textAlign: "center",
      fontSize: 18,
      color: "white",
      fontFamily: 'Montserrat', 
      fontWeight: '700',
  },

  senha:{

      position:'absolute',
      bottom: 16,
      left: '2%',
      color: "#034677",
      fontFamily: "Monteserrat",
      fontSize: 12,
      fontWeight: '300',
  },

  setinha:{
   paddingVertical:10,
   
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "#034677",
    marginBottom: 40,
    marginTop: 20,
  },

  back:{
    color: "#034677",
    fontFamily: "Monteserrat",
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 22,
},

botaoVoltar: {
  flexDirection:"row",
  alignItems: "end",
  justifyContent: "start",
  gap: 8,
  marginLeft: -20,

}

  });