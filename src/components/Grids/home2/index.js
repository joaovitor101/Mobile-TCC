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
    const isPorcentagemBaixa = data.porc <= 20;
    const isPorcentagemUmidadeBaixa = data.porc_umidade <= 20;



    return (


        <>
            {data.id === undefined && data.nome === undefined ?

                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>

                :

                <View>
                    {/* <View style={styles.blablabla}>
                            <View><Text style={styles.naoseiAA}>Umidade do seu Solo</Text></View>
                            <View style={styles.caixaaguau}>
                                <Text style={{ color: '#000' }}>
                                    <Material name="grass" size={50} color={'#00e600'} />
                                </Text>


                                <Text style={[styles.porcentagem, isPorcentagemUmidadeBaixa && styles.porcentagemBaixa]}>

                                    {`${data.porc_umidade}%`}
                                    {data.porc_umidade <= 20 && (
                                        <Ionicons name="alert-circle" style={{ fontSize: 25 }} />
                                    )}
                                </Text>
                            </View>
                        </View> */}



                    <View style={styles.blablabla2}>
                        <View><Text style={styles.naosei}>Armazenamento de Água</Text></View>
                        <View style={styles.caixaagua}>
                            <Text style={{ color: '#000' }}>
                                <Ionicons name="water" size={50} color={'#0066ff'} />
                            </Text>
                            <Text style={[styles.porcentagem, isPorcentagemBaixa && styles.porcentagemBaixa]}>
                                {`${data.porc}%`}
                                {data.porc <= 20 && (
                                    <Ionicons name="alert-circle" style={{ fontSize: 25 }} />
                                )}
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <Image
                           
                                source={require('../../../assets/onda.png')} // Substitua pelo caminho da sua imagem
                                style={styles.imageFooter}
                                resizeMode='repeat' // Ajuste o modo de redimensionamento conforme necessário
                            />
                        </View>
                    </View>
                </View>
            }





        </>

    );
}


export default CardUsuarios;

