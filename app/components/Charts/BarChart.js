import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { COLORS, SIZES } from '../../constants/theme';

const BasicBarChart = (props) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <>
      <BarChart
        data={data}
        width={SIZES.width - 60}
        height={220}
        yAxisLabel="$"
        fromZero={true}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: COLORS.white,
          backgroundGradientTo: COLORS.white,
          fillShadowGradientFrom: '#5384d7',
          fillShadowGradientFromOpacity: 0.35,
          fillShadowGradientTo: '#5384d7',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => '#5384d7',
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
        verticalLabelRotation={0}
      />
    </>
  );
};

export default BasicBarChart;
