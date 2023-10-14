import React, { useState, useEffect } from 'react';
import {ScrollView, Platform, Alert, Picker, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { Success } from '../../lotties/Success';
//import { TextInputMask } from 'react-native-masked-text';
//import DateTimePicker from '@react-native-community/datetimepicker';
//import { format } from 'date-fns';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

 ParamList = {
    Detail: {
       id_reg: string,
        
    }
};


const NovoUsuario= FC= () => {
    const navigation = any = useNavigation();

    const route = useRoute<RouteProp<ParamList; 'Detail';
    const id_reg = route?.params?.id_reg;
       
    const [agua, setAgua] = useState("");   
    const [solo, setSolo] = useState("");   
    const [bateria, setBateria] = useState("");
    const [rega, setRega] = useState("");
  
       
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
   
    async function saveData() {            
       
              
           if (agua == "" || solo == "" || bateria == "" || rega == "") {
            showMessage({
                message: "Erro ao Salvar",
                description: 'Preencha os Campos Obrigatórios!',
                type: "warning",
            });
            return;
        }

        try {
            const obj = {
                status: string,
            }
     
            const res = await api.post('pam3etim/bd/motor.php', obj);

            if (res.data.sucesso === false) {
                showMessage({
                    message: "Erro ao Salvar",
                    description: res.data.mensagem,
                    type: "warning",
                    duration: 3000,
                });

                return;
            }

            setSucess(true);
            showMessage({
                message: "Salvo com Sucesso",
                description: "Registro Salvo",
                type: "success",
                duration: 800,
            });
            navigation.push("Usuario")

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
            setSucess(false);
        }
    }

    


     
        
    useEffect(() => {
        loadData().then(() => setLoading(false))
    }, [])

    if (loading === true) {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
            </View>
        )
    }

    if (sucess) {
        return <Success />
    }
    

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <View style={styles.Header}>
                <TouchableOpacity
                    style={styles.BackButton}
                    onPress={() => navigation.push("Usuario")}
                >
                    <Ionicons name="md-arrow-back-circle-outline" size={35} color="#484a4d" />

                </TouchableOpacity>
                {edit ?
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Inserir Registro</Text>
                    </View>

                    :

                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Editar Registro</Text>
                    </View>
                }

            </View>

             <ScrollView>   
            <View>
                <Text style={styles.TitleInputs}>Digite a porcentagem de água armazenada</Text>

                <TextInput
                    placeholder="Porcentagem"
                    onChangeText={(agua) => setAgua(agua)}
                    value={agua}
                    style={styles.TextInput}
                />
            </View>


            <View>
                <Text style={styles.TitleInputs}>Digite a porcentagem de bateria</Text>

                <TextInput
                    placeholder="Porcentagem"
                    onChangeText={(bateria) => setBateria(bateria)}
                    value={bateria}
                    style={styles.TextInput}
                   
                />
            </View>



            
            <View>
                <Text style={styles.TitleInputs}>Digite a porcentagem de umidade do solo</Text>

                <TextInput
    
                    placeholder="Porcentagem"
                    onChangeText={(solo) => setSolo(solo)}
                    value={solo}
                    style={styles.TextInput}
                   
                />
            </View>


            
            <View>
                <Text style={styles.TitleInputs}>Deseja ativar a rega automática?</Text>

                <TextInput
                    placeholder="Ativado/Desativado"
                    onChangeText={(rega) => setRega(rega)}
                    value={rega}
                    style={styles.TextInput}
                   
                />
            </View>

           
        
           
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        setSucess(true);
                        saveData();
                        setSucess(false);
                    }}
                >
                    <Text style={styles.ButtonText}>Salvar Registro</Text>
                </TouchableOpacity>

                </ScrollView>

               
    

        </View>
    );
}

export default NovoUsuario;