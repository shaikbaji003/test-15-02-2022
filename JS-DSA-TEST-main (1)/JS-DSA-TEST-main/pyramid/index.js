// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left and right side
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {}










mocha.setup("bdd");
const { assert } = chai;
console.log = sinon.spy();

describe("Pyramid", () => {
  it("pyramid() works", () => {
    pyramid(3);
    assert.equal(console.log.callCount, 3);
    assert.equal(console.log.getCall(0).args[0], "  #  ");
    assert.equal(console.log.getCall(1).args[0], " ### ");
    assert.equal(console.log.getCall(2).args[0], "#####");
  });
});

mocha.run();
