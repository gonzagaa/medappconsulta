import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Button, ImageBackground, FlatList, StyleSheet, wordWrap, TouchableOpacity, Modal,TouchableHighlight,TextInput, CheckBox ,handleSubmit, Alert, ViewBase} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './Config';
import { updateCurrentUser } from 'firebase/auth';



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
        <Text style={styles.titulomed}>Escolha o médico que irá realizar o seu atendimento</Text>
      <FlatList
        data={medicos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DetalhesMedico')}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text>CRM: {item.crm}</Text>
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

  titulomed: {
    fontFamily: "Monteserrat",
    fontSize: 19,
    marginLeft: 4,
    color: "#034677",
    fontWeight: '200',
    letterSpacing: 1.1,
    width: '100%',
    marginBottom: 12,
    
  },

  card: {
    height: 70,
    borderWidth: 7,
    padding: 10,
    borderRadius: 6,
    borderColor: "#034677",
    marginTop: 30,
    marginBottom: 7
  },
  
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListarMedicos;