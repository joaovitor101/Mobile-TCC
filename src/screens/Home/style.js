import { StyleSheet } from "react-native";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    Colunas:{
        
        flexDirection: 'row',
        marginTop: 100,
        height: 150,
    },
    Colunas2:{
   
        flexDirection: 'row',
        marginTop: 50,
        
    },
    switchContainer:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset:{width: 0, height: 2}
    },
    testezinho:{
        color: '#000',
        fontSize:18
    },

    boxinho:{
        padding: 30,
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 20,
     },

    caixaagua:{
        width: '85%',
        marginTop: 10,
        color: '#000',
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 40,
        borderRadius: 10,
        height: 125,
    },
    header:{
        backgroundColor: '#1c5e46',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 55,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 10,
    },


    bg:{
        position:"absolute",
        resizeMode:'cover',
        height:1000
    },
    logo:{
        width: 160,
        height: 40,
        alignSelf: "center",
        marginTop: 7,
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    titleTasks:{
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting:{
        fontSize: 18,
        color: colors.heading,
            
        alignSelf: "center",
    },

    userName:{
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
            
    },

    image:{
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText:{
        color: colors.green, 
        fontSize: 35, 
            
    },

    tasks:{
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground:{
        backgroundColor: '#333333'
    },

    tasksText:{
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout:{
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox:{
        flex: 1,
        height: 250
    },


    box:{
        backgroundColor: '#e6e6e6',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        width: '80%',
        marginTop: 20,
        marginLeft: 35,
        borderRadius: 15,
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
        alignContent: "center",
        
    },

    bombom:{
        marginBottom: 90,
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius:'50%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 10,
        marginLeft: 5,
    },  

    aaa:{
        
        width: 50,
        // backgroundColor: '#fff',
        alignSelf: 'center',
        marginLeft: 10,
        marginTop: 5
    },  
    rText:{
        marginLeft: 15,
        fontSize: 20,
        color: '#000',
            
    },

    textFooter:{
        borderTopColor: '#fff',
        paddingTop: 15, 
        paddingBottom: 10, 
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#871003',
        textAlign: 'center',
        fontSize: 18,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
            
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress:{
            
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
            
        fontSize: 20,
        color: '#fff',
    },

    textProgressContainer:{
        marginTop: 30,
        
        marginLeft: 35,
    },

    numberInside:{
            
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    }
})