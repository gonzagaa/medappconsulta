import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    bgimage: {
        flex: 1,
        resizeMode: 'cover',
        paddingBottom: 20,
      },
  
      textbody:{
        color: 'white',
        fontSize: 40,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 32,
      
        paddingTop:10
    },
   
    imageContainer:{
     position: 'absolute',
     top: 30,
     left: 30,
     paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  
    logoimage:{
        width:70,
        height: 70,
    },
  
    botao:{
        backgroundColor: 'white',
        padding: 12,
        marginTop: 16,
        borderRadius: 50,
  
    },
    viewbotao:{
        marginTop: 16,
  
    },
  
    
    textbotao:{
        textAlign: "center",
        fontSize: 18,
        color: '#4B92E5',
        fontFamily: 'Montserrat', 
        fontWeight: '700',
  
    },
  
    linha:{
        fontFamily: 'Montserrat',
        fontWeight: '300',
        textAlign: "center",
        fontSize: 16,
        color: 'white',
        padding: 6,
    },
  
    centureview:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

  
    pop:{
        position:"absolute",
        bottom: 0,
        alignItems: "center",
    },
  
    modalview:{
        width:"100%", 
        backgroundColor: "white",
        padding: 20,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        flex: .5,
      },

      containerKeyBoard:{
        width:"100%", 
        backgroundColor: "white",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        flex: Platform.OS === 'ios' ? .55 : .6,
      },
  
    viewimage:{
        position: 'absolute',
        top: -75,
        left: "50%",
        transform:[{translateX: -50}],
        backgroundColor: "white",
        borderWidth: 4,
        borderRadius: 900, 
        borderColor: "#4B92E5",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
  
        elevation: 6,
  
      },
  
      textomodal:{
        fontSize: 30,
        color: "#034677",
        textAlign: "left",
        fontFamily: "Monteserrat",
        fontWeight: '700',
        paddingTop: 60,
        lineHeight: 26,
      },
  
      viewbemvindo:{
        paddingLeft: 30,
        paddingRight: 30,
  
      },
  
  
      imagemmodal:{
        width:80,
        height: 80,
      },
  
      textfrase:{
        color: "#034677",
        fontFamily: "Monteserrat",
        textAlign: "left",
        fontSize: 16,
        width: "75%",
        marginTop: 5,
        fontWeight: '300',
  
      },
  
      boxtopicos:{
        marginTop: 24,
        paddingLeft: 30,
        paddingRight: 30,
  
  
  
      },
  
      topicos:{
        marginTop: 5,
        color: "#034677",
        fontFamily: "Monteserrat",
        fontSize: 16,
        fontWeight: '600',
  
  
  
      },
  
      botaomodal:{
        backgroundColor: "#4B92E5",
        padding: 10,
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
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
  
  
      textobotaomodal:{
        textAlign: "center",
        fontSize: 18,
        color: "white",
        fontFamily: 'Montserrat', 
        fontWeight: '700',
  
  
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
        marginBottom: 7,
        marginLeft: 30,
        marginRight: 30,
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
        marginLeft: 45,
        bottom: -14,
        padding: 4,
    },
  
    vazia:{
      flex: .7,
  
    },
  
  conteudopg:{
    flex: .35,
    paddingHorizontal: 30,
  },
  
  paizao:{
     flex: 1,
     paddingVertical: Platform.OS === 'ios' ? 40 : 20,
  },
  
  
  });