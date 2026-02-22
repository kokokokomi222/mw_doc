# Summary
Returns whether two values are equal.

# Input Parameters
* [input:Input_1] (Generic) - First value to compare
* [input:Input_2] (Generic) - Second value to compare

# Output Values
* [output:Result] (Boolean) - `Yes` if equal, `No` if not equal

# Usage
Use this node to see whether two values are equal.

For floating point numbers and 3D vectors, this node does approximate equality instead of exact equality.
So `2.0000001` and `2.0` are considered equal by this node.
In almost all situations, this is the behavior you want when you test equality of floating point numbers,
because float operations are not exact and losses precision
(e.g. `0.1+0.2` is **NOT** exactly equal to `0.3` in IEEE 754 32-bit float).

# Example
**TO BE ADDED**

# Notes
* It is difficult to say,
  but the behavior of float comparison seems to be approximately described by the following Python-like pseudocode:
  ```
    # This is not exact, but it's close.
    abs(input_1-input2) < max(max(abs(input_1), abs(input_2)) * 0.000001, 0.000001)
  ```
  Simply put, this node tolerates ~0.000001 difference for values close to 0
  (so 0 = 0.0000009 and 0 = -0.0000009 according to this node).
  For "bigger" values (absolute value is greater than 1), say 1000,
  it tolerates ~1000\*0.000001 ≈ ~0.001 difference
  (so 1000 = 999.9991 and 1000 = 1000.0009 according to this node).

# Performance
**TO BE ADDED**

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222
