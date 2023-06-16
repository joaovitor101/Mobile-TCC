import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {styles} from './style';
import { Imagem } from '../../assets/background-container.jpeg';
import {
    ImageBackground,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Alert,
  } from 'react-native';
  
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  //import { Splash } from '../../lotties/Splash'; 
  import api from '../../services/api';

  export default function Login() {
    const navigation= useNavigation();

    const [logged, setLogged] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function login(){      
      const obj = { email, senha };
      const res = await api.post('pam3etim/bd/login/login.php', obj);

      if(res.data.result === 'Dados Incorretos!'){
        Alert.alert('Ops!', 'Dados Incorretos!');
      }else{
        await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].id));
        await AsyncStorage.setItem('@nivel', JSON.stringify(res.data.result[0].nivel));
        
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
      }

    }

   
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('@user');
      
      if(user){
        setLogged(1);
  
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        setLogged(2)
      }
    }
  
    useEffect(() => {
      checkLogin();
    }, []);

    return(
      <View style={styles.container}>
      <StatusBar translucent hidden />
      <ImageBackground source={Imagem}>
      <Image style={styles.logo} source={require('../../assets/logo3.jpg')} />
      </ImageBackground>
      <ImageBackground source={Imagem}>
      <Image style={styles.logo} source={require('../../assets/background-container.jpeg')} />
      </ImageBackground>      
      <Text style={styles.test}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.login}
          placeholder="Email"
          value={email}
          onChangeText={ (email) => setEmail(email)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.login}
          placeholder="Senha"
          value={senha}
          onChangeText={ (senha) => setSenha(senha)}
        />

        <TouchableOpacity
          style={styles.loginSave}
          onPress={login}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>  

    </View>
    )
  }