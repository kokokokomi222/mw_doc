# Summary
Sets a local variable value.

# Input Parameters
* [input:Local_Variable] (Local Variable) - Local variable to set. From [node:get_local_variable].
* [input:Value] (Generic) - Value to set the local variable to.

# Usage
Local variables are used to keep state within a scope of one execution of a node graph.
This node lets us set the value of the variable.

If you have states that only need to live during one execution of a node graph,
local variables are what you should use to store those states.
Think of local variables as temporary variables.

When a node's output is connected to multiple nodes, 
that node is evaluated each time the other nodes are evaluated.
If that node's output does not change,
you may wish to store the output in a local variable for performance.

# Example
This example removes all entities with a specific prefab ID when the tab is selected.
A local variable is used to temporarily store the list of all relevant entities.
If the list was directly connected to the loop without using the local variable,
this node graph will not work as intended 
because the [node:get_entities_with_specified_prefab_on_the_field]
node will be evaluated every iteration and the list will change.
[image:set_local_variable_example]

# Notes
* If the type of the [input:Local_Variable] and the type of the [input:Value] is different, this node is no-op.
  There is no type checking for this, so be careful to set the types correctly.
* For container types such as list, dictionary, or structure,
  this node receives the reference of the container as [input:Value]
  and copies the content of the input container.
  The resulting local variable will have different reference as the input value.

# Performance
For an integer, this node took ~2 units to run on average.

For a string of length 1000, this node took ~2 units to run on average.

# See Also
* [node:get_local_variable]

# Authors
* kokokokomi222