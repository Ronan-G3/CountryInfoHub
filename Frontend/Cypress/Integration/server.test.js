const request = require('supertest');
const app = require('../app'); // Imports the Express app

describe('GET /api/countries/:countryName', () => {
  it('responds with json containing country data', done => {
    request(app)
      .get('/api/countries/France')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done); 
  });
});
