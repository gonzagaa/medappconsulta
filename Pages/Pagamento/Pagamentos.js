import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

const Pagamento = ({ route, navigation }) => {
    const { nomeMedico, dataConsulta, horaConsulta } = route.params;
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    useEffect(() => {
        fetchPaymentIntent();
    }, []);

    const fetchPaymentIntent = async () => {
      try {
          const response = await fetch('http://192.168.1.3:3000/api/create-payment-intent', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ amount: 4990 })  // Valor em centavos
          });
  
          if (!response.ok) throw new Error('Falha na rede');
  
          const { clientSecret } = await response.json();
  
          if (clientSecret) {
              const { error } = await initPaymentSheet({
                  paymentIntentClientSecret: clientSecret,
              });
              if (error) {
                  throw new Error(error.message);
              }
          } else {
              throw new Error('Client Secret não recebido');
          }
      } catch (error) {
          console.error("Erro na obtenção do clientSecret:", error);
          Alert.alert("Erro de Conexão", error.message);
      }
  };

    const handlePayment = async () => {
        const { error } = await presentPaymentSheet();
        if (error) {
            Alert.alert("Erro de pagamento", error.message);
        } else {
            Alert.alert("Sucesso", "O pagamento foi realizado com sucesso!");
            navigation.navigate('PagamentoConcluidoScreen');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>INFORMAÇÕES:</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.nomeMedico}>Nome: {nomeMedico}</Text>
                <Text style={styles.infoText}>Data: {dataConsulta}</Text>
                <Text style={styles.infoText}>Horário: {horaConsulta}</Text>
            </View>
            <TouchableOpacity style={styles.buttonPagar} onPress={handlePayment}>
                <Text style={styles.textbutton}>PAGAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    paddingVertical: 40,
  },
  header: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    color: "#034677"
  },
  
  infoContainer: {
    marginBottom: 20,
    width: '100%',
    borderWidth: 2,
    borderColor: "#034677",
    padding: 16,
    borderRadius: 15,
  },

  nomeMedico: {
    fontSize: 18,
    marginBottom: 8,
    color: "#034677",
    fontWeight: "600"
  },

  dataehora: {
    flexDirection: "row",
    gap: 16,
  },

  infoText: {
    fontSize: 18,
    color: "#034677",
    fontWeight: "600"
  },

  span: {
    color: "#034677",
    fontWeight: "300"
  },

  infoPagamento: {
    flex: .8,
  },

  pagamentoContainer: {
    width: "100%"
  },

  finalizarPagamento: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 4,
    marginRight: 4,
  },

  textPagamento: {
    color: "#4b92e5",
    fontWeight: "600",
    fontSize: 18,
  },

  buttonPagar:{
    backgroundColor: "#4B92E5",
    padding: 10,
    marginTop: 25,
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

  textbutton:{
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontFamily: 'Montserrat', 
    fontWeight: '700',
  },

});

export default Pagamento;

  