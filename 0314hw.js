/* FETCH */
const fetch = require('node-fetch');  
//get
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(console.log);

//post
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
    })
})
.then(res => res.json())
.then(console.log);

//put&patch
/* updating title of product with id 1 */
fetch('https://dummyjson.com/products/1', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'iPhone Galaxy +1'
    })
})
.then(res => res.json())
.then(console.log);

//delete
fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
})
.then(res => res.json())
.then(console.log);

/*AXIOS*/
const axios = require('axios');
//get
axios.get('https://dummyjson.com/products/1')
    .then( (response) => console.log(response.data))
    .catch( (error) => console.log(error))
	.then(function () {//選擇性的元件，無論 request 成功與否，它都將被執行
	});

//post
axios.post('https://dummyjson.com/products/add',{
    title: 'BMW Pencil'
})
    .then( (response) => console.log(response.data))
    .catch( (error) => console.log(error))

/*Promise&Async/Await*/
//原promise
const myName = function() {
    return new Promise(function(resolve, reject) {
            setTimeout(() => {
            resolve('Ray');
        }, 300);
    })
}

myName()
    .then((res) => console.log('成功：'+ res))
    .catch((error) => console.log('失敗：' + error));

/* 依照題目內容可依序化簡成以下 */
//async
const myName2 = async () => 'Ray';
myName2().then((res) => console.log(res)); 
//OR 
const myName3 = async () => 'Ray';
myName3().then(console.log);

//await
const myName4 = async () => 'Ray';
console.log(await myName4());
//OR
const myName5 = async () => 'Ray';
(async () => { console.log(await myName5()); })();
