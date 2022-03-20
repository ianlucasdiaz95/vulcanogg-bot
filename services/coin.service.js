const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

if(process.env.NODE_ENV === 'production') {
  
}
else {
  
}

class CoinService{
  constructor () {
    
    
  }


  async getCoin(id){
    let { data } = await CoinGeckoClient.coins.fetch(id, {});
    let coin = data;
    return coin;
  };

  async parseCoinInfo(id){
    let coin = await this.getCoin(id);
    let market_data = {};
    let coinData = {};
    let chartUrl = '';
    if(coin){
      market_data = coin.market_data;
      coinData = {
        symbol: coin.symbol.toUpperCase(),
        price: market_data.current_price.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        change_24: market_data.price_change_percentage_24h_in_currency.usd.toLocaleString('en-US'),
        total_supply: market_data.total_supply.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        max_supply: market_data.max_supply ? market_data.max_supply.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) : '-',
        market_cap: market_data.fully_diluted_valuation.usd ? market_data.fully_diluted_valuation.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) : '-',
        volume_24h:  market_data.total_volume.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        high_24: market_data.high_24h.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        low_24: market_data.low_24h.usd.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
      }
    }else{
      return false;
    }

    chartUrl = 'https://charts.bogged.finance';

    var parsedInfo = ` <b>$${coinData.symbol}</b>

Price: <b>$ ${coinData.price}</b>
High 24hs: <b>$ ${coinData.high_24}</b>
Low 24hs: <b>$ ${coinData.low_24}</b>
Variation 24hs: <b>${coinData.change_24}%</b>
`

      return parsedInfo;

  }
}

module.exports = CoinService;