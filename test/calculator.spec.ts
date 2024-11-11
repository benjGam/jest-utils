import { Calculator } from '../src/calculator';

test(`Should return 10 for x = 5 & y = 5`, () => {
  expect(Calculator.add(5, 5));
});

test(`Shoud return 9 for base = 10 & toSub = [1]`, () => {
  expect(Calculator.sub(10, [1])).toBe(9);
});
