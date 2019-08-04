const chai = require('chai');
const {assert} = chai;
const cal = require('../src/cal');

describe('Calculadora', function(){
    describe('Suma', function(){
        it('Prueba que devuelva 3 cuando suma 1 + 2', function(done){
            const result = cal.add(1,2);
            assert.equal(result, 3, 'result es igual a 3');
            done();
        });

        it('Prueba que no devuelva 3 cuando suma 3 + 2', function(done){
            const result = cal.add(2,2);
            assert.notEqual(result, 3, 'result no es igual a 3');
            done();
        });
    });

    describe('Resta', function(){
        it.skip('Prueba que devuelva 3 cuando suma 1 + 2', function(done){
            const result = cal.add(1,2);
            assert.equal(result, 3, 'result es igual a 3');
            done();
        });

        it.skip('Prueba que no devuelva 3 cuando suma 3 + 2', function(done){
            const result = cal.add(2,2);
            assert.notEqual(result, 3, 'result no es igual a 3');
            done();
        });
    });
});