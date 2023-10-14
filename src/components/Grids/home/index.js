import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, TextInput, AsyncStorage, Modal, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
//import * as ImagePicker from 'expo-image-picker';
const DadosProps = {
    data: {
        id: '',
        porc_umidade: '',
        porc: '',

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

                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>

                :

                <View>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => setAbrirModal(true)}
                    >
                        <View style={styles.caixaagua}>
                            <Text style={{ color: '#f0f' }}>
                            <Material name="grass" size={50} color={'#00e600'}/>
                            </Text>
                            <Text style={{ color: '#000', fontSize: 30 }}> {data.porc}%</Text>
                        </View>



                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => setAbrirModal(true)}
                    >
                        <View style={styles.caixaagua}>
                            <Text style={{ color: '#f0f' }}>
                            <Ionicons name="water" size={50} color={'#0066ff'}/>
                            </Text>
                            <Text style={{ color: '#000', fontSize: 30 }}> {data.porc_umidade}%</Text>
                        </View>



                    </TouchableOpacity>


                </View>
            }



            <Modal
                visible={abrirModal}
                animationType={'fade'}
                transparent={true}
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
