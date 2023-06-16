import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        
    },

    Pages:{
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: '#4d79ff',
        height: 45,
        borderRadius: 10,
    },

    Sair:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#4d79ff',
        height: 45,
        borderRadius: 10,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 30,
    },

    PagesText:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#fff',
        alignSelf: "center",
        marginLeft: 20,
        zIndex: 1,
    },

    SairText:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#fff',
        alignSelf: "center",
        marginLeft: 20,
    },

    footer:{
        padding: 10,
    },

    logo:{
        width: 135,
        height: 50,
        alignSelf: "center",
        marginTop: 10,
    },
})