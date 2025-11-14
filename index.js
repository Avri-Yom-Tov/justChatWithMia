// Example usage of Axios HTTP client
const axios = require('axios');

// Verify Axios is properly installed
console.log('✓ Axios is successfully installed!');
console.log('Version:', require('axios/package.json').version);
console.log('\nAvailable methods:');
console.log('- axios.get()');
console.log('- axios.post()');
console.log('- axios.put()');
console.log('- axios.delete()');
console.log('- axios.patch()');
console.log('- axios.create()');

// Example configuration
const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

console.log('\n✓ Axios instance created successfully');

module.exports = { axios, apiClient };
