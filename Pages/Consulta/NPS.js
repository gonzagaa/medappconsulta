import React from "react";

import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";

import Logo from "../../Image/logobranca.png";

export default function NPSScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#034677",
        height: "100%",
        width: "100%",
      }}
    >
      <SafeAreaView
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            height: Dimensions.get("window").height - 200,
          }}
        >
          <Image
            source={Logo}
            style={{
              marginTop: 60,
              display: "flex",
              marginHorizontal: "auto",
              width: 250,
              height: 80,
            }}
            resizeMode="contain"
          />
          <View
            style={{
              marginTop: 60,
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 24,
                fontWeight: "800",
                textAlign: "center",
                fontFamily: "Montserrat",
              }}
            >
              {`SEU ATENDIMENTO FOI\nFINALIZADO!`}
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#EEE",
                fontSize: 20,
                textAlign: "center",
                fontFamily: "Montserrat",
              }}
            >
              {`Sua consulta atendeu suas\nexpectativas?`}
            </Text>
            <View
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                flexDirection: "row",
                width: "100%",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  height: 35,
                  backgroundColor: "#4B92E5",
                  alignContent: "center",
                  justifyContent: "center",
                  paddingHorizontal: 40,
                }}
              >
                <Text
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: "#FFF",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Sim
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 35,
                  backgroundColor: "#FFF",
                  alignContent: "center",
                  justifyContent: "center",
                  paddingHorizontal: 40,
                }}
              >
                <Text
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: "#4B92E5",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Não
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: 40,
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#EEE",
                fontSize: 20,
                textAlign: "center",
                fontFamily: "Montserrat",
              }}
            >
              {`Qual nota você daria pro seu\natendimento?`}
            </Text>
            <View
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                flexDirection: "row",
                width: "100%",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: "#FFF",
                  marginRight: 10,
                }}
              >
                0
              </Text>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
                return (
                  <Ionicons
                    color="#jFFF"
                    name="star"
                    size={18}
                    style={{
                      marginRight: 7.5,
                    }}
                  />
                );
              })}
              <Text
                style={{
                  fontSize: 30,
                  color: "#FFF",
                  marginLeft: 10,
                }}
              >
                10
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: 10,
              paddingVertical: 10,
              width: "100%",
              borderRadius: 30,
              backgroundColor: "#4B92E5",
              alignContent: "center",
              justifyContent: "center",
              paddingHorizontal: 40,
            }}
          >
            <Text
              style={{
                width: "100%",
                textAlign: "center",
                color: "#FFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              OBRIGADO(A)
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 40,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#EEE",
                fontSize: 16,
                textAlign: "center",
                fontFamily: "Montserrat",
                marginRight: 10,
              }}
            >
              Suporte
            </Text>
            <Ionicons size={16} name="headset" color="#FFF" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
