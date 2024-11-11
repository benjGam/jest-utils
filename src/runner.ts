import { InputsAndOutput, Type } from './interfaces';

export class JestRunner {
  constructor(private readonly classToInvoke: Type) {}

  public run(
    functionToTest: Function,
    inputsAndOutputCollection: Array<InputsAndOutput>,
  ): void {
    for (const inputAndOutput of inputsAndOutputCollection) {
      const [inputs, output] = [inputAndOutput.inputs, inputAndOutput.output];
      test(`[${functionToTest.name}] Should return '${output} for '${inputs}''`, () => {
        expect(this.classToInvoke[functionToTest.name](inputs))[
          typeof output === 'object' ? 'toEqual' : 'toBe'
        ](output);
      });
    }
  }

  private checkPrototypeOfInvokedFunction(functionToTest: Function) {
    const expectedFunctionPrototype: Function | undefined =
      this.classToInvoke[functionToTest.name];
    if (
      !expectedFunctionPrototype ||
      functionToTest !== expectedFunctionPrototype
    )
      throw new Error(
        `The prototype of tested function cannot be found in ${this.classToInvoke.name} class or do not correspond to defined one.`,
      );
  }
}
