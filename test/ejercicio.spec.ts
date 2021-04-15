import 'mocha';
import {expect} from 'chai';
import {Cola} from '../src/sin_namespace';

describe('Pruebas Cola', () => {
    
    let cola1 = new Cola(10); 
    it("Se crea correctamente el objeto cola", () => {
        expect(cola1).to.exist;
        expect(cola1).to.be.an.instanceOf(Cola);
    });
    it("Método push y getsize", () => {
        expect(cola1.getSize()).to.be.equal(0);
        cola1.push(10);
        cola1.push(20);
        expect(cola1.getSize()).to.be.equal(2);
        cola1.pop();
        cola1.pop();
    });
    it("Método pop y getsize", () => {
        cola1.push(10);
        cola1.push(20);
        expect(cola1.getSize()).to.be.equal(2);
        cola1.pop();
        expect(cola1.getSize()).to.be.equal(1);
        cola1.pop();
        expect(cola1.getSize()).to.be.equal(0);
    });
    it("Método pseek", () => {
        cola1.push(10);
        cola1.push(20);
        cola1.push(30);
        expect(cola1.pseek()).to.be.equal(10);
        cola1.pop();
        expect(cola1.pseek()).to.be.equal(20);
        cola1.pop();
        cola1.pop();
    });
    it("Método print", () => {
        cola1.push(10);
        cola1.push(20);
        cola1.push(30);
        expect(cola1.print()).to.be.equal("10, 20, 30, , , , , , , ");
        cola1.pop();
        expect(cola1.print()).to.be.equal("20, 30, , , , , , , , ");
    });

});
