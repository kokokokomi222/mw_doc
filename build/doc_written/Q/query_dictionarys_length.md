# Summary
Returns the length of the dictionary.

# Input Parameters
* [input:Dictionary] (Generic) - Dictionary to get the length from

# Output Values
* [output:Length] (Integer) - Length of the dictionary, i.e. number of key-value pairs

# Usage
Use this node to get the length of the dictionary.

# Example
In this example, we have a dictionary `{"Slime": 20, "Hilichurl": 30, "Ruin Guard": 5}`.
We get the length of the dictionary and print it,
which is `3` because the dictionary has three key-value pairs.
[image:query_dictionary_length_example]

# Notes
* If [input:Dictionary] is left empty, 
  it is considered to be the default value (empty dictionary),
  and this node returns `0`.

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~11 units on average.
For a dictionary with 100 key-value pairs, this node took ~90 units on average.

# See Also
* [node:get_list_of_keys_from_dictionary]
* [node:get_list_of_values_from_dictionary]

# Authors
* kokokokomi222