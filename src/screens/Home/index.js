// import React, { useEffect, useState } from 'react';
// import { styles } from './style';

// import {
//     SafeAreaView,
//     Text,
//     View,
//     ScrollView,
//     TouchableOpacity,
//     Image,
//     ActivityIndicator,
//     RefreshControl,
//     StatusBar,
//     Alert,

// } from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { MaterialIcons } from '@expo/vector-icons';
// import Load from '../../components/Load';
// import { DrawerActions, useNavigation } from '@react-navigation/core';
// import api from '../../services/api';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';

// import { useIsFocused } from '@react-navigation/native';

// export default function Home() {
//     const navigation= useNavigation();
//     const isFocused = useIsFocused();

//     const [dados, setDados] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [refreshing, setRefreshing] = useState(false);
//     const [usu, setUsu] = useState('');

//     const DadosProps= {
//         data: {
//             nome: string,       
//         }
//     }

//     async function listarDados() {

//         try {
//             const user = await AsyncStorage.getItem('@user');
//             const res = await api.get(`pam3etim/bd/dashboard/listar-cards.php?user=${user}`);
//             setDados(res.data);

//         } catch (error) {
//             console.log("Erro ao Listar " + error);
//         } finally {
//             setIsLoading(false);
//             setRefreshing(false);

//         }
//     }

//     useEffect(() => {
//         listarDados();
//     }, [isFocused]);

//     const onRefresh = () => {
//         setRefreshing(true);
//         listarDados();

//     };


//     return (
//         <View style={{ flex: 1 }}>
//             <StatusBar barStyle="light-content" />
//             <View style={{ flex: 1 }}>
//                 <View style={styles.header}>
//                     <View style={styles.containerHeader}>

//                         <TouchableOpacity
//                             style={styles.menu}
//                             onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//                         >
//                             <MaterialIcons name="menu" size={35} color="white" />
//                         </TouchableOpacity>

//                         <Image style={styles.logo} source={require('../../assets/logo.jpeg')} />

//                     </View>
//                 </View>


//                     <ScrollView
//                         style={{ flex: 1 }}
//                         showsVerticalScrollIndicator={false}
//                         nestedScrollEnabled={true}
//                         refreshControl={
//                             <RefreshControl
//                                 refreshing={refreshing}
//                                 onRefresh={onRefresh}
//                             />
//                         }
//                     >

//                         <View style={styles.circleProgressView}>
//                             <View style={styles.textProgressContainer}>
//                                 <Text style={styles.textProgressTitle}>Bem Vindo Usuário!</Text>
//                                 <Text style={styles.textProgress}>Conta administradora</Text>
//                             </View>
//                         </View>


//                         <View style={styles.containerBox}>
//                             <TouchableOpacity onPress={() => navigation.navigate("Usuario")}>
//                                 <View>
//                                     <View style={styles.box}>
//                                         <View style={styles.textos}>
//                                             <Text style={styles.rText}>para o monitoramento, clique aqui</Text>
//                                         </View>
//                                     </View>
//                                     <Text style={styles.textFooter}>Cadastro dos Registros</Text>
//                                 </View>
//                             </TouchableOpacity>

//                         </View>


//                     </ScrollView>
                
//             </View>
//         </View>






//     )
// }

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
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Imagem } from '../../assets/bg.png';
import Load from '../../components/Load';
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/native';
import { styles } from './style';
import Grid from '../../components/Grids/home';


const Home = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [usu, setUsu] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [sucess, setSucess] = useState(false);

  const obj = {
    status: isEnabled ? 0 : 1,


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
  async function listarDados() {
    try {
      const user = await AsyncStorage.getItem('@user');
      const res = await api.get(`pam3etim/bd/dashboard/listar-cards.php?user=${user}`);
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
    setRefreshing(true);
    listarDados();
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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

        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <ImageBackground source={Imagem}>
            <Image blurRadius={50} style={styles.bg} source={require('../../assets/bg.png')} />
          </ImageBackground>
          <View style={styles.textProgressContainer}>
            <Text style={styles.textProgressTitle}>Bem Vindo Usuário!</Text>
            <Text style={styles.textProgress}>Conta administradora</Text>
          </View>
          <View style={styles.containerBox}>
            <TouchableOpacity>
              <View>
                <View style={styles.box}>
                  {/* <View style={styles.textos}>
                    <Text style={styles.rText}>para o monitoramento, clique aqui</Text>
                  </View> */}
                </View>
                <MaterialIcons style={styles.aaa} name="search" size={50} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.testezinho}>Clique para ligar ou desligar o seu motor</Text>
            <Text style={styles.testezinho}>Seu motor está {isEnabled ? 'Ligado' : 'Desligado'}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={(value) => {
                toggleSwitch(value);
                saveData(value);
              }}
              value={isEnabled}
            />
          </View>

          <View style={styles.boxinho}>
            <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
              <FlatList
                data={lista}
                renderItem={renderItem}

              />
            </View>

            <View style={styles.boxinho}>
            <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
              <FlatList
                data={lista}
                renderItem={renderItemGrama}

              />
            </View>
                </View>
            
            {/* <View style={styles.caixaagua}>
              <Text style={{ color: '#f0f' }}>
                <MaterialIcons
                  name="waves"
                  size={50} />
              </Text>
               <Text style={{ color: '#0099ff', fontSize:22 }}>{dados.porc}</Text> 
            </View> */}


            {/* <View style={styles.caixaagua}>
              <Text style={{ color: '#f0f' }}>
                <MaterialIcons
                  name="grass"
                  size={50} />
              </Text>

              <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 30, position: 'relative', marginTop: 10 }}></Text>
            </View> */}
          </View>

        </ScrollView>
      </View>

    </View>

  );
};

export default Home;
