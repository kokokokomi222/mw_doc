# Summary
Gets an entry from a list by index.

# Input Parameters
* [input:List] (Generic) - List to get the entry from.
* [input:ID] (Integer) - Index for the entry to get. This is 0-indexed.

# Output Values
* [output:Value] (Generic) - Entry of the list at the index.

# Usage
Use this node to read from a list.
You may want to use [node:list_iteration_loop] instead if you want to iterate over every entry.

[input:ID] is 0-indexed, so the first entry's index is 0, index of the second is 1, third is 2, and so on.

# Example
In this example, we have a string list `["Barbara", "Mona", "Kokomi", "Mualani"]`.
We get the entry at index 2 (which is third entry, because [input:ID] is 0-indexed), which is `"Kokomi"`.
[image:get_corresponding_value_from_list_example]

# Notes
* If [input:ID] is negative, this node raises a "List INDEX error" error, but continues the execution with [output:Value] set to the default value of the type.
* If [input:ID] is not less than the length of the list, "Index exceeds list length" error (little misleading, because if index is equal to list length, this error still occurs), but continues the execution with [output:Value] set to the default value of the type.
* Changing the type of [input:List] or [output:Value] will change the type of the other to match it.

# Performance
For string list of length 10, it took ~2 units to run on average.

For integer list of length 1000, it took ~7 units to run on average.

# See Also
* [node:list_iteration_loop]

# Authors
* kokokokomi222