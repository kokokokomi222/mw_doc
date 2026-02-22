# Summary
Get the minimum value of a list.

# Input Parameters
* [input:List] (Generic) - List to get the minimum value from. Must be an integer list or a floating point number list.

# Output Values
* [output:Minimum_Value] (Generic) - Minimum value.

# Usage
Use this node to get the smallest entry of a list.

# Example
In this example, we have an integer list `[3, 99, -5, 100, 0]`.
We get the minimum value of the list (which is `-5`), convert it to string, and print it.
[image:get_minimum_value_from_list_example]

# Notes
* If [input:List] is empty, [output:Minimum_Value] is output as 0,
  which is not great for most use cases.
  A more reasonable value to output would have been
  the maximum integer value `2147483647` for integer list,
  or the maximum float value (roughly 3.4\*10^38) for floating point number list.
  You may want to make a composite node version of this node to handle the empty list better.
* Changing the type of [input:List] or [output:Minimum_Value] will change the type of the other to match it.

# Performance
For an integer list of length 10, this node took ~2 unit to run on average.

For an integer list of length 1000, this node took ~6 unit to run on average.

# See Also
* [node:get_maximum_value_from_list]

# Authors
* kokokokomi222