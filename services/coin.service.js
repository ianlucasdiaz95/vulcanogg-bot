const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const ChartService = require('./chart.service');

const { reduceChartDataHourly } = require('../utils/utils');

const moment = require('moment');
const { default: axios } = require('axios');

if(process.env.NODE_ENV === 'production') {
  
}
else {
  
}

class CoinService{
  constructor () {

    this.chartService = new ChartService();

    this.klineStart = moment().subtract(1, 'day').unix();
    this.klineEnd = moment().unix();
    
  }


  async getCoin(id){
    let { data } = await CoinGeckoClient.coins.fetch(id);
    let coin = data;
    return coin;
  };

  async getChartData(id){
    try {

      let { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=1h`);     

      return data;
      
    } catch (error) {
      console.log(error);
    }
    
  }

  async getKlines(id){

    try {
     
      let data  = await this.getChartData(id);

      let prices = reduceChartDataHourly(data.prices);

      let chartData = [];
      let chartLabels = [];

      prices.forEach(kline => {
          chartLabels.push(kline[0]);
          chartData.push(kline[1]);
      });

      return { prices, chartData, chartLabels };
      
    } catch (error) {

      console.log(error);

    }

  }

  async getChartImage(id){
    let klines = await this.getKlines(id);
    let chart = await this.chartService.generateChart(klines.chartLabels, klines.chartData);
    return chart;
  }

  async parseCoinInfo(id){
    let coin = await this.getCoin(id);
    
    let market_data = {};
    let coinData = {};

    if(coin){

      market_data = coin.market_data;

      coinData = {
        symbol: coin.symbol.toUpperCase(),
        price: market_data.current_price.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 4}),
        change_24: market_data.price_change_percentage_24h_in_currency.usd.toLocaleString('en-US'),
        change_24_icon: market_data.price_change_percentage_24h_in_currency.usd > 0 ? '🚀' : '🔻',
        total_supply: market_data.total_supply.toLocaleString('en-US', {style: 'currency', currency: 'USD' , minimumFractionDigits: 2}),
        max_supply: market_data.max_supply ? market_data.max_supply.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}) : '-',
        market_cap: market_data.fully_diluted_valuation.usd ? market_data.fully_diluted_valuation.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}) : '-',
        volume_24h:  market_data.total_volume.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        high_24: market_data.high_24h.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD' , minimumFractionDigits: 4}),
        low_24: market_data.low_24h.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD' , minimumFractionDigits: 4}),
      }

    }else{

      return false;

    }

    var parsedInfo = ` <b>$${coinData.symbol}</b>

Price: <b>$ ${coinData.price}</b>
High 24hs: <b>$ ${coinData.high_24}</b>
Low 24hs: <b>$ ${coinData.low_24}</b>
Variation 24hs: <b>${coinData.change_24}% ${coinData.change_24_icon}</b>
Market Cap: <b>${coinData.market_cap}</b>
Max Supply: <b>${coinData.max_supply}</b>
`

      return parsedInfo;

  }
}

module.exports = CoinService;