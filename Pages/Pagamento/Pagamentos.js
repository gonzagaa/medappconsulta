import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import {
  StripeProvider,
  useStripe,
  CardField,
} from "@stripe/stripe-react-native";

const Pagamento = ({ route, navigation }) => {
  const { nomeMedico, dataConsulta, horaConsulta } = route.params;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(true);
  const [paymentReady, setPaymentReady] = useState(true); // Controla quando o usuário pode submeter o pagamento

  const initializePaymentSheet = async () => {
    const response = await fetch(`${"http://localhost:5000"}/payment-sheet`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: { name: "Jane Doe" },
    });

    if (error) {
      console.error("Error initializing payment sheet:", error);
      Alert.alert("Error", error.message);
    } else {
      setLoading(true);
      setPaymentReady(true);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <StripeProvider publishableKey="pk_test_51OmJP4HiMxD69xNjoxKW190dEYRDx75AyEKHE6IhVnzZBdczLKJH3SU0G69s9kgqbormh9aHEHh2N2HiV4mnWX3M00AQd4YWAj">
      <View style={styles.container}>
        <Text style={styles.header}>INFORMAÇÕES:</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.nomeMedico}>Nome: {nomeMedico}</Text>
          <Text style={styles.infoText}>Data: {dataConsulta}</Text>
          <Text style={styles.infoText}>Horário: {horaConsulta}</Text>
        </View>
        <Text style={styles.header}>Forma de Pagamentos:</Text>
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            width: "100%",
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            console.log("Card details updated", cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log("focus changed", focusedField);
          }}
        />
        <Button
          disabled={!paymentReady}
          title="Checkout"
          onPress={async () => {
            const { error } = await presentPaymentSheet();
            if (error) {
              Alert.alert(`Error code: ${error.code}`, error.message);
            } else {
              Alert.alert("Success", "Your order is confirmed!");
            }
          }}
        />
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    paddingVertical: 40,
  },
  header: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#034677",
  },

  infoContainer: {
    marginBottom: 20,
    width: "100%",
    borderWidth: 2,
    borderColor: "#034677",
    padding: 16,
    borderRadius: 15,
  },

  nomeMedico: {
    fontSize: 18,
    marginBottom: 8,
    color: "#034677",
    fontWeight: "600",
  },

  dataehora: {
    flexDirection: "row",
    gap: 16,
  },

  infoText: {
    fontSize: 18,
    color: "#034677",
    fontWeight: "600",
  },

  span: {
    color: "#034677",
    fontWeight: "300",
  },

  infoPagamento: {
    flex: 0.8,
  },

  pagamentoContainer: {
    width: "100%",
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

  buttonPagar: {
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

  textbutton: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "700",
  },
});

export default Pagamento;
