/**
 * TestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BitpesaSdk);
  }
}(this, function(expect, BitpesaSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BitpesaSdk.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('createDescribedThing', function() {
      it('should call createDescribedThing successfully', function(done) {
        //uncomment below and update the code to test createDescribedThing
        //instance.createDescribedThing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createThing', function() {
      it('should call createThing successfully', function(done) {
        //uncomment below and update the code to test createThing
        //instance.createThing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDescribedThing', function() {
      it('should call deleteDescribedThing successfully', function(done) {
        //uncomment below and update the code to test deleteDescribedThing
        //instance.deleteDescribedThing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteThing', function() {
      it('should call deleteThing successfully', function(done) {
        //uncomment below and update the code to test deleteThing
        //instance.deleteThing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDescribedThing', function() {
      it('should call getDescribedThing successfully', function(done) {
        //uncomment below and update the code to test getDescribedThing
        //instance.getDescribedThing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDescribedThings', function() {
      it('should call getDescribedThings successfully', function(done) {
        //uncomment below and update the code to test getDescribedThings
        //instance.getDescribedThings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getThing', function() {
      it('should call getThing successfully', function(done) {
        //uncomment below and update the code to test getThing
        //instance.getThing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getThings', function() {
      it('should call getThings successfully', function(done) {
        //uncomment below and update the code to test getThings
        //instance.getThings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDescribedThing', function() {
      it('should call updateDescribedThing successfully', function(done) {
        //uncomment below and update the code to test updateDescribedThing
        //instance.updateDescribedThing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateThing', function() {
      it('should call updateThing successfully', function(done) {
        //uncomment below and update the code to test updateThing
        //instance.updateThing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));