# Summary
Performs bitwise OR.

# Input Parameters
* [input:Value_1] (Integer) - First operand.
* [input:Value_2] (Integer) - Second operand.

# Output Values
* [output:Result] (Integer) - Result of bitwise OR of the two input values.

# Usage
In general programming, bitwise operations are most often used in
low level programming or when encoding/decoding binary data.
For Miliastra, a potential application is for compression of data.
If you have 10000 boolean states in your stage,
it may be more feasible and performant to have one list of 500 integer 20-bit-fields,
instead of using a list of 10 structures of a boolean list of length 1000.

# Example
In this example, we are performing bitwise OR of `26` and `19`.
Clearly, `26` is `11010` in binary. `19` is `10011` in binary.
So only the 3rd bit (representing 2^2) is 0 in both numbers.
Thus, the output is `11011` in binary, which is `27` in decimal.
```
   11010 (26 in decimal)
OR 10011 (19 in decimal)
---------
   11011 (27 in decimal)
```
[image:bitwise_or_example]

# Notes
* For negative input, Miliastra uses [https://en.wikipedia.org/wiki/Two%27s_complement:two's complement]
  to represent the value in binary.
  For example, `5 OR -1` is `-1`
  because `-1`'s binary representation is `11111111111111111111111111111111` (32 1's)
  in 32-bit integer with two's complement.
  We recommend that you avoid using negative integers in bitwise operations.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:bitwise_and]
* [node:xor_exclusive_or]

# Authors
* kokokokomi222