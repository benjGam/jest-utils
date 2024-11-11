import { Calculator } from '../src/calculator';
import { JestRunner } from '../src/runner';

const runner = new JestRunner(Calculator);

function add() {}

describe('Test runner', () => {
  try {
    runner.run(add, [
      {
        inputs: [[1, 2]],
        output: 5,
      },
    ]);
  } catch {}
});
