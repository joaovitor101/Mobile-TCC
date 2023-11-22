import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import api from '../../services/api';
import Svg, {Path, SvgUri} from 'react-native-svg';
import { Dimensions, StyleSheet} from 'react-native';
import { styles } from '../Home/style';
import Wave from "react-native-waves"
const App = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('pam3etim/grafico/listar.php');
      setChartData(response.data.resultado);
    } catch (error) {
      console.error('Erro ao obter os dados', error);
    }
  };

  const labels = chartData.map(item => item.id);
  const data = chartData.map(item => item.valores);

  const chartConfig = {
    
    backgroundGradientFrom: '#fff',  // Altere aqui para a cor desejada
    backgroundGradientTo: '#fff',    // Altere aqui para a cor desejada

    decimalPlaces: 2,
    barPercentage: 1,
    color: (opacity = 1) => `rgba(0, 102, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    
  };



  return (
    
    <View style={{ backgroundColor: '#fff', flex: 1 }}> 
      <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 90, zIndex: 1, color: 'white' }}>
        Informações Dos Registros
      </Text>
      {chartData.length === 0 ? (
        <Text>Carregando...</Text>
      ) : (
        <BarChart
          style={{ marginTop: 204, position: 'absolute', zIndex: 1 }}
          data={{
            labels,
            datasets: [
              {
                data,
              },
            ],
          }}
          width={400}
          height={300}
          chartConfig={chartConfig}
          verticalLabelRotation={10}
        />
      )}
      <Wave placement="top"></Wave>
<Wave placement="top" gap={90} color="#003d66" height={200} ></Wave>

<Wave placement="bottom" height={10}></Wave>
<Wave placement="bottom" gap={100} color="#003d66" height={4} ></Wave>
    </View>
    
  );
};


export default App;
