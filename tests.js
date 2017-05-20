const assert = require('chai').assert;
const boardFactory = require('./board');

describe('Board', () => {

    let board;
    
    beforeEach(() => {
      board = boardFactory();
      board.add('sub', ['A1']);      
      board.add('destroyer', ['A2','B2']);      
    });

  describe('shoot', () => {
    
    it('should return true if hit', () => {
      let result = board.shoot('A1');
      assert.isTrue(result);
    });

    it('should return false if not hit', () => {
      let result = board.shoot('C1');
      assert.isFalse(result);
    });
  });

  describe('won', () => {

    it('should be false if not complete', () => {
      let result = board.won();
      assert.isFalse(result);
    });

    it('should be true if complete', () => {
      board.shoot('A1');
      board.shoot('A2');
      board.shoot('B2');
      let result = board.won();
      assert.isTrue(result);
    });
  })
})

