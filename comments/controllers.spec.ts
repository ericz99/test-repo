import request from 'supertest';
import { expect } from 'chai';

import { createApp } from '../server';

describe('Comments Controller Route', () => {
    // beforeEach(() => {

    // });

    before(() => {
        // connect db
        // create server
    });

    after(() => {
        // closing port
    });

    // create server
    const { app } = createApp();

    it('should return an array', (done) => {
        request(app)
            .get('/comments')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                const { data } = res.body;
                expect(data).to.be.an('array');
                done();
            });
    });

    it('should return an object', (done) => {
        request(app)
            .get('/comments/1')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                const { post } = res.body;
                expect(post).to.be.an('object');
                done();
            });
    });
});
