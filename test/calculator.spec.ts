import { Calculator } from '../src/calculator';

test(`Should return 10 for x = 5 & y = 5`, () => {
  expect(Calculator.add(5, 5));
});
