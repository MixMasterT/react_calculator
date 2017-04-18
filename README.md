# React Calculator

![example calculation(images/example_calculation.gif)

## RPN Type Calculation

This calculator is run with two stacks, one for operations and one for
calculation arguments. This architecture takes care of order-of-operations
with minimal effort.

## Future Developments

Currently unary operators pop everything off of both stacks, and then
executes. This means running a unary operator is equivalent to hitting the
equals sign, and then running it. In the future, I plan to factor that
out to allow unary operators to be used inline on a single argument.

Also, I plan to add additional calculations such as nth-root and logarithms.
