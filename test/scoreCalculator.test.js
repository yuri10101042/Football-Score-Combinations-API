const { expect } = require('chai');
const { countCombinations } = require('../src/scoreCalculator');

//Realiza testes para a função countCombinations (que calcula quantas formas de pontuar possíveis para uma quantidade de pontos (points))
describe('countCombinations', () => {
    it('Deve retornr 4 combinações para pontuação 15', () => {
        expect(countCombinations(15)).to.equal(4);
    });

    it('Deve retornr 1 combinação para pontuação 3', () => {
        expect(countCombinations(3)).to.equal(1);
    });

    it('Deve retornr 0 combinações para pontuação 5', () => {
        expect(countCombinations(5)).to.equal(0);
    });

    it('Deve retornr 2 combinações para pontuação 13', () => {
        expect(countCombinations(13)).to.equal(2);
    });

    it('Deve retornr 2 combinações para pontuação 6', () => {
        expect(countCombinations(6)).to.equal(2);
    });
});