import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { firebase } from './Config';

const Agendamentos = ({ route, navigation }) => {
  const { nome, crm, medicoId } = route.params; // Recebendo os dados do médico selecionado
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  
  console.log("Médico ID: ", medicoId);


  useEffect(() => {
    if (selectedDate && medicoId) {
      console.log("Verificando disponibilidade para:", selectedDate, "e médico ID:", medicoId); // Adicione este log
      const docRef = firebase.firestore()
        .collection('medicos')
        .doc(medicoId)
        .collection('datas')
        .doc(selectedDate);
  
      docRef.get().then(documentSnapshot => {
        console.log("Busca no Firestore retornou:", documentSnapshot.exists); // Veja se o documento existe
        if (documentSnapshot.exists) {
          const horarios = documentSnapshot.data().horarios;
          console.log("Horários disponíveis:", horarios); // Confira os horários carregados
          if (horarios && horarios.length > 0) {
            setAvailableTimes(horarios);
          } else {
            console.log("Nenhum horário disponível para esta data.");
            setAvailableTimes([]);
          }
        } else {
          console.log("Documento não existe para a data:", selectedDate);
          setAvailableTimes([]);
        }
      }).catch(error => {
        console.error("Erro ao acessar os horários:", error);
      });
    }
  }, [selectedDate, medicoId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>
      <Text style={styles.medicoInfo}>Nome: {nome}</Text>
      <Text style={styles.medicoInfo}>CRM: {crm}</Text>
      <Calendar
  current={selectedDate ? selectedDate : undefined}
  markedDates={{
    [selectedDate]: {selected: true, marked: true, selectedColor: 'blue'}
  }}
  onDayPress={(day) => {
    console.log("Data selecionada:", day.dateString);
    setSelectedDate(day.dateString);
  }}
/>
      <ScrollView style={styles.timeList}>
        {availableTimes.length > 0 ? availableTimes.map((time, index) => (
          <Button
            key={index}
            title={time}
            onPress={() => navigation.navigate('ConfirmacaoScreen', {
              nomeMedico: nome,
              crmMedico: crm,
              dataConsulta: selectedDate,
              horaConsulta: time,
              medicoId: medicoId
            })}
          />
        )) : <Text>Nenhum horário disponível para esta data.</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  medicoInfo: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
  timeList: {
    marginTop: 20,
  }
});

export default Agendamentos;