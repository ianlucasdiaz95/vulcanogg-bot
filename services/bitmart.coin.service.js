const axios = require('axios');

const ChartService = require('./chart.service');

const { getPercentageChange } = require('../utils/utils');

const moment = require('moment');


class BitmartCoinService{
  constructor () {

    this.chartService = new ChartService();

    this.klineStart = moment().subtract(1, 'day').unix();
    this.klineEnd = moment().unix();

  }

  async getKlines(id){

    try {
     
      let { data } = await axios.get('https://api-cloud.bitmart.com/spot/v1/symbols/kline?symbol='+id+'&from='+this.klineStart+'&to='+this.klineEnd+'&step=60');

      let klines = data.data.klines;

      let chartData = [];
      let chartLabels = [];

      klines.forEach(kline => {
          let timestamp = moment.unix(kline.timestamp).format('HH:mm');
          let price = kline.close;

          chartLabels.push(timestamp);
          chartData.push(price);
      });

      return { klines, chartData, chartLabels };
      
    } catch (error) {

      console.log(error);

    }

  }


  async getTicker(id){
    try {

      let { data } = await axios.get('https://api-cloud.bitmart.com/spot/v1/ticker?symbol='+id);

      return data.data;
      
    } catch (error) {
      console.log(error);
    }
    

    //return coin;
  };

  async parseCoinInfo(id){
    let {tickers} = await this.getTicker(id);
    let klines = await this.getKlines(id);
    let chart = await this.chartService.generateChart(klines.chartLabels, klines.chartData);
    
    let coin = tickers[0];
    let coinData;
   
    if(coin){
      
      coinData = {
        symbol: coin.symbol.toUpperCase(),
        price: coin.last_price.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        change_24: getPercentageChange(coin.open_24h, coin.last_price).toFixed(2),
        volume_24h:  coin.quote_volume_24h.toLocaleString('en-US'),
        high_24: coin.high_24h.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        low_24: coin.low_24h.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
      }
    }else{

      return false;

    }

    var parsedInfo = ` <b>$${coinData.symbol}</b>

Price: <b>$ ${coinData.price}</b>
High 24hs: <b>$ ${coinData.high_24}</b>
Low 24hs: <b>$ ${coinData.low_24}</b>
Variation 24hs: <b>${coinData.change_24}%</b>

<i>Powered by <a href="https://www.bitmart.com/">BitMart</a></i>
`

      return {parsedInfo, chart};

  }
}

module.exports = BitmartCoinService;