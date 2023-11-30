module.exports = {
    apps: [{
      name: 'backend',
      script: './server.js',
      env: {
        NODE_ENV: 'production',
        API_BASE_URL: 'https://restcountries.com/v3.1', 
        PORT: 3001,
      }
    }]
  };
  