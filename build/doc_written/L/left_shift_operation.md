# Summary
Performs bitwise left shift.

# Input Parameters
* [input:Value] (Integer) - Value to shift.
* [input:Left_Shift_Count] (Integer) - Number of bits to shift by.

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
In this example, we are performing bitwise left shift of `19` by `2`.
Clearly, `19` is `10011` in binary.
So when it is left shifted by 2, the result is `1001100` in binary, which is `76` in decimal.
[image:left_shift_operation_example]

# Notes
* If [input:Left_Shift_Count] is negative,
  this node raises "Bitwise shift count is less than 0" error,
  and returns [input:Value] as the output.
* Miliastra uses 32-bit signed integer,
  so it can only represent integers between -2,147,483,648 and 2,147,483,647, inclusive of both ends.
  If the result of the shift is greater than the maximum value representable by 32-bit integer,
  it will overflow and yield unexpected result.
  For example, if [input:Value] is `1` and [input:Right_Shift_Count] is `31`,
  this node outputs `-2147483648`.
* For negative [input:Value], Miliastra uses [https://en.wikipedia.org/wiki/Two%27s_complement:two's complement]
  to represent the value in binary.
  This node only keeps the lower 32 bits and any excess bits are discarded.
  For example, `-1 << 1` is `-2`
  because `-1`'s binary representation is `11111111111111111111111111111111` (32 1's)
  and `-2`'s binary representation is `11111111111111111111111111111110`
  in 32-bit integer with two's complement.
  We recommend that you avoid using negative integers in bitwise operations.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:right_shift_operation]

# Authors
* kokokokomi222