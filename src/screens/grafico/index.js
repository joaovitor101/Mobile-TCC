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
    
    backgroundGradientFrom: '#0066cc',  // Altere aqui para a cor desejada
    backgroundGradientTo: '#0066cc',    // Altere aqui para a cor desejada

    decimalPlaces: 1,
    barPercentage: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={{ backgroundColor: 'lightgray', flex: 1, padding: 20 }}> 
      <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>
        Registros
      </Text>
      {chartData.length === 0 ? (
        <Text>Carregando...</Text>
      ) : (
        <BarChart
          style={{ marginTop: 150 }}
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
    </View>
  );
};

export default App;
