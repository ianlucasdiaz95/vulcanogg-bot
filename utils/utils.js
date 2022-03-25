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

module.exports = {
    stripAndReplaceUrls
};