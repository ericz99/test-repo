import { getAllData, getOneData } from './services';
import { expect } from 'chai';

describe('Posts Service', () => {
    describe('#getAllPost()', () => {
        it('should return array of data', async () => {
            const data = await getAllData();
            // assert.isArray(data);
            expect(data).to.be.an('array');
        });
    });

    describe('#getOnePost()', () => {
        it('should return one post data', async () => {
            const data = await getOneData('1');
            expect(data).to.be.an('object');
        });
    });
});
