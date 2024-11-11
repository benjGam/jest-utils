import { Type } from './interfaces';

export class JestRunner {
  constructor(private readonly classToInvoke: Type) {}

  public run(
    functionToTest: Function,
    inputsAndOutputMap: Map<unknown, unknown>,
    logicToRunAfter: Function | undefined = undefined,
  ): void {}
}
