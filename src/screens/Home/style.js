import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
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
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName:{
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image:{
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText:{
        color: colors.green, 
        fontSize: 35, 
        fontFamily: fonts.text,
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
        width: '85%',
        alignSelf: "center",
        marginBottom: 25,
    },

    box:{
        backgroundColor: '#e6e6e6',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginTop: 70,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
    },

    rText:{
        marginLeft: 15,
        fontSize: 20,
        color: '#000',
        fontFamily: fonts.text,
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
        fontFamily: fonts.text,
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
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer:{
        marginTop: 30,
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside:{
        fontFamily: fonts.text,
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