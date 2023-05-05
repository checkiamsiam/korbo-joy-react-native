import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { COLORS, SIZES } from '../../constants/theme';

const BasicLineChart = () => {
  return (
    <>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        transparent={true}
        width={SIZES.width - 60} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //backgroundColor: "#e26a00",
          //backgroundGradientFrom: "#fb8c00",
          //backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => COLORS.primary,
          labelColor: () => COLORS.text,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff',
          },
          propsForBackgroundLines: {
            stroke: COLORS.text,
            strokeOpacity: 0.3,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
        }}
      />
    </>
  );
};

export default BasicLineChart;
