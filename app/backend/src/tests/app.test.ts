import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('App base tests', () => {
  it('Server was correctly built and started', async () => {
    let chaiHttpResponse: Response;
    const PORT = 3000;
    const app = new App();

    app.start(PORT);

    chaiHttpResponse = await chai.request(`http://localhost:${PORT}`).get('/');

    expect(chaiHttpResponse.status).to.be.equal(200);
  });
});