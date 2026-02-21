# Summary
Searches a list for a value, returning the list of indices.

# Input Parameters
* [input:Target_List] (Generic) - The list to search in.
* [input:Value] (Generic) - The value to search for.

# Output Values
* [output:ID_List] (Integer List) - List of indices where the value is found at.

# Usage
Use this node to find all occurrences of a value in a list.
If you only need to know whether the value is present,
use [node:list_includes_this_value] instead.

# Example
In this example, we have a string list depicting a result of a 10-pull.
We search this list for occurrences of `"Kokomi"` and print the indices,
so this example will print `"2"` and `"7"`.
[image:search_list_and_return_value_id_example]

# Notes
* Changing the type of [input:List] or [input:Value] will change the type of the other to match it.
* If no matches are found, [output:ID_List] is empty.
* For floating point numbers, this node uses approximate equality
  (e.g. `10.0` and `10.00001` is considered equal by this node).
  This approximate equality seems to be same as [node:equal],
  but we cannot be completely sure.

# Performance
For integer list of length 10, this node took ~2 units to run on average.

For integer list of length 1000,
this node took ~10 units to run on average with 0 matches,
~18 units to run with all entries matching.

# See Also
* [node:list_includes_this_value]

# Authors
* kokokokomi222