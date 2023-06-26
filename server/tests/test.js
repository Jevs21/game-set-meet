const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

describe('GET /test', () => {
  it('should return "Test route"', (done) => {
    request(app)
      .get('/test')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Test route');
        done();
      });
  });
});
