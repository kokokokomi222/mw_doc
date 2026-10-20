# Summary
Returns whether the value is in the dictionary.

# Input Parameters
* [input:Dictionary] (Generic) - Dictionary to test
* [input:Value] (Generic) - Potential value of the dictionary

# Output Values
* [output:Include] (Boolean) - `Yes` if the value is in the dictionary. `No` otherwise.

# Usage
Use this node to test whether a value is in the dictionary.

# Example
In this example, we have a node graph variable dictionary named `archon_to_element`.
[image:get_list_of_keys_from_dictionary_example_config]
We test whether `"Hydro"` is a value in the dictionary,
printing `"There is a hydro archon."` if true,
printing `"There is no hydro archon."` if false,
[image:query_if_dictionary_contains_specific_value_example]

# Notes
* Changing the type of [input:Dictionary]
  will change the type of [input:Value] to match it, and vice versa.
* If the type of [input:Value] is floating point number or 3D Vector,
  the node uses approximate equal as defined in [node:equal].
  For example, if [input:Dictionary] is `{"test": 999.9999}` and [input:Value] is `1000`,
  this node returns `Yes` because `999.9999` is approximately equal to `1000`.

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~11 units on average.
For a dictionary with 100 key-value pairs, this node took ~80 units on average.

# See Also
* [node:query_if_dictionary_contains_specific_key]
* [node:query_dictionary_value_by_key]

# Authors
* kokokokomi222