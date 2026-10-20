# Summary
Clear a dictionary.

# Input Parameters
* [input:Dictionary] (Generic) - Dictionary to clear

# Usage
Use this node to clear a dictionary.
The dictionary will contain zero key-value pairs after this node runs.

# Example
In this example, we clear a node variable dictionary named `round_score` on signal `Round Ended`.
After the node runs, the dictionary will be completely empty with length 0.
[image:clear_dictionary_example]

# Notes
* **TO BE ADDED**

# Performance
This node is slow in load testing.
This is maybe because the debugger stores and/or serializes the dictionary,
but we are unsure how much faster it runs in release.
For a dictionary with 10 key-value pairs, this node took ~12 units to run on average.
For a dictionary with 100 key-value pairs, this node took ~120 units to run on average.

# See Also
* [node:remove_key_value_pairs_from_dictionary_by_key]

# Authors
* kokokokomi222