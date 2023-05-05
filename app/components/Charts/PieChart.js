import React from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import { PieChart } from 'react-native-chart-kit';

const BasicPieChart = () => {
  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: '#945fcb',
      legendFontColor: COLORS.text,
      legendFontSize: 12,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#f74587',
      legendFontColor: COLORS.text,
      legendFontSize: 12,
    },
    {
      name: 'Beijing',
      population: 5827612,
      color: '#dedef5',
      legendFontColor: COLORS.text,
      legendFontSize: 12,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#111111',
      legendFontColor: COLORS.text,
      legendFontSize: 12,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: '#6c2da7',
      legendFontColor: COLORS.text,
      legendFontSize: 12,
    },
  ];

  return (
    <>
      <PieChart
        data={data}
        width={SIZES.width - 60}
        height={200}
        chartConfig={{
          color: () => '#5384d7',
          labelColor: () => COLORS.text,
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'0'}
        center={[10, 6]}
      />
    </>
  );
};

export default BasicPieChart;
