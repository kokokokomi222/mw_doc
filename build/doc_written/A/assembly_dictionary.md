# Summary
Creates a dictionary by listing key-value pairs.

# Input Parameters
* [input:Key_0~49] (Generic) - Keys of the dictionary. Type must be one of: Entity, GUID, Integer, String, Faction, Configuration ID, and Prefab ID.
* [input:Value_0~49] (Generic) - Values of the dictionary. Type cannot be a dictionary.

# Output Values
* [output:Dictionary] (Generic Dictionary) - Assembled dictionary

# Usage
Use of this node is generally not recommended.
It is preferred for future maintenance your node graph
to have the dictionary specified in
a custom variable, a node graph variable, or even an advanced data structure instead.
If the output dictionary is used repeatedly, you may want to set the dictionary to a node graph variable for performance anyway, because a new dictionary is constructed every time when this node's output is used.
However, this node lets you specify entries of the dictionary dynamically, which may have its use.

You may want to use [node:create_dictionary] instead,
where you specify the entries of the dictionary with the list of keys and values instead.

A key-value pair of input pins can be deleted by right-clicking and selecting "delete".

# Notes
* The name "Assembly Dictionary" is probably a localization mistake. [node:assemble_structure] is named with correct grammar.
* Changing the type of any key (or [output:Dictionary]'s key) will change the type of all keys and [output:Dictionary] key's type to match it.
* Changing the type of any value (or [output:Dictionary]'s value) will change the type of all values and [output:Dictionary] value's type to match it.
* Key must be a hashable type: Entity, GUID, Integer, String, Faction, Configuration ID, or Prefab ID.
* Value cannot be a dictionary.
* The maximum number of key-value pairs that can be added with this node is 50.
* If there are two keys that are equal to one another,
  this node raises "Dictionary key duplicate" error and returns an empty dictionary.
* If an input is left empty, it is considered to be the default value of that type.
  For example, the first node here raises "Dictionary key duplicate" error
  because [input:Key_0] is considered to be `0`, default value of the integer type,
  which is equal to [input:Key_1].
  The second node outputs `{1:""}` (value is an empty string, default value of the string type).
  [image:assembly_dictionary_default_value]
* A new dictionary is constructed every time when this node's output is used.
  Below example illustrates how that works.
  We use the output of the assembly dictionary twice,
  and between the two uses, we change the local variable from "Barbara" to "Kokomi"
  As a result, `first_type` is set to `{"Barbara": "hydro"}`
  and the `second_type` is set to `{"Kokomi": "hydro"}`.
  [image:assembly_dictionary_repeat_example]
  Thus, the dictionary reference this node outputs is temporary.
  If you modify the output dictionary with dictionary operations like
  [node:set_or_add_key_value_pairs_to_dictionary] or
  [node:remove_key_value_pairs_from_dictionary_by_key]
  without storing in a variable first,
  the modification will be lost.

# Performance
For a dictionary with 5 key-value pairs, this node took ~17 units to run on average.

# See Also
* [node:create_dictionary]

# Authors
* kokokokomi222