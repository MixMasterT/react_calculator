class RpnCalculator {
  constructor() {
    // this.operators = ['+', '-', '*', '/', '%', '±'];
    this.binaryOps = {
        '+': (v1, v2) => v1 + v2,
        '-': (v1, v2) => v1 - v2,
        '*': (v1, v2) => v1 * v2,
        '/': (v1, v2) => v1 / v2
    };
    this.unaryOps = {
      '%': (v) => v * 100,
      '±': (v) => v * -1
    }
    this.opStack = [];
    this.valStack = [];
  }

  insert(str) {
    const unOps = Object.keys(this.unaryOps);
    const binOps = Object.keys(this.binaryOps);
    if (unOps.indexOf(str) > -1) {
      const value = this.eval();
      this.valStack.push(this.unaryOps[str](value));
    } else if (binOps.indexOf(str) > -1) {
      while (binOps.indexOf(str) < 2 &&
            this.opStack.length > 0 &&
          binOps.indexOf(this.opStack[this.opStack.length - 1]) > 1) {
        this.valStack.push(this.evalStep(this.opStack.pop()));
      }
      this.opStack.push(str);

    } else {
      this.valStack.push(parseFloat(str));
    }
  }

  eval() {
    while (this.opStack.length > 0) {
      this.valStack.push(this.evalStep(this.opStack.pop()));
    }
    return this.valStack.pop();
  }

  evalStep(str) {
    const val1 = this.valStack.pop();
    const val2 = this.valStack.pop();

    return this.binaryOps[str].apply(this, [val2, val1]);
  }

}

export default RpnCalculator;
