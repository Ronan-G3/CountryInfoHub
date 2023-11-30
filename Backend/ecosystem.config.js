module.exports = {
    apps : [{
      name: 'backend',
      script: 'server.js',
      watch: true,
      env: {
        "NODE_ENV": "production",
        "API_BASE_URL": "https://restcountries.com/v3.1", // Your REST Countries API base URL
        "PORT": 3001 // Port the Node.js app will run on
      }
    }]
  };
  