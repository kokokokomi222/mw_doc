# Summary
Get the keys and the values of a dictionary, sorted by key.

# Input Parameters
* [input:Dictionary] (Generic) - Dictionary to get the keys and values from. The type of the key must be integer.
* [input:Sort_By] (Enumeration) - Must be one of `Sorting Rules_Ascending` or `Sorting Rules_Descending`

# Output Values
* [output:Key_List] (Generic) - List of keys in the dictionary, sorted by key
* [output:Value_List] (Generic) - List of values in the dictionary, sorted by key

# Usage
This node lets you sort the key-value pairs by key.
However, the usage is very limited, because it only allows integer for the key.

# Example
In this example, we have a dictionary `{4:"quadruple", 2:"double", 3:"triple"}`.
We sort the dictionary by key in the increasing order and print the values.
The result in the log is `"double", "triple", "quadruple"`,
because `2 &lt; 3 &lt; 4`.
[image:sort_dictionary_by_key_example]

# Notes
* It's unusual that this is an execution node instead of a query node.
  It does not modify any state or have side effects.
  It may be to keep the reference of the output,
  so that this node is not repeatedly called.
* Changing the type of [input:Dictionary] will change
  the type of [output:Key_List] and [output:Value_List], and vice versa.

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~11 units on average.
For a dictionary with 100 key-value pairs, this node took ~140 units on average.

# See Also
* [node:sort_dictionary_by_value]
* [node:get_list_of_keys_from_dictionary]
* [node:get_list_of_values_from_dictionary]

# Authors
* kokokokomi222