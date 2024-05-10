import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Button, ImageBackground, FlatList, StyleSheet, wordWrap, TouchableOpacity, Modal,TouchableHighlight,TextInput, CheckBox ,handleSubmit, Alert, ViewBase} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './Config';
import { updateCurrentUser } from 'firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons'



const ListarMedicos = ({ navigation }) => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('medicos')
      .where('disponivel', '==', true)
      .onSnapshot(querySnapshot => {
        const medicos = [];

        querySnapshot.forEach(documentSnapshot => {
          medicos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setMedicos(medicos);
      });

    // Limpar subscription ao desmontar
    return () => subscriber();
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Escolha o médico que irá realizar o seu atendimento</Text>
      <FlatList
        data={medicos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Agendamentos', { medicoId: item.key, nome: item.nome, crm: item.crm })}>
            <View style={styles.iconeMedico}>
              <Ionicons name='person-outline' size={30} color={"white"}/>
            </View>
            <View>
              <Text style={styles.nomeMedico}>{item.nome}</Text>
              <Text style={styles.crmMedico}>CRM: {item.crm}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontFamily: "Monteserrat",
    fontSize: 19,
    marginLeft: 4,
    color: "#034677",
    fontWeight: '400',
    letterSpacing: 1.1,
    width: '100%',
    marginBottom: 40,
    textAlign: 'center',
  },

  card: {
    paddingVertical: 15,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#034677",
    
    marginBottom: 20,
    
    flexDirection: "row",
    alignItems: "center"
  },
  
  nomeMedico: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#034677",
    marginBottom: 6,
  },

  crmMedico: {
    fontSize: 14,
    fontWeight: '300',
    color: "#034677",
    marginBottom: 6,
    shadowOpacity: 0,
  },

  iconeMedico: {
    backgroundColor: "#4B92E5",
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  }
});

export default ListarMedicos;