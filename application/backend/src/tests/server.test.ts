import chai from 'chai';
import chaiHttp from 'chai-http';
import { App } from '../app';
import { describe, it } from 'node:test';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Server Tests', () => {
  it('should return a 200 status code', (done) => {
    chai
      .request(App)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});