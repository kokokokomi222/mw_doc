# Summary
Generates weighted random number.

# Input Parameters
* [input:Weight_List] (Integer List) - List of weights for each index.

# Output Values
* [output:Weight_ID] (Integer) - Randomly generated index. Ranges from 0 to N-1, where N is the length of the input list.

# Usage
Use this node to generate a random number with weights.
Higher the weight, the more likely to generate that number.
If [input:Weight_List] is `[w_0, w_1, ..., w_{n-1}]`,
then the probability of this node outputting `i` is `w_i / (w_0+w_1+...+w_{n-1})`.
See the example section below for a concrete example.

# Example
In this example, the list `[12, 5, 2, 1]` is used as weight to generate a random number from `0, 1, 2, 3`.
Because `12+5+2+1=20`,

* The probability of getting `0` is 12/20 = 60%.
* The probability of getting `1` is 5/20 = 25%.
* The probability of getting `2` is 2/20 = 10%.
* The probability of getting `3` is 1/20 = 5%.

We then have a list of chest names, `["Common Chest", "Exquisite Chest", "Precious Chest", "Luxurious Chest"]`,
and we print the corresponding name with the randomly generated index.
[image:weighted_random_example]

# Notes
* If the length of [input:Weight_List] is 0, this node returns 0.
* If all entries of [input:Weight_List] are 0, this node returns 0.
* If any entry of [input:Weight_List] is negative, this node returns 0.

# Performance
This node took ~1 unit to run on average for [input:Weight_List] of length 5.

This node took ~9 units to run on average for [input:Weight_List] of length 1000.

# See Also
* [node:get_random_integer]

# Authors
* kokokokomi222