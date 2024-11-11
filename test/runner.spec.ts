import { Calculator } from '../src/calculator';
import { JestRunner } from '../src/runner';

const runner = new JestRunner(Calculator);

function add() {}

test('Just one test to be pleasant with Jest.', () =>
  expect('test').toBe('test'));

try {
  runner.run(add, [
    {
      inputs: [[1, 2]],
      output: 5,
    },
  ]);
} catch {
  console.log('The runner has throw correctly.');
}
