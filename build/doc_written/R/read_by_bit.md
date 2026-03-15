# Summary
Reads the bits of an integer.

# Input Parameters
* [input:Value] (Integer) - Binary value to read from.
* [input:Read_starting_position] (Integer) - Lowest bit to read. 0-indexed.
* [input:Read_end_position] (Integer) - Highest bit to read. 0-indexed.

# Output Values
* [output:Result] (Integer) - Binary integer represented by the bits in the specified range.

# Usage
Say [input:Read_starting_position] is `a` and [input:Read_end_position] is `b`.
The lowest read bit is "`a`-th bit", which represents `2^a`.
The highest read bit is "`b`-th bit", which represents `2^b`.
The range of bits includes both ends, i.e. `b-a+1` bits are returned.
To put in C-style code, the output is 
```
(n & ((1&lt;&lt;(b+1)) -1)) &gt;&gt; a
```

# Example
In this example, we have that [input:Value] is `57`,
[input:Read_starting_position] is `2`,
and [input:Read_end_position] is `4`.
The binary representation of `57` is `111001`.
We get 2nd bit to 4th bit (remember that the bits are 0-indexed),
which are `110` in binary
and thus `6` is the output in decimal.

```
1 1 1 0 0 1
  ^ ^ ^
5 4 3 2 1 0-th bit
```
[image:read_by_bit_example]

# Notes
* If [input:Value] is negative, Miliastra uses [https://en.wikipedia.org/wiki/Two%27s_complement:two's complement]
  to represent the value in binary.
  For example, if the value is `-1`, getting the bits from `0` to `2` yields `7`,
  because `-1`'s binary representation is `11111111111111111111111111111111` (32 1's).
  We recommend that you avoid using negative integers with this node.
* If [input:Read_starting_position] or [input:Read_end_position] is negative,
  this node raises "Invalid bit index for read" error and returns `0`.
* If [input:Read_starting_position] is greater than [input:Read_end_position],
  this node raises "Invalid bit index for read" error and returns `0`.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:write_by_bit]

# Authors
* kokokokomi222