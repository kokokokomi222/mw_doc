# Summary
Returns the list of keys of the dictionary.

# Input Parameters
* [input:Dictionary] (Generic) - Dictionary to get the keys from

# Output Values
* [output:Key_List] (Generic) - List of keys of the dictionary

# Usage
Use this node to get all the keys of the dictionary.
If you would like to iterate over this list using [node:list_iteration_loop],
use a local variable to store the output of this node first,
as recommended in the documentation page for [node:list_iteration_loop].

The keys in the returned list is not sorted and can be in any order.

# Example
In this example, we have a node graph variable dictionary named `archon_to_element`.
[image:get_list_of_keys_from_dictionary_example_config]
We iterate over all keys of the dictionary to print all key-value pair.
There are no guarantees on the order of the keys.
[image:get_list_of_keys_from_dictionary_example]

# Notes
* Changing the type of [input:Dictionary]
  will change the type of [output:Key_List] to match it, and vice versa.

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~12 units on average.
For a dictionary with 100 key-value pairs, this node took ~100 units on average.

# See Also
* [node:get_list_of_values_from_dictionary]
* [node:query_dictionary_value_by_key]
* [node:query_dictionarys_length]
* [node:sort_dictionary_by_key]
* [node:sort_dictionary_by_value]

# Authors
* kokokokomi222