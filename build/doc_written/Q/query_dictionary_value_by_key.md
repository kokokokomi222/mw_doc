# Summary
Returns the value corresponding the key in the dictionary.

# Input Parameters
* [input:Dictionary] (Generic) - The dictionary to query the value from
* [input:Key] (Generic) - Key in the dictionary

# Output Values
* [output:Value] (Generic) - Value that corresponds the key in the dictionary

# Usage
This is the primary query on dictionaries, getting the value from the key.
You will likely use this node if you are using a dictionary. 

# Example
In this example, we have a node graph variable dictionary named `round_score`
which stores key-value pair of player entity and player's score.
When a player selects the tab,
we get the current score of the player from the dictionary using [node:query_dictionary_value_by_key],
then set the new score of the player by adding 100.
[image:set_or_add_key_value_pairs_to_dictionary_example]

# Notes
* If [input:Key] is not a key in the dictionary, 
  this node returns the default value of the type of [output:Value].
  To properly test whether a key is in the dictionary,
  use [node:query_if_dictionary_contains_specific_key] instead.

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~12 units on average.
For a dictionary with 100 key-value pairs, this node took ~80 units on average.

# See Also
* [node:set_or_add_key_value_pairs_to_dictionary]
* [node:query_if_dictionary_contains_specific_key]
* [node:query_if_dictionary_contains_specific_value]

# Authors
* kokokokomi222