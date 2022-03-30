const axios = require('axios');

const moment = require('moment');


class ChartService{
  constructor () {

  }

  async generateChart(labels, dataset){
    try {

      let chartConfig = {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: '$VULC',
              backgroundColor: 'rgba(229, 98, 14, 0.1)',
              borderColor: 'rgb(229, 98, 14)',
              data: dataset,
              fill: true,
              borderWidth: 1,
              pointRadius: 1,
              
            }
          ],
        },
        options: {
          title: {
            display: false,
            text: '$VULC Price Chart',
          },
          scales: {
              yAxes: [{
                  display: true,
                  ticks: {
                      fontSize: 8,
                      beginAtZero: false,   // minimum value will be 0.
                      steps: dataset.length,
                  }
              }],
              xAxes: [{
                  display: true,
                  ticks: {
                      fontSize: 8,
                  }
              }]
          }
        },
      }

      let chart =  await axios.post('https://quickchart.io/chart/create', {
        chart:chartConfig, 
        width: 320, 
        height: 200, 
        devicePixelRatio: 1.0, 
        backgroundColor: 'rgb(0,0,0)',

      });

      return chart.data;

    } catch (error) {
      console.log(error);
    }
  
  };

}

module.exports = ChartService;