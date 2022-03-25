const { ETwitterStreamEvent, TweetStream, TwitterApi, ETwitterApiError } = require('twitter-api-v2');

class TwitterService {
    constructor() {
        this.client = new TwitterApi({ 
            appKey: 'pWlschgb6McNHdjYwucYcVnpQ', 
            appSecret: 'MuVwD7EnCVwi5XyiAWznbNbGe2y88om1ZPJsKyOF9FBPWhtcjy',
            accessToken: '1448389507250888708-rICsuIkriv6VR0FO3jQqZmPTizUMyg',
            accessSecret: 'lzXPzEO5wmvwWyb7Ihh2dLLTazIZJxLOo6SdkJqiGdFp4', });

        //this.getUser();

        //this.getStream();
    }

    async getUser() {
        const response = await this.client.currentUser();

        //console.log(response);

    }

    async getStream() {
        try {
            return this.client.v1.filterStream({
                // See FilterStreamParams interface.
                follow: ['1448389507250888708'],
            });
        } catch (error) {
            console.log(error);            
        }
       
    }
}

module.exports = TwitterService;