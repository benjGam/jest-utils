export class Calculator {
  public static add(x: number, y: number) {
    return x + y;
  }

  public static sub(base: number, toSub: number[]) {
    return toSub.reduce((p, c) => p - c, base);
  }
}
