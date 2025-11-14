const axios = require('axios')

const axiosIt = async (url, method, data) => {
    const response = await axios({
        url,
        method,
        data
    })
    return response.data
};

const ping = async (url) => {
    try {
        const start = Date.now();
        await axios.head(url);
        const duration = Date.now() - start;
        return { success: true, duration, message: `Ping successful (${duration}ms)` };
    } catch (error) {
        return { success: false, error: error.message, message: 'Ping failed' };
    }
};


const exUrl = 'https://jsonplaceholder.typicode.com/posts'

// Test ping functionality
ping(exUrl)
    .then(result => {
        console.log('Ping result:', result);
        // If ping successful, fetch data
        if (result.success) {
            return axiosIt(exUrl, 'GET', {});
        }
    })
    .then(data => {
        if (data) {
            console.log('Data fetched successfully:', data.length, 'posts');
        }
    })
    .catch(error => {
        console.log('Error:', error);
    })