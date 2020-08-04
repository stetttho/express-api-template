import { expect, server, BASE_URL, EXHIBITIONS_URL } from './setup';

describe('Exhibitions page test', () => {
  it('gets exhibitions url', done => {
    server
      .get(`${EXHIBITIONS_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.exhibitions).to.equal(
          "bla"
        );
        done();
      });
  });
});