# Summary
Clears a list.

# Input Parameters
* [input:List] (Generic List) - List to be cleared

# Usage
Use this node to completely empty the list, removing every entry from the list. The input list will have length 0 after this node is executed.

# Example
In this example, a list `["King Deshret", "Nabu Malikata", "Greater Lord Rukkhadevata"]` is being cleared. The resulting list is empty with length 0.
[image:clear_list_example]

# Performance
Clearing a list of length 1000 took 5 units to run on average.

# See Also
* [node:remove_value_from_list]

# Authors
* kokokokomi222