import { Type } from './interfaces';

export class JestRunner {
  constructor(private readonly classToInvoke: Type) {}

  public run(
    functionToTest: Function,
    inputsAndOutputMap: Map<unknown, unknown>,
    logicToRunAfter: Function | undefined = undefined,
  ): void {}

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
