import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import api from '../../services/api';
import Wave from 'react-native-waves';

const App = () => {
  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  useEffect(() => {
    fetchData();
     fetchData2();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('pam3etim/grafico/listar.php');
      setChartData(response.data.resultado);
    } catch (error) {
      console.error('Erro ao obter os dados', error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await api.get('pam3etim/grafico/listar2.php');
      setChartData2(response.data.resultado || []); // Inicializa com um array vazio se não houver dados
    } catch (error) {
      console.error('Erro ao obter os dados do listar2.php', error);
    }
  };

  const labels = chartData.map(item => item.nome);
  const data = chartData.map(item => item.porc);

  const labels2 = chartData2.map(item => item.nome);
  const data2 = chartData2.map(item => item.porc_umidade);


  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 2,
    barPercentage: 1,
    color: (opacity = 1) => `rgba(0, 102, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 100 }}>
        <Text style={{ fontSize: 25, textAlign: 'center', color: 'black', marginBottom: 10 }}>
          Seu armazenamento de água
        </Text>
        <View style={{ backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3, elevation: 4 }}>
          {chartData.length === 0 ? (
            <Text style={{ padding: 20 }}>Carregando...</Text>
          ) : (
            <BarChart
              style={{ marginVertical: 10 }}
              data={{
                labels,
                datasets: [
                  {
                    data,
                  },
                ],
              }}
              width={350}
              height={300}
              chartConfig={chartConfig}
              verticalLabelRotation={10}
            />
          )}
        </View>
        <Wave placement="top" />
      </View>

      <View style={{ paddingHorizontal: 20, paddingBottom: 50 }}>
        <Text style={{ fontSize: 25, textAlign: 'center', color: 'black', marginTop: 30, marginBottom: 10 }}>
          Sua umidade do solo
        </Text>
        <View style={{ backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3, elevation: 4 }}>
          {chartData.length === 0 ? (
            <Text style={{ padding: 20 }}>Carregando...</Text>
          ) : (
            <BarChart
              style={{ marginVertical: 10 }}
              data={{
                labels: labels2,
                datasets: [
                  {
                    data: data2,
                  },
                ],
              }}
              width={350}
              height={300}
              chartConfig={chartConfig}
              verticalLabelRotation={10}
            />
          )}
        </View>
        {/* <Wave placement="top" /> */}
      </View>
    </ScrollView>
  );
};

export default App;
