import request from 'supertest';
import { expect } from 'chai';

import { createApp } from '../server';

describe('Posts Controller Route', () => {
    // create server
    const { app } = createApp();

    describe('/posts route', () => {
        it('should return an array', (done) => {
            request(app)
                .get('/posts')
                .expect(200)
                .end((err, res) => {
                    if (err) throw err;
                    const { data } = res.body;
                    expect(data).to.be.an('array');
                    done();
                });
        });
    });

    describe('/posts/:id route', () => {
        it('should return an object', (done) => {
            request(app)
                .get('/posts/1')
                .expect(200)
                .end((err, res) => {
                    if (err) throw err;
                    const { post } = res.body;
                    expect(post).to.be.an('object');
                    done();
                });
        });
    });
});
