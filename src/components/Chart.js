/**
 * Created by Eric Henziger on 2016-12-30.
 * Builds a spider chart that visualizes the percentage knowledge of each math topic.
 */

import React, { PropTypes } from 'react';
import coveragePercentage from '../helpers/coveragePercentage';

const Chart = ({ coverage }) => {

    const ReactHighcharts = require('react-highcharts');

    // Use this to get the spider chart functionality.
    const HighchartsMore = require('highcharts-more');
    HighchartsMore(ReactHighcharts.Highcharts);

    const keys = ['discrete', 'linalg', 'calculus', 'multicalc', 'statistics', 'diffeq'];
    const percentages = [];
    for (let i = 0; i < keys.length; i++) {
        if (coverage.hasOwnProperty(keys[i]))
            percentages.push(coveragePercentage(coverage[keys[i]]));
    }

    const chart_config = {
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Knowledge coverage',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Discrete Mathematics', 'Linear Algebra', 'Calculus', 'Multivariable Calculus',
                'Statistics and Probability', 'Differential Equations'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 100
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Knowledge percentage',
            data: percentages,
            pointPlacement: 'on'
        }]
    };

    return (<ReactHighcharts config={chart_config}/>);
};

Chart.propTypes = {
    coverage: PropTypes.object.isRequired,
};

export default Chart;
