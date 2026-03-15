# Summary
Performs bitwise right shift.

# Input Parameters
* [input:Value] (Integer) - Value to shift.
* [input:Right_Shift_Count] (Integer) - Number of bits to shift by.

# Output Values
* [output:Result] (Integer) - Result of bitwise left shift.

# Usage
In general programming, bitwise operations are most often used in
low level programming or when encoding/decoding binary data.
For Miliastra, a potential application is for compression of data.
If you have 10000 boolean states in your stage,
it may be more feasible and performant to have one list of 500 integer 20-bit-fields,
instead of using a list of 10 structures of a boolean list of length 1000.

# Example
In this example, we are performing bitwise right shift of `29` by `2`.
Clearly, `29` is `11101` in binary.
So when it is right shifted by 2, the result is `111` in binary, which is `7` in decimal.
[image:right_shift_operation_example]

# Notes
* If [input:Right_Shift_Count] is negative,
  this node raises "Bitwise shift count is less than 0" error,
  and returns [input:Value] as the output.
* For negative [input:Value], Miliastra uses [https://en.wikipedia.org/wiki/Two%27s_complement:two's complement]
  to represent the value in binary.
  For example, `-1 >> 30` is `3`
  because `-1`'s binary representation is `11111111111111111111111111111111` (32 1's)
  in 32-bit integer with two's complement.
  We recommend that you avoid using negative integers in bitwise operations.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:left_shift_operation]

# Authors
* kokokokomi222
