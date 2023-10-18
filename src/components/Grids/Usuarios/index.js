import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, TextInput, AsyncStorage, Modal, Alert, Linking, Text, TouchableOpacity, View, Load } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { showMessage, hideMessage } from "react-native-flash-message";
import {Icon, EvilIcons, MaterialIcons, AntDesign, Ionicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Entypo';
// import Material from 'react-native-vector-icons/MaterialCommunityIcons';
//import * as ImagePicker from 'expo-image-picker';

const DadosProps = {
    data: {
        id: string,
        agua: string,
        solo: string,
        bateria: string,
        rega: string,
        nome_do_dia: string,
        hora: string,
    }
}


CardUsuarios = ({ data } = DadosProps) => {

    const [abrirModal, setAbrirModal] = useState(false);
    const navigation = any = useNavigation();


    async function excluir(nome, id) {

        Alert.alert('Sair', `Você tem certeza que deseja excluir o Registro : ` + nome, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        const response = await api.get(`apiModelo/usuarios/excluir.php?id=${id}`);

                        showMessage({
                            message: "Excluído Sucesso",
                            description: "Registro Excluído",
                            type: "info",
                            duration: 800,
                        });

                        navigation.push('Usuarios');
                    } catch (error) {
                        Alert.alert('Não foi possivel excluir, tente novamente!')
                    }
                }
            }
        ])
    }


    return (
        <>
            {data.id === undefined && data.nome === undefined ?

                <Text style={{ color: '#598', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>

                :

                <View>
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => setAbrirModal(true)}
                        >
                            <View style={styles.boxContent}>    

                                <Text style={{ color: '#000', fontSize: 18, marginTop: 10 }}> <Entypo name="calendar" size={25} color={'#ff3333'} /> {data.nome_do_dia}</Text>

                                <Text style={{ color: '#000', fontSize: 20, marginTop: 10 }}> <Entypo name="time-slot" size={25}/> {data.hora}</Text>

                                <Text style={{ color: '#000', fontSize: 20, marginTop: 10 }}> <MaterialCommunityIcons name="grass" size={25} color={'#00e600'}/> {data.porc_umidade + '%'}</Text>
                            </View>

                            <View style={styles.boxContent}>
                                <Text style={{ color: '#000', fontSize: 20, marginTop: 10 }}> <Entypo name="battery" size={25} color={'#40bf80'} /> {data.bateria + '%'}</Text>

                                <Text style={{ color: '#000', fontSize: 20, marginTop: 10 }}> <MaterialCommunityIcons name="watering-can" size={25} color={'#ff8c1a'} /> {data.rega}</Text>

                                <View style={styles.alinha}><Text style={{ color: '#000', fontSize: 20, marginTop: 10 }}> <Ionicons name="water" size={25} color={'#0066ff'}/> {data.porc+ '%'}</Text></View>
                            </View>
                            



                        </TouchableOpacity>
    

                </View>
            }



            <Modal
                visible={abrirModal}
                animationType={'fade'}
                transparent={false}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal)
                }}
            >
                <View style={styles.centralizarModal}>
                    <View style={styles.CardContainerModal}>
                        <TouchableOpacity
                            style={styles.removeItem}
                            onPress={() => setAbrirModal(false)}
                        >
                            <EvilIcons name="close" size={25} color="black" />
                        </TouchableOpacity>

                        <View style={styles.Section}>
                            <Text style={styles.Entrada}>Agua: {data.agua}%</Text>
                            <Text style={styles.Entrada}>Rega: {data.rega}</Text>
                            <Text style={styles.Entrada}>Solo: {data.solo}%</Text>
                            <Text style={styles.Entrada}>Bateria: {data.bateria}%</Text>
                        </View>


                        <TouchableOpacity onPress={() => Linking.openURL(url + 'painel/images/perfil/' + data.foto)}>
                            {(() => {
                                if (data.foto != 'sem-foto.jpg' && data.foto != '' && data.foto != null) {

                                    return (
                                        <View style={styles.viewImg}>
                                            <Image style={styles.ImagemModal} source={{ uri: (url + 'painel/images/perfil/' + data.foto) }} />
                                            <Text style={styles.textoAbrir}>(Clique para Abrir)</Text>
                                        </View>
                                    )

                                }

                            })()}
                        </TouchableOpacity>



                    </View>
                </View>
            </Modal>



        </>
    );
}

export default CardUsuarios;