import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import api from '../../services/api';

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
    backgroundGradientFrom: '#f0f0f0', // Altere a cor de fundo aqui
    decimalPlaces: 1,
    barPercentage: 0.5,
    color: (opacity = 1) => `rgba(242, 237, 239, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={{backgroundColor: '#fff'}}>
      <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>
        Registros
      </Text>
      {chartData.length === 0 ? (
        <Text>Carregando...</Text>
      ) : (
        <BarChart
          style={{ marginTop: 20 }}
          data={{
            labels,
            datasets: [
              {
                data,
              },
            ],
          }}
          width={400}
          height={320}
          chartConfig={chartConfig}
          verticalLabelRotation={10}
        />
      )}
    </View>
  );
};

export default App;
