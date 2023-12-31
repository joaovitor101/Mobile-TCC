import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import url from '../../services/url';
import {
  String,
  View,
  Switch,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  StatusBar,
  FlatList,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EvilIcons, MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Imagem } from '../../assets/bg.png';
import Load from '../../components/Load';
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/native';
import { styles } from './style';
import Grid from '../../components/Grids/home';
import * as Animatable from 'react-native-animatable';

const Home = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [usu, setUsu] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHabilitado, setIsHabilitado] = useState(false);
  const [sucess, setSucess] = useState(false);

  const obj = {
    status: isEnabled ? 0 : 1,
  }

  const objeto = {
    status: isHabilitado ? 3 : 2,
  }

  //const navigation = useNavigation();

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


  useEffect(() => {
    loadData();
  }, [page, totalItems, lista]);

  async function loadData() {
    try {
      const response = await api.get(`pam3etim/bd/usuarios/listar.php`);

      if (lista.length >= response.data.totalItems) return;

      if (loading === true) return;

      setLoading(true);

      setLista([...lista, ...response.data.resultado]);
      setPage(page + 1);
    } catch (error) {
      console.log(error)
    }
  }


  const renderItem = function ({ item }) {
    return (
      <Grid
        data={item}
      />
    )
  }

  const renderItemGrama = function ({ item }) {
    return (
      <Grid
        data={item}
      />
    )
  }
  //------------------------------------------------------------------
  async function saveData() {


    try {


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


    } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
      setSucess(false);
    }
  }
  //------------------------------------------------------------------

  async function saveDataIrrigacao() {


    try {


      const res = await api.post('pam3etim/bd/irrigacao.php', objeto);

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

      //------------------------------------------------------------------------

    } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
      setSucess(false);
    }
  }

  async function listarDados() {
    try {
      const user = await AsyncStorage.getItem('@user');
      const res = await api.get(`pam3etim/bd/usuarios/listar.php?`);
      setDados(res.data);
    } catch (error) {
      console.log('Erro ao Listar ' + error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    listarDados();
  }, [isFocused]);

  const onRefresh = () => {
    console.log('onRefresh called'); // Verifique se esta mensagem aparece no console
    setRefreshing(true);
    listarDados();
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchIrrigacao = () => setIsHabilitado((previousState) => !previousState);
  // const toggleSwitch = () => setIsHabilitado((previousState) => !previousState);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.containerHeader}>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MaterialIcons name="menu" size={35} color="white" />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('../../assets/logo.jpeg')} />
          </View>
        </View>
        <ImageBackground source={Imagem}>
            <Image blurRadius={50} style={styles.bg} source={require('../../assets/bg.png')} />
          </ImageBackground>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 10 }} // Adicione este estilo para evitar espaço em branco na parte inferior
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.back}>Voltar</Text>
          </TouchableOpacity>


          <View style={styles.box}></View>


          

        <View></View>

          <View style={{alignSelf: 'center', color: 'white', height: 10, backgroundColor: ''}}></View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: '#fff', width: '90%', borderRadius: 10, elevation: 5, height: 340, marginTop: 90, }}>
            <Text style={styles.testezinho}>Clique para ligar ou desligar o seu motor</Text>
            <View style={styles.shadow}>
            <MaterialCommunityIcons name="home" size={150} color="#993d00" style={{zIndex:1}}/>
            <View style={styles.switchContainer}>
            <Switch
            
              style={{ transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }] }}
              trackColor={{ false: '#767577', true: '#00ff99' }}
              thumbColor={isEnabled ? '#666666' : '#fff'}
              onValueChange={(value) => {
                toggleSwitch(value);
                saveData(value);
              }}
              value={isEnabled}
            />
            </View>
            </View>
          </View>

          

          </ScrollView>
      </View>

    </View>

  );
};

export default Home;
