const axios = require('axios');
axios.get('https://randomuser.me/api/',{
    //URL参數放在params屬性裏面
    params: {
        gender: 'female',
        nat: 'us'
    }
})
.then((response) => {
    console.log(response.data)
    console.log(response.config.url)
})