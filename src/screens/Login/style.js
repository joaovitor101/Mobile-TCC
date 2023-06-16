import { StyleSheet} from 'react-native';
import fonts from '../../styles/fonts';
export const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      paddingHorizontal: 40,
    },

    form:{
      width: '85%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      marginTop: 400,
    },

    login:{
      borderRadius: 5,
      marginTop: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      height: 45,
      paddingLeft: 3,
      marginBottom: 10,
    },

    loginSave:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e36222',
      marginTop: 15,
      width: '50%',
      height: 50,
      borderRadius: 5,
      marginBottom: 15,
    },

    text:{
      color: '#FFF',
      fontSize: 20,
      fontFamily: fonts.text,
    },

    logo:{
      marginTop: 0,
      
    },


    textoIcon:{
      color: 'white',
      fontSize: 18,
    },

    test:{
      position:'absolute',
      zIndex: 100,
      color: '#fff',
      fontSize: 35,
      marginTop: 300, 
    },

    google:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
    },

    apple:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
      marginLeft: 10,
    },

    row:{
      flexDirection: 'row',
    },

    forget:{
      color: '#737373',
      fontSize: 14,
      marginTop: 40,
    },

    textRow:{
      alignSelf: 'center',
      fontFamily: fonts.text,
      fontSize: 16,
      color: 'black',
      marginTop: 5,
      marginRight: 5,
    },

    traco:{
      marginTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#C1C1C1',
      width: '80%',
    },

    signup:{
      color: '#737373',
    },

    signupQ:{
      color: 'black',
    },

})


