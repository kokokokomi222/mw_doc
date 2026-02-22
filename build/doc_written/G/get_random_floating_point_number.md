# Summary
Returns a random float from range.

# Input Parameters
* [input:Lower_Limit] (Floating Point Numbers) - Lower bound of the random range (range includes this value)
* [input:Upper_Limit] (Floating Point Numbers) - Upper bound of the random range (range includes this value)

# Output Values
* [output:Result] (Floating Point Numbers) - Randomly generated float in the range

# Usage
Use this node to get a random floating point number.
The range is inclusive of both ends, 
so it is possible to have [output:Result] be the same value as [input:Lower_Limit] or [input:Upper_Limit].

Although the official documentation does not state it,
we can probably assume that it tries to approximate uniform distribution
(i.e. the probability density function is constant over the interval),
but we can't say anything about the quality of the randomness.

# Example
In this example, we print a random floating point number between 0 and 1.
[image:get_random_floating_point_number_example]

# Notes
* If [input:Lower_Limit] is greater than [input:Upper_Limit], this node returns `0.0`.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:get_random_integer]
* [node:weighted_random]

# Authors
* kokokokomi222