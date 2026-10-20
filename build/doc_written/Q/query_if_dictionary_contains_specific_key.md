# Summary
Returns whether the key is in the dictionary.

# Input Parameters
* [input:Dictionary] (Generic) - Dictionary to test
* [input:Key] (Generic) - Potential key of the dictionary

# Output Values
* [output:Include] (Boolean) - `Yes` if the key is in the dictionary. `No` otherwise.

# Usage
Use this node to check whether a key is in the dictionary.

# Example
In this example, we have a node graph variable dictionary named `archon_to_element`.
[image:get_list_of_keys_from_dictionary_example_config]
We test whether `"Furina"` is a key in the dictionary,
printing `"Furina is an archon."` if true,
printing `"Furina is not an archon."` if false,
[image:query_if_dictionary_contains_specific_key_example]

# Notes
* Changing the type of [input:Dictionary]
  will change the type of [input:Key] to match it, and vice versa.

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~11 units on average.
For a dictionary with 100 key-value pairs, this node took ~80 units on average.

# See Also
* [node:query_if_dictionary_contains_specific_value]
* [node:query_dictionary_value_by_key]

# Authors
* kokokokomi222