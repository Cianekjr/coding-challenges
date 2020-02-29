const firstDuplicate = require('./index');
const assert = require('assert');
const describe = require('mocha').describe;
const it = require('mocha').it;

describe('#1', function() {
  it('should return 1 when the array is [1, 3, 4, 2, 1, 3, 7]', function() {
    assert.equal(firstDuplicate([1, 3, 4, 2, 1, 3, 7]), 1);
  });

  it('should return 3 when the array is [2, 1, 3, 5, 3, 2]', function() {
    assert.equal(firstDuplicate([2, 1, 3, 5, 3, 2]), 3);
  });

  it('should return 2 when the array is [1, 2, 2, 3, 3, 5]', function() {
    assert.equal(firstDuplicate([1, 2, 2, 3, 3, 5]), 2);
  });

  it('should return -1 when there is not duplicate', function() {
    assert.equal(firstDuplicate([2, 4, 3, 5, 1]), -1);
  });

  it('should return -1 when array is empty', function() {
    assert.equal(firstDuplicate([]), -1);
  });

  it('should return -1 when argument is not array', function() {
    assert.equal(firstDuplicate(''), -1);
  });
});
