# Summary
Creates a dictionary from the list of keys and the list of values.

# Input Parameters
* [input:Key_List] (Generic) - List of the keys. It must be a list and the type of the list entry must be one of: Entity, GUID, Integer, String, Faction, Configuration ID, and Prefab ID.
* [input:Value_List] (Generic) - List of the values. It must be a list.

# Output Values
* [output:Dictionary] (Generic) - Created dictionary

# Usage
Use of this node is generally not recommended.
It is preferred for future maintenance your node graph
to have the dictionary specified in
a custom variable, a node graph variable, or even an advanced data structure instead.
If the output dictionary is used repeatedly, you may want to set the dictionary to a node graph variable for performance anyway, because a new dictionary is constructed every time when this node's output is used.
However, this node lets you specify entries of the dictionary dynamically, which may have its use.

You may want to use [node:assembly_dictionary] instead,
where you specify each key-value pair of the dictionary.

# Notes
* Changing the type of [input:Key_List], [input:Value_List], or [output:Dictionary] will change the type of other pins as needed.
* Entries of [input:Key_List] must be a hashable type: Entity, GUID, Integer, String, Faction, Configuration ID, or Prefab ID.
* If two of the entries of [input:Key_List] are equal to one another, 
  this node raises "Dictionary key duplicate" error and returns an empty dictionary.
* If the length of [input:Key_List] is not the same as [input:Value_List],
  the longer list is truncated from the back to match the length of the shorter list.
  This node does not raise any error or warning in this case.
  For example: if [input:Key_List] is `["a", "b", "c"]`
  and [input:Value_List] is `[1, 2, 3, 4, 5]`,
  the second list is truncated to `[1, 2, 3]`
  and output of this node, [output:Dictionary], is `{"a":1, "b":2, "c":3}`.
* A new dictionary is constructed every time when this node's output is used.
  Below example illustrates how that works.
  We use the output of this node twice,
  and between the two uses, we change the local variable from "Barbara" to "Kokomi"
  As a result, `first_type` is set to `{"Barbara": "hydro"}`
  and the `second_type` is set to `{"Kokomi": "hydro"}`.
  [image:create_dictionary_repeat_example]
  Thus, the dictionary reference this node outputs is temporary.
  If you modify the output dictionary with dictionary operations like
  [node:set_or_add_key_value_pairs_to_dictionary] or
  [node:remove_key_value_pairs_from_dictionary_by_key]
  without storing in a variable first,
  the modification will be lost.

# Performance
For a dictionary with 5 key-value pairs, this node took ~18 units to run on average.

# See Also
* [node:assembly_dictionary]

# Authors
* kokokokomi222