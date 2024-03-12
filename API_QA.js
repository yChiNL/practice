const axios = require('axios');

const test=axios.create({
    baseURL: 'https://randomuser.me'
});
test.get('/api/',{
    params: {
        gender: 'female',
        nat: 'us'
    }
})
.then((response)=>{
    console.log(response.data);
    console.log(response.config);
    console.log(response.config.url)
});


/* 
理想output應該=https://randomuser.me/api/?gender=female&nat=us
why confing.url=/api/?
why config中data=undefined?
*/

