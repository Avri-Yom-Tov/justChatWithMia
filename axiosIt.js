const axios = require('axios')

const axiosIt = async (url, method, data) => {
    const response = await axios({
        url,
        method,
        data
    })
    return response.data
};


const exUrl = 'https://jsonplaceholder.typicode.com/posts'

axiosIt(exUrl, 'GET', {})
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })