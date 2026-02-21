# Summary
Get the maximum value of a list.

# Input Parameters
* [input:List] (Generic) - List to get the maximum value from. Must be an integer list or a floating point number list.

# Output Values
* [output:Maximum_Value] (Generic) - Maximum value.

# Usage
Use this node to get the largest entry of a list.

# Example
In this example, we have an integer list `[3, 99, -5, 100, 0]`.
We get the maximum value of the list (which is `100`), convert it to string, and print it.
[image:get_maximum_value_from_list_example]

# Notes
* If [input:List] is empty, [output:Maximum_Value] is output as 0,
  which is not great for most use cases.
  A more reasonable value to output would have been
  the minimum integer value `-2147483648` for integer list,
  or the minimum float value (roughly -3.4\*10^38) for floating point number list.
  You may want to make a composite node version of this node to handle empty list better.
* Changing the type of [input:List] or [output:Maximum_Value] will change the type of the other to match it.

# Performance
For integer list of length 10, this node took ~2 unit to run on average.

For integer list of length 1000, this node took ~6 unit to run on average.

# See Also
* [node:get_minimum_value_from_list]

# Authors
* kokokokomi222
