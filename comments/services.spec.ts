import { getAllData, getOneData } from './services';
import { expect } from 'chai';

describe('Comments Service', () => {
    describe('#getAllData()', () => {
        it('should return array of data', async () => {
            const data = await getAllData();
            expect(data).to.be.an('array');
        });
    });

    describe('#getOneData()', () => {
        it('should return one post data', async () => {
            const data = await getOneData('1');
            expect(data).to.be.an('object');
        });
    });
});
