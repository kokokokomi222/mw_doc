# Summary
Returns whether a list contains a value.

# Input Parameters
* [input:List] (Generic) - List to search in.
* [input:Value] (Generic) - Value to search for.

# Output Values
* [output:Include] (Boolean) - `Yes` if the value is in the list, `No` otherwise.

# Usage
Use this node to test whether a certain value is in a list.
If you also need to know at which index the value is at,
use [node:search_list_and_return_value_id] instead.

# Example
In this example, we have a string list `["Kokomi", "Furina", "Yelan", "Escoffier"]`.
We check whether `"Furina"` is in this list, then print `"Furina is in the team!"` if true.
[image:list_includes_this_value_example]

# Notes
* Changing the type of [input:List] or [input:Value] will change the type of the other to match it.
* If [input:List] is left empty, this node is guaranteed to return `No` regardless of [input:Value].
* For floating point numbers, this node uses approximate equality
  (e.g. `10.0` and `10.00001` is considered equal by this node).
  This approximate equality seems to be same as [node:equal],
  but we cannot be completely sure.

# Performance
For an integer list of length 10, it took ~1 units to run on average.

For an integer list of length 1000, it took ~6 units to run on average.
When the value was located at index 0 of the list, performance does not seem to be affected visibly.

# See Also
* [node:search_list_and_return_value_id]

# Authors
* kokokokomi222