const axios = require('axios');

const data=['https://picsum.photos/id/1001/600/280', 
        'https://picsum.photos/id/1002/600/280', 
        'https://picsum.photos/id/1003/600/280']

axios.post('https://localhost:3000/api/PushUntagged', data).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
})