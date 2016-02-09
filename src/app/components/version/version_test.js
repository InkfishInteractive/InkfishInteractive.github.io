'use strict';

describe('inkfish.version module', function() {
  beforeEach(module('inkfish.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.0.1');
    }));
  });
});
