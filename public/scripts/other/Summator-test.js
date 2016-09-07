import Summator from '../Summator';

describe('Summator ', () => {

  it('add two numbers ', () => {
    var s = new Summator();
    var res = s.addTwo(2, 4);
    expect(res).toBe(6);
  });
});
