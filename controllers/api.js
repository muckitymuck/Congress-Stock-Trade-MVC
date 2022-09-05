const Api = require('../models/Api')
 
 module.exports = {
    //FINISH HERE
    //need new resource
    // refreshApi: async function connectAPI() {
    //     const response = await fetch('/Api');
    //     const stocks = await response.json()
    //     console.log(stocks)
    //     response.redirected('/todos')
    // }   
    // refreshApi: 
    //     fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/filemap.xml')
    //         .then((response) => response.text())
    //         .then((response) => {
    //         const parser = new DOMParser()
    //         const xml = parser.parseFromString(response, 'text/xml')
    //         const results = [].slice.call( xml.getElementsByTagName('Key') ).filter((key) => key.textContent.includes('.json'))
    //         const files = results.map(file => file.textContent.split('/')[1])
    //         console.log(response)
    //         return response;
    //     })
    // .catch((response) => {
    //   console.log(response)
    // })
    
    
    
    // async(req, res)=>{
    //     console.log(req.body.transactions)
 
    //         fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/filemap.xml')
    //         .then((response) => response.text())
    //         .then((response) => {
    //           const parser = new DOMParser()
    //           const xml = parser.parseFromString(response, 'text/xml')
    //           const results = [].slice.call( xml.getElementsByTagName('Key') ).filter((key) => key.textContent.includes('.json'))
    //           const files = results.map(file => file.textContent.split('/')[1])
    //         })
    //         .catch((response) => {
    //           console.log(response)
    //         })
    
    // }
 }