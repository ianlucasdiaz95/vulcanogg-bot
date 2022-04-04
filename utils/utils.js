const moment = require('moment');

function stripAndReplaceUrls(text, urls) {
    let textUrls = text.match(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g);


    for(const textUrl of textUrls){
        if(urls != undefined){
                
            for(const url of urls){
                if(textUrl == url.url){
                    console.log(textUrl + ' ' + url + ' matches');
                    text = text.replace(textUrl, url.display_url);
                    console.log(text);
                }else{
                    console.log( url,' does not match,erase');
                    text = text.replace(textUrl, '');
                    console.log(text);
                }
            }

        }

    }

    return text;
}

function getPercentageChange(oldNumber, newNumber){
    var decreaseValue = oldNumber - newNumber;

    return (decreaseValue / oldNumber) * 100;
}

function reduceChartDataHourly(data){
    let reducedDates = [];
    let currentHour = -1;
    let lastHour = -1;
    let index = 0; 
    
    for (const element of data) {
        let hour = moment(element[0]).format('HH');
        let date = moment(element[0]).set({minutes: 0}).format('HH:mm');
        let price = element[1];

        if(hour == lastHour){
            reducedDates[index] = [date, price];
        }

        if(lastHour != currentHour){
            reducedDates.push([date, price]);
            currentHour = hour;
            index++;
        }

        lastHour = hour;
    }

    return reducedDates;
}

module.exports = {
    stripAndReplaceUrls,
    getPercentageChange,
    reduceChartDataHourly
};