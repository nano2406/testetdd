const chai = require('chai');
const total = require('../aplicacao/pagamento');
const expect = chai.expect;
const pagamentoParcela = total.pagamentoParcela
describe('pagamentoPa()', () => {

    it('paga-se 5% de juros até 30 dias de atraso', () => {
        expect(pagamentoParcela(1000, 30)).to.equal(1050);

        
    });
    it('paga-se 10% de juros até 60 dias de atraso', () => {
        expect(pagamentoParcela(1000, 60)).to.equal(1100);
    });
    it('paga-se 15% de juros até 90 dias de atraso', () => {
        expect(pagamentoParcela(1000, 90)).to.equal(1150);
    });

});