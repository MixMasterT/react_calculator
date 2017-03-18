class RpnCalculator {
  constructor() {
    this.operators = ['+','-','*','/'];
    this.ops = {
      '+': (v1, v2) => v1 + v2,
      '-': (v1, v2) => v1 - v2,
      '*': (v1, v2) => v1 * v2,
      '/': (v1, v2) => v1 / v2,
    }
    this.opStack = [];
    this.valStack = [];
  }

  insert(str) {
    if (this.operators.indexOf(str) > -1) {
      const lowOrds = ['+', '-'];
      while (lowOrds.indexOf(str) > -1 &&
            this.opStack.length > 0 &&
          lowOrds.indexOf(this.opStack[this.opStack.length - 1]) == -1) {
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

    return this.ops[str].apply(this, [val2, val1]);
  }

}

// r = new RpnCalculator();
// const test = ['3', '/', '4', '+', '2', '*', '5'];
// test.forEach((t) => {
//   r.insert(t);
// })
// console.log(r.opStack);
// console.log(r.valStack);
// console.log((test.concat(' = ')).join(' '), r.eval());
export default RpnCalculator;
