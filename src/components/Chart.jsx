/**
 * Builds a spider chart that visualizes the percentage knowledge of each math topic.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import { coveragePercentage } from '../helpers';

function Chart({ coverage }) {
  const keys = [
    'discrete',
    'linalg',
    'calculus',
    'multicalc',
    'statistics',
    'diffeq',
  ];
  const percentages = [];
  for (let i = 0; i < keys.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(coverage, keys[i]))
      percentages.push(coveragePercentage(coverage[keys[i]]));
  }

  // Use this to get the spider chart functionality.
  HighchartsMore(Highcharts);

  const options = {
    chart: {
      polar: true,
    },

    title: {
      text: 'Knowledge coverage',
      x: -80,
    },

    pane: {
      size: '80%',
    },

    xAxis: {
      categories: [
        'Discrete Mathematics',
        'Linear Algebra',
        'Calculus',
        'Multivariable Calculus',
        'Statistics and Probability',
        'Differential Equations',
      ],
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      max: 100,
    },

    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>',
    },

    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 70,
      layout: 'vertical',
    },

    series: [
      {
        name: 'Knowledge percentage',
        data: percentages,
        pointPlacement: 'on',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

Chart.propTypes = {
  coverage: PropTypes.shape({
    calculus: PropTypes.arrayOf(PropTypes.number),
    diffeq: PropTypes.arrayOf(PropTypes.number),
    discrete: PropTypes.arrayOf(PropTypes.number),
    linalg: PropTypes.arrayOf(PropTypes.number),
    multicalc: PropTypes.arrayOf(PropTypes.number),
    statistics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default Chart;
