# Summary
Performs division.

# Input Parameters
* [input:A] (Generic) - Dividend. Must be integer or floating point number.
* [input:B] (Generic) - Divisor. Must be integer or floating point number.

# Output Values
* [output:Result] (Generic) - Result of the division of the input values.

# Usage
Use this node to divide integers or floating point numbers.
If you need to divide a float with an integer,
use [node:data_type_conversion] to convert the integer to float.

Integer division is performed so that the result is rounded toward 0.
For example:

* `27 / 10` results in `2`.
* `27 / -10` results in `-2`.
* `-27 / 10` results in `-2`.
* `-27 / -10` results in `2`.

# Example
**TO BE ADDED**

# Notes
* Changing the type of [input:A], [input:B], or [output:Result]
  will change the type of the others to match it.
* If [input:B] is `0` (integer), this node returns `0`.
* If [input:B] is `0.0` (float), this node returns `0.0`.
* If [input:A] is `-2147483648` (smallest possible 32-bit integer) and [input:B] is `-1`,
  this node returns 0 because `2147483648` cannot be represented as a 32-bit integer.
* Miliastra uses 32-bit floating point number,
  so all the usual issues dealing with 32-bit floats are relevant.
  Repeated arithmetic operations can accumulate precision loss and result in unexpected result.

# Performance
This node took ~2 units to run on average (for either integer or float).

# See Also
* [node:multiplication]

# Authors
* kokokokomi222