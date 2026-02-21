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
  but the behavior of float comparison seems to be described by the following Python-like pseudocode:
  ```
    # TODO: It feels like something like this. Actually figure out the bounds.
    abs(a-b) < max(max(abs(a), abs(b)) * 0.000001, 0.000001)
  ```

# Performance
**TO BE ADDED**

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222
