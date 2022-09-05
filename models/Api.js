// document.querySelector('tableButton').addEventListener('click',getData)
// function getData() {
//     let input = document.querySelector("input").value  //Input box
//     let select = document.querySelector("select").value  //Drop Down Menu
    // fetch(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json`)
    //     .then(res => res.json()) // parse response as JSON
    //     .then(data => {

    //         let filtered = ''//Init filtered string
    //         if (input.length <= 3 && select === ""){ //return transactions from a Disctrict(via input box) or from a State(via Dropdown)
    //             document.getElementById('data').innerHTML = "No Transactions.  Please Enter a District or State."
    //         }  if (input.length <= 3) {
    //             filtered = data.filter(a => a.district.slice(0,2) == select)  
    //         } else{
    //             filtered = data.filter(a => a.district.slice(0,2) == input.slice(0,2))
    //         }


    //         var temp = "";
    //         if (filtered.length > 0) {//post relevant information to the Table area
    //             var temp = "";
    //             filtered.forEach((itemData) => {               
    //                 temp += "<tr>";
    //                 temp += "<td>" + itemData.disclosure_year + "</td>";
    //                 temp += "<td>" + itemData.transaction_date + "</td>";
    //                 temp += "<td>" + itemData.district + "</td>";
    //                 temp += "<td>" + itemData.representative + "</td>";
    //                 temp += "<td>" + itemData.ticker + "</td>";
    //                 temp += "<td>" + itemData.amount + "</td>";
    //                 temp += "<td>" + itemData.asset_description + "</td></tr>";
    //             });
    //             document.getElementById('data').innerHTML = temp;
                
    //         }

    //     })
    //     .catch(err => {
    //         console.log(`error ${err}`)
    // });
//}

const axios = require('axios');

const connectAPI = () => {

    axios.get(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }) 
            console.log(response.data)

        .catch(error => {
            console.log(error);
        })
}
module.exports = connectAPI