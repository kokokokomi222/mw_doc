# Summary
Inserts an entry into a list.

# Input Parameters
* [input:List] (Generic List) - List to insert into. This list will be modified.
* [input:Insert_ID] (Integer) - Index to insert the new value into. This is 0-indexed.
* [input:Insert_Value] (Generic) - Value to insert.

# Usage
Use this node to insert a value into a list, right before the specified index. The first entry of a list is indexed as 0. The inserted value ends up at the specified index in the resulting list. For example, if the list is `[1,2,3]` and `99` is being inserted:

* Inserting at index 0 yields `[99, 1, 2, 3]`.
* Inserting at index 1 yields `[1, 99, 2, 3]`.
* Inserting at index 2 yields `[1, 2, 99, 3]`.
* Inserting at index 3 yields `[1, 2, 3, 99]`.

# Example
In this example, a local variable was initially set to `["Amber", "Lisa", "Kaeya"]`.
`"Traveler"` was inserted at index 0, so the resulting list is
`["Traveler", "Amber", "Lisa", "Kaeya"]`.
[image:insert_value_into_list_example]

# Notes
* If [input:Insert_ID] is negative, this node is a no-op.
* If [input:Insert_ID] is greater than the length of the list, this node is a no-op.
* The maximum size of a list is 1000. If a value is inserted into a list of length 1000, this node is a no-op.
* Changing the type of [input:List] or [input:Insert_Value] will change the type of the other to match it.

# Performance
For an integer list of length 10, it took ~2 units to run on average.

For an integer list of length 500, it took ~4 units to run on average.

Index does not seem to affect performance visibly, regardless of inserting at 0 or at the end of the list.

I did not observe any kinks in performance at specific list lengths that might arise from reallocation while doubling the capacity of a dynamic array.

# See Also
* [node:set_list_value]
* [node:remove_value_from_list]
* [node:concatenate_list]

# Authors
* kokokokomi222