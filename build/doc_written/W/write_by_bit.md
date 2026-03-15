# Summary
Writes the bits of an integer.

# Input Parameters
* [input:Written_value] (Integer) - Binary value to write to.
* [input:Write_value] (Integer) - Binary value to overwrite with.
* [input:Write_starting_position] (Integer) - Lowest bit to read. 0-indexed.
* [input:Write_end_position] (Integer) - Highest bit to read. 0-indexed.

# Output Values
* [output:Result] (Integer) - Binary integer, which is the result of overwriting the specified bits.

# Usage
Say [input:Write_starting_position] is `a` and [input:Write_end_position] is `b`.
The lowest read bit is "`a`-th bit", which represents `2^a`.
The highest read bit is "`b`-th bit", which represents `2^b`.
The range of bits includes both ends, i.e. `b-a+1` bits are written.
To put in C-style code, the output is 
```
(n & (~((1 &lt;&lt; (b+1)) - (1 &lt;&lt; a)))) + (m &lt;&lt; a)
```
where `n` is [input:Write_value] and `m` is [input:Written_value].

# Example
In this example, we have that [input:Written_value] is `77`,
[input:Write_value] is `9`,
[input:Write_starting_position] is `2`,
and [input:Write_end_position] is `5`.
The binary representation of `77` is `1001101`.
We set 2nd bit to 5th bit (remember that the bits are 0-indexed),
which are originally `0011` in binary
and replace them with `1001` (binary representation of the input value `9`).
Therefore, the output is `1100101` in binary and thus `101` in decimal.

```
1 0 0 1 1 0 1
  1 0 0 1
-------------
1 1 0 0 1 0 1
  ^ ^ ^ ^
6 5 4 3 2 1 0-th bit
```
[image:write_by_bit_example]

# Notes
* If [input:Written_value] is negative,
  Miliastra uses [https://en.wikipedia.org/wiki/Two%27s_complement:two's complement]
  to represent the value in binary.
  For example, if [input:Written_value] is `-1` and [input:Write_value] is `2`,
  writing the bits from `0` to `2` yields `-6`,
  because `-1`'s binary representation is `11111111111111111111111111111111` (32 1's),
  so the result of writing is `11111111111111111111111111111010`.
  We recommend that you avoid using negative integers with this node.
* If [input:Write_value] is negative,
  this node raises "Bit write value out of range" error,
  and returns [input:Written_value] as output.
* If [input:Write_value] is greater or equal to `2^(b-a+1)` (i.e. has more than `b-a+1` bits),
  where [input:Write_starting_position] is `a` and [input:Write_end_position] is `b`,
  this node raises "Bit write value out of range" error
  and returns [input:Written_value] as output.
* If [input:Write_starting_position] or [input:Write_end_position] is negative,
  this node raises "Invalid bit index for write" error and returns [input:Written_value] as output.
* If [input:Write_starting_position] is greater than [input:Write_end_position],
  this node raises "Invalid bit index for write" error and returns [input:Written_value] as output.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:read_by_bit]

# Authors
* kokokokomi222