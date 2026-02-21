# Summary
Multiplies two numbers.

# Input Parameters
* [input:A] (Generic) - First number to multiply. Must be integer or floating point number.
* [input:B] (Generic) - Second number to multiply. Must be integer or floating point number.

# Output Values
* [output:Result] (Generic) - Result of multiplication of the two input values.

# Usage
Use this node to multiply two integers or two floating point number.
If you need to multiply an integer with a float,
use [node:data_type_conversion] to convert the integer to float.

# Example
**TO BE ADDED**

# Notes
* Changing the type of [input:A], [input:B], or [output:Result]
  will change the type of the others to match it.
* Miliastra uses 32-bit signed integer,
  so it can only represent integers between -2,147,483,648 and 2,147,483,647, inclusive of both ends.
  If the result of multiplication is greater than the maximum value representable by 32-bit integer,
  it will overflow and yield unexpected result.
  For example, if [input:A] is `50000` and [input:B] is `50000`, this node outputs `-1794967296`.
  It can also underflow if the result is too small.
* Miliastra uses 32-bit floating point number,
  so all the usual issues dealing with 32-bit floats are relevant.
  Multiplication is not associative.
  Repeated arithmetic operations can accumulate precision loss and result in unexpected result.

# Performance
This node took ~2 units to run on average (for either integer or float).

# See Also
* [node:division]

# Authors
* kokokokomi222
