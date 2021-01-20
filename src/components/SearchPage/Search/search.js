require('dotenv').config();
const { google } = require('googleapis');

google.youtube('v3').search.list({
    key: process.env.REACT_APP_YOUTUBE_KEY,
    part: 'snippet',
    q: 'vivaldi',
    maxResults: 15
}).then((response) => {
    const { data } = response;
    data.items.forEach((item) => {
        console.log(`Title: ${item.snippet.title}`);
    })
}).catch((err) => console.log(err));