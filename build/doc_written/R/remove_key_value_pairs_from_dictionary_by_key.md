# Summary
Remove a key-value pair from a dictionary.

# Input Parameters
* [input:Dictionary] (Generic) - Dictionary to modify
* [input:Key] (Generic) - Key to remove from the dictionary

# Usage
Use this node to remove a key-value pair from a dictionary.

# Example
In this example, we have a node graph variable dictionary named `round_score`
which stores key-value pair of player entity and player's score.
On `Player Disconnected` signal, we remove the player's score from the dictionary.
[image:remove_key_value_pairs_from_dictionary_by_key_example]

# Notes
* Changing the type of [input:Key] will change the type of [input:Dictionary], and vice versa.
* If [input:Key] is not a key in [input:Dictionary], this node is no-op.
* If [input:Key] is left empty, it is considered to be the default value of that type.

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~9 units on average.
For a dictionary with 100 key-value pairs, this node took ~80 units on average.

# See Also
* [node:clear_dictionary]
* [node:set_or_add_key_value_pairs_to_dictionary]

# Authors
* kokokokomi222