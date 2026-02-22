# Summary
Appends a list to the end of another list.

# Input Parameters
* [input:Target_List] (Generic List) - List to append to. This list will be modified.
* [input:Input_List] (Generic List) - List to append.

# Usage
Use this node to append a list to the end of another list.
For example, if [input:Target_List] is `[1, 2, 3]`, and [input:Input_List] is `[99, 100]`,
[input:Target_List] will be modified to `[1, 2, 3, 99, 100]`.

# Example
In this example, a local variable was initially set to `["Venti", "Zhongli", "Raiden"]`. A second list, `["Nahida", "Furina", "Mavuika"]`, was appended to the end of the first list. The first list is modified to `["Venti", "Zhongli", "Raiden", "Nahida", "Furina", "Mavuika"]` after this node graph runs.
[image:concatenate_list_example]

# Notes
* The maximum size of a list is 1000. 
  If the resulting list would have the length greater than 1000,
  this node is a no-op. It will NOT partially append until 1000 entries are filled.
* Changing the type of [input:Target_List] or [input:Input_List] will change the type of the other to match it.
* Passing the same reference of a list to both [input:Target_List] and [input:Input_List] works as expected, doubling the target list's size.

# Performance
Concatenating a list of length 500 with another list of length 500 took 7 units to run on average.

# See Also
* [node:insert_value_into_list]

# Authors
* kokokokomi222