# Summary
Add or modify a key-value pair of a dictionary.

# Input Parameters
* [input:Dictionary] (Generic) - Dictionary to modify
* [input:Key] (Generic) - Key for the dictionary
* [input:Value] (Generic) - New value to set

# Usage
Use this node to add a new key-value pair to a dictionary,
or modify a value for an existing key-value pair in a dictionary.

# Example
In this example, we have a node graph variable dictionary named `round_score`
which stores key-value pair of player entity and player's score.
When a player selects the tab,
we get the current score of the player from the dictionary using [node:query_dictionary_value_by_key],
then set the new score of the player by adding 100.
[image:set_or_add_key_value_pairs_to_dictionary_example]

# Notes
* Changing the type of [input:Dictionary]
  will change the type of [input:Key] and/or [input:Value] to match it, and vice versa.
* If [input:Key] does not exist in [input:Dictionary] and [input:Dictionary] has at least 1001 key-value pairs, this node is no-op.
  Curiously, it functions properly when [input:Dictionary] has exactly 1000 key-value pairs.
* If [input:Key] or [input:Value] is left empty, it is considered to be the default value of that type.

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~14 units on average.
For a dictionary with 100 key-value pairs, this node took ~110 units on average.

# See Also
* [node:remove_key_value_pairs_from_dictionary_by_key]
* [node:clear_dictionary]

# Authors
* kokokokomi222