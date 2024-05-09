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
        <Text style={styles.titulomed}>Atendimento Médico</Text>
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
    fontSize: 22,
    marginLeft: 4,
    color: "#034677",
    fontWeight: '600',
    letterSpacing: 1.1,
    width: '100%',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListarMedicos;