const axios = require('axios');

const connectAPI = () => 
    axios.get(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json`)
    .then(response => {
        //console.log(response.data.url);
        console.log(response.data)

        return response.data
    })
    .catch(error => {
        console.log(error);
    });

module.exports = connectAPI