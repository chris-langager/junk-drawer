'use strict';
const chai           = require('chai').use(require('sinon-chai'));
const chaiAsPromised = require('chai-as-promised');
const sinonStubPromises = require('sinon-promises');
const expect         = chai.expect;
const sinon          = require('sinon');
const JD = require('../src/index');


chai.use(chaiAsPromised);
sinonStubPromises(sinon);

describe('JunkDrawer', function () {
  describe('#is200', () => {
    it('should return false for anything not an int', () => {
      expect(JD.is200(undefined)).to.be.false;
      expect(JD.is200(null)).to.be.false;
      expect(JD.is200(NaN)).to.be.false;
      expect(JD.is200('123')).to.be.false;
      expect(JD.is200(4.5)).to.be.false;
      expect(JD.is200({ a: 123 })).to.be.false;
      expect(JD.is200([123])).to.be.false;
    });

    it('should return false for anything outside of the 200 range', () => {
      expect(JD.is200(499)).to.be.false;
      expect(JD.is200(600)).to.be.false;
      expect(JD.is200(50)).to.be.false;
      expect(JD.is200(1000)).to.be.false;
      expect(JD.is200(500.5)).to.be.false;
    });

    it('should return true for anything in 200-299', () => {
      expect(JD.is200(200)).to.be.true;
      expect(JD.is200(250)).to.be.true;
      expect(JD.is200(201)).to.be.true;
      expect(JD.is200(299)).to.be.true;
    });
  });

  describe('#is400', () => {
    it('should return false for anything not an int', () => {
      expect(JD.is400(undefined)).to.be.false;
      expect(JD.is400(null)).to.be.false;
      expect(JD.is400(NaN)).to.be.false;
      expect(JD.is400('123')).to.be.false;
      expect(JD.is400(4.5)).to.be.false;
      expect(JD.is400({ a: 123 })).to.be.false;
      expect(JD.is400([123])).to.be.false;
    });

    it('should return false for anything outside of the 400 range', () => {
      expect(JD.is400(299)).to.be.false;
      expect(JD.is400(600)).to.be.false;
      expect(JD.is400(50)).to.be.false;
      expect(JD.is400(1000)).to.be.false;
      expect(JD.is400(500.5)).to.be.false;
    });

    it('should return true for anything in 400-499', () => {
      expect(JD.is400(400)).to.be.true;
      expect(JD.is400(450)).to.be.true;
      expect(JD.is400(401)).to.be.true;
      expect(JD.is400(499)).to.be.true;
    });
  });

  describe('#is500', () => {
    it('should return false for anything not an int', () => {
      expect(JD.is500(undefined)).to.be.false;
      expect(JD.is500(null)).to.be.false;
      expect(JD.is500(NaN)).to.be.false;
      expect(JD.is500('123')).to.be.false;
      expect(JD.is500(4.5)).to.be.false;
      expect(JD.is500({ a: 123 })).to.be.false;
      expect(JD.is500([123])).to.be.false;
    });

    it('should return false for anything outside of the 500 range', () => {
      expect(JD.is500(499)).to.be.false;
      expect(JD.is500(600)).to.be.false;
      expect(JD.is500(50)).to.be.false;
      expect(JD.is500(1000)).to.be.false;
      expect(JD.is500(500.5)).to.be.false;
    });

    it('should return true for anything in 500-599', () => {
      expect(JD.is500(500)).to.be.true;
      expect(JD.is500(550)).to.be.true;
      expect(JD.is500(501)).to.be.true;
      expect(JD.is500(599)).to.be.true;
    });
  });

  describe('#parseInt', () => {
    it('should throw an error if the param is not a string', () => {
      expect(() => {
        JD.parseInt(1);
      }).to.throw('expects a string');
      expect(() => {
        JD.parseInt({ a: '1' });
      }).to.throw('expects a string');
      expect(() => {
        JD.parseInt(['1']);
      }).to.throw('expects a string');
      expect(() => {
        JD.parseInt(undefined);
      }).to.throw('expects a string');
      expect(() => {
        JD.parseInt(null);
      }).to.throw('expects a string');
      expect(() => {
        JD.parseInt(NaN);
      }).to.throw('expects a string');
      expect(() => {
        JD.parseInt();
      }).to.throw('expects a string');
    });

    it('should throw an error if the string value is not an int', () => {
      expect(() => {
        JD.parseInt('1.1');
      }).to.throw('cannot parse');
      expect(() => {
        JD.parseInt('1xxx');
      }).to.throw('cannot parse');
      expect(() => {
        JD.parseInt('0xFF');
      }).to.throw('cannot parse');
    });

    it('should parse strings that are actually ints', () => {
      expect(JD.parseInt('100')).to.equal(100);
      expect(JD.parseInt('42342')).to.equal(42342);
      expect(JD.parseInt('1')).to.equal(1);
    });

  });

});
