# Summary
Returns a random integer from range.

# Input Parameters
* [input:Lower_Limit] (Integer) - Lower bound of the random range (range includes this value)
* [input:Upper_Limit] (Integer) - Upper bound of the random range (range includes this value)

# Output Values
* [output:Result] (Integer) - Randomly generated integer in the range

# Usage
Use this node to get a random integer.
The range is inclusive of both ends, so if
[input:Lower_Limit] is `3` and [input:Upper_Limit] is `8` then
the possible [output:Result] is `3, 4, 5, 6, 7, 8`.

Although the official documentation does not state it,
we can probably assume that it tries to approximate uniform distribution
(i.e. equal probability of getting each possible output),
but we can't say anything about the quality of the randomness.

# Example
In this example, we set `buff` node graph variable to a random integer between 1 and 5.
[image:get_random_integer_example]

# Notes
* If [input:Lower_Limit] is greater than [input:Upper_Limit], this node returns `0`.

# Performance
This node took ~2 units to run on average.

Input values do not seem to visibly affect the performance.

# See Also
* [node:get_random_floating_point_number]
* [node:weighted_random]

# Authors
* kokokokomi222
