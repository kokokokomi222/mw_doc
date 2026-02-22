# Summary
Sets the value of a list entry.

# Input Parameters
* [input:List] (Generic List) - List to set. This list will be modified.
* [input:ID] (Integer) - Index of the list entry to modify. This is 0-indexed.
* [input:Value] (Generic) - New value of the list entry.

# Usage
Use this node to write an entry of the list at the specified index. The first entry of a list is indexed as 0. For example, if the list is `[1, 2, 3, 4]` and `99` is being set as the new value:

* Setting at index 0 yields `[99, 2, 3, 4]`.
* Setting at index 1 yields `[1, 99, 3, 4]`.
* Setting at index 2 yields `[1, 2, 99, 4]`.
* Setting at index 3 yields `[1, 2, 3, 99]`.

# Example
In this example, a local variable was initially set to `["Neuvillette", "Furina", "Yelan", "Escoffier"]`. The entry at index 0 was modified to `"Kokomi"`, so the resulting list is `["Kokomi", "Furina", "Yelan", "Escoffier"]`.
[image:set_list_value_example]

# Notes
* If [input:ID] is negative, this node raises a "List INDEX error" error, but continues the execution.
* If [input:ID] is not less than the length of the list,
  this node raises an "Index exceeds list length" error
  (little misleading, because if [input:ID] is equal to the length of the list, this error still occurs),
  but continues the execution.
* Changing the type of [input:List] or [input:Value] will change the type of the other to match it.

# Performance
For an integer list of length 10, it took ~2 units to run on average.

For an integer list of length 500, it took ~4 units to run on average.

# See Also
* [node:insert_value_into_list]
* [node:remove_value_from_list]

# Authors
* kokokokomi222