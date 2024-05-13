import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, backgroundColor} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Testcam = ({ navigation }) => {
    const [facing, setFacing] = useState('front');
    const [permission, requestPermission] = useCameraPermissions();
    const [connectionInfo, setConnectionInfo] = useState('');
    const [connectionStatus, setConnectionStatus] = useState('Checking connection...');
  
    if (!permission) {
      // Camera permissions are still loading.
      return <View />;
    }
  
    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }
  
    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
  
    NetInfo.fetch().then(state => {
        setConnectionInfo(state.isConnected ? 'Sua conexão é boa!' : 'Sua conexão é instavel!');
    });

    return (
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing}></CameraView>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <View style={styles.viewIonicon}><Ionicons style={[styles.ionicon, backgroundColor]} name='repeat-outline' size={30} color={"white"}/></View>
                <Text style={styles.textbutton}>Virar camera</Text>
            </TouchableOpacity>

            <View style={styles.connectionBar}>
                <View style={styles.viewIonicon}><Ionicons style={styles.ionicon} name='wifi-outline' size={30} color={"white"}/></View>
                <Text style={styles.textbutton}>{connectionInfo}</Text>
            </View>
        </View>
         
        <View style={styles.viewButtonContinuar}>
            <TouchableOpacity style={styles.buttonContinuar}>
                <Text style={styles.textButtonContinuar}>REALIZAR CHAMADA</Text>
            </TouchableOpacity>
        </View>
          
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 70,
    },

    camera: {
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      borderBottomWidth: 5,
      borderBottomColor: "#034677",
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      marginTop: 24,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
    textbutton: {
      fontSize: 14,
      fontWeight: '400',
      color: "#000",
      marginTop: 10,
    },
    connectionBar: {
        flex: 1,
        alignItems: 'center',
      },

    viewIonicon: {
        backgroundColor: "#4b92e5",
        padding: 7,
        borderRadius: 80,

        shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
    },

    viewButtonContinuar: {
        paddingHorizontal: 30,
    },

    buttonContinuar: {
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

    textButtonContinuar: {
        textAlign: "center",
        fontSize: 18,
        color: "white",
        fontFamily: 'Montserrat', 
        fontWeight: '700',
    },


  });

export default Testcam;










