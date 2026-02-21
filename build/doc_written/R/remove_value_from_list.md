# Summary
Removes an entry from a list.

# Input Parameters
* [input:List] (Generic List) - List to remove from. This list will be modified.
* [input:Remove_ID] (Integer) - Index of the entry to remove. This is 0-indexed.

# Usage
Use this node to remove an entry of the list at the specified index.
The first entry of a list is indexed as 0.
For example, if the list is `[1,2,3,4]`:

* Removing the entry at index 0 yields `[2, 3, 4]`.
* Removing the entry at index 1 yields `[1, 3, 4]`.
* Removing the entry at index 2 yields `[1, 2, 4]`.
* Removing the entry at index 3 yields `[1, 2, 3]`.

# Example
In this example, a local variable was initially set to 
`["Signora", "Tartaglia", "Wanderer", "Arlecchino", "Columbina"]`.
The entry at index 0 was removed, so the resulting list is
`["Tartaglia", "Wanderer", "Arlecchino", "Columbina"]`.
[image:remove_value_from_list_example]

# Notes
* If a negative index is used, this node raises a "List INDEX error" error, but continues the execution.
* If the index is not less than the length of the list, 
  this node raises an "Index exceeds list length" error
  (little misleading, because if index is equal to list length, this error still occurs), 
  but continues the execution.

# Performance
For integer list of length 10, it took ~2 units to run on average.

For integer list of length 500, it took ~3 units to run on average.

Index does not seem to affect performance visibly, regardless of removing at 0 or at the end of the list.

# See Also
* [node:set_list_value]
* [node:insert_value_into_list]
* [node:clear_list]

# Authors
* kokokokomi222