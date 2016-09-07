import addNumber  from '../sum';

describe('adder ',()=>{
  it('should add ', ()=> {

    expect(addNumber(2,2)).toBe(4);
  });
});
