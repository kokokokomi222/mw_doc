# Summary
Performs bitwise complement.

# Input Parameters
* [input:Value] (Integer) - Operand.

# Output Values
* [output:Result] (Integer) - Result of bitwise complement of the input value.

# Usage
Miliastra does not have any unsigned integer type, only signed 32-bit integer.
Since using this node will always involve a negative number,
we recommend avoid using this node.
Use [node:xor_exclusive_or] instead whenever possible.

# Example
In this example, we are performing bitwise complement of `5`.
Clearly, `5` is `101` in binary.
So the bitwise complement of the input is `11111111111111111111111111111010`,
which is the binary representation of `-6` with two's complement.
```
~ 00000000000000000000000000000101 (5 in decimal)
----------------------------------
  11111111111111111111111111111010 (-6 in decimal)
```
[image:bitwise_complement_example]

# Notes
* **TO BE ADDED**

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:xor_exclusive_or]

# Authors
* kokokokomi222