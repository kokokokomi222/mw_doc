# Summary
Makes a list by specifying each entry.

# Input Parameters
* [input:0~99] (Generic) - Entries of the list

# Output Values
* [output:List] (Generic List) - Assembled list

# Usage
Use this node to easily create a small list.
In many cases, it is probably preferred for future maintenance your node graph
to have the list specified in a custom or node graph variable instead.
However, this node lets you specify entries of the list dynamically,
which cannot be done by custom or node graph variable.

If the output list is used repeatedly,
you may want to set the list to a local variable for performance,
because a new list is constructed every time when this node's output is used.
You must set the local variable with [node:set_local_variable],
instead of using "Initial Value" which will not help.
See "Notes" section below for detail.

An input pin can be deleted by right-clicking and selecting "delete".

# Example
In this example, a list `["One", "Two", "Three"]` is assembled.
We store this list in a local variable and then iterate through this list and print the entries.
[image:assembly_list_example]

# Notes
* The name "Assembly List" is probably a localization mistake.
  [node:assemble_structure] is named with correct grammar.  
* Changing the type of any entries (or [output:List])
  will change the type of all entries (and [output:List]) to match it.
* Entries cannot be set to list or dictionary,
  because Miliastra does not allow list or dictionary as list entries.
  Use a structure to have containers as entries of a list.
* The maximum number of entries that can be added with this node is 100.
* A new list is constructed every time when this node's output is used.
  Below example illustrates how that works.
  We use the output of the assembly list twice,
  and between the two uses, we change the local variable from
  `"Barbara"` to `"Kokomi"`, which gets used as the second entry of the assembled list.
  As a result, `first_sentence` is set to `["I love", "Barbara"]`
  and `second_sentence` is set to `["I love", "Kokomi"]`.
  [image:assembly_list_repeat_example]
  Thus, the list reference this node outputs is temporary.
  If you modify the output list with list operations like [node:set_list_value] or [node:insert_value_into_list]
  without storing in a variable first, the modification will be lost.

# Performance
For a list of 5 entries, this node took ~4 units to run on average.

# See Also
* [node:assembly_dictionary]

# Authors
* kokokokomi222
