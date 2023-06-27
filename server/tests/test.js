const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');
const server = app.listen(3000);  // start the server

describe('GET /test', () => {
  it('should return "Test route"', (done) => {
    request(server)
      .get('/test')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Test route');
        done();
      });
  });
  
  after(done => {
    server.close(done);
  });
});
