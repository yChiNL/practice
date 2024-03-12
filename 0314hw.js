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

