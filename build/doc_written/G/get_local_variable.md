# Summary
Defines a local variable and gets the variable value.

# Input Parameters
* [input:Initial_Value] (Generic) - Default initial value for the local variable

# Output Values
* [output:Local_Variable] (Local Variable) - Input for [node:set_local_variable].
* [output:Value] (Generic) - Current value of the local variable.

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
* The behavior of [input:Initial_Value] can be confusing and potentially cause performance issue,
  so we suggest only using it for constant literals (e.g. `42`, `"Kokomi"`)
  and never for dynamic containers (e.g. assembled dictionary, dynamically obtained list of entities).
  Use [node:set_local_variable] instead.
  In the following example, [node:get_random_integer] is only executed once
  and the two [node:print_string] always print the same value.
  Because [input:Initial_Value] is an integer, we only evaluate the input once.
  [image:get_local_variable_initial_1]
  However in the next example, [node:assembly_list] is executed twice.
  Because [input:Initial_Value] is a list (which is a container type),
  it is passed by reference and this node gets the reference each time.
  [image:get_local_variable_initial_2]
  If a container operation is performed on [output:Value]
  with nodes like [node:set_list_value] or [node:set_or_add_key_value_pairs_to_dictionary],
  local variable will remember the change and no longer use [input:Initial_Value] for its output.
  However, the debugger appears to still query [input:Initial_Value] every time
  even after the local variable has been modified,
  so this can cause performance issue at least in test play
  (and potentially in release, but we cannot know).
* If [input:Initial_Value] is left blank,
  it is set to the default value of the type
  (e.g. `0` for integer, `""` for string, etc.).
* Changing the type of [input:Initial_Value] or [input:Value]
  will change the type of the other to match it.

# Performance
For a string, it took ~3 units to run on average.

For an integer list of length 1000, it took ~13 units to run on average.

# See Also
* [node:set_local_variable]
* [node:get_node_graph_variable]
* [node:get_custom_variable]

# Authors
* kokokokomi222