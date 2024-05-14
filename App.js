import React from "react";
import { StyleSheet } from "react-native";

import { NavigationApp } from "./routes/app.route";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NPSScreen from "./Pages/Consulta/NPS";

export default function App() {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
  };

  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        <NavigationApp />
      </Elements>
    </>
  );
}

const styles = StyleSheet.create({
  viewimage: {
    position: "absolute",
    top: -35,

    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 900,
    borderColor: "#4B92E5",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  imagemmodal: {
    width: 40,
    height: 40,
  },
});
