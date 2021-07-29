const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

if(process.env.NODE_ENV === 'production') {
  
}
else {
  
}

class CoinService{
  constructor () {
    this.parseCoinInfo('arena-token');
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
        price: market_data.current_price.usd.toLocaleString('de-DE'),
        change_24: (Math.round(market_data.price_change_percentage_24h * 100) / 100).toLocaleString('de-DE'),
        total_supply: market_data.total_supply.toLocaleString('de-DE'),
        max_supply: market_data.max_supply ? market_data.max_supply.toLocaleString('de-DE') : '-',
        market_cap: market_data.fully_diluted_valuation.usd ? market_data.fully_diluted_valuation.usd.toLocaleString('de-DE') : '-',
        volume_24h:  market_data.total_volume.usd.toLocaleString('de-DE'),
        high_24: market_data.high_24h.usd.toLocaleString('de-DE'),
        low_24: market_data.low_24h.usd.toLocaleString('de-DE'),
      }
    }else{
      return false;
    }

    if(id == 'arena-token'){
      chartUrl = 'https://charts.bogged.finance/0x2A17Dc11a1828725cdB318E0036ACF12727d27a2'
    }else{
      chartUrl = 'https://charts.bogged.finance/0xedeCfB4801C04F3EB394b89397c6Aafa4ADDa15B';
    }

    var parsedInfo = `💎 PRECIO <b>${coinData.symbol}</b> 💎 

Precio: <b>$ ${coinData.price}</b>
High 24hs: <b>$ ${coinData.high_24}</b>
Low 24hs: <b>$ ${coinData.low_24}</b>
Variación 24hs: <b>${coinData.price}%</b>
Vol 24hs: <b>$ ${coinData.volume_24h}</b>
Market Cap: <b>$ ${coinData.market_cap}</b>
Max Supply: <b>$ ${coinData.max_supply}</b>
Total Supply: <b>$ ${coinData.total_supply}</b>

<a href="${chartUrl}">Podés ver el gráfico haciendo click acá ➡</a>
`

      return parsedInfo;

  }
}

module.exports = CoinService;


///set_message@Poocoin_Pricebot ⚔️ Querés el precio de PYRAM? Hace click en el link debajo <a href="https://charts.bogged.finance/0xedeCfB4801C04F3EB394b89397c6Aafa4ADDa15B">Ver precio PYRAM</a>