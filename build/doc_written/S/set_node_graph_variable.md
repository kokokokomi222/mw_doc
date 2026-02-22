# Summary
Sets the value of a node graph variable.

# Input Parameters
* [input:Variable_Name] (String) - Name of the node graph variable.
* [input:Variable_Value] (Generic) - Value to set the node graph variable to.
* [input:Trigger_Event] (Boolean) - If `Yes`, [node:when_node_graph_variable_changes] triggers.

# Usage
Node graph variable can be used to hold state that only needs to be known by the node graph.
If you do not need this state to persist past a node graph execution, use local variable instead.
If you want the state to be read and/or written from other node graphs,
or to be used in string formatting of UI text box, text bubble, or nameplate, use custom variable instead.

Node graph variable is scoped for each created entities that hold this node graph.
All node graph variable values are lost if the entity is removed or destroyed from the scene,
and the values do not get restored if it is recreated by [node:create_entity].

# Example
In this example, we set the node graph variable `favorite_character` to `"Kokomi"`.
[image:set_node_graph_variable_example]

# Notes
* [input:Variable_Name] can be selected from the list of node graph variables
  by clicking the magnifying glass icon.
  Sadly, this does not set the type of [input:Variable_Value].
* If there does not exist a node graph variable named [input:Variable_Name], this node is no-op.
  Note that this behavior is different from [node:set_custom_variable].
* If the type of [input:Variable_Value] does not match the type of the node graph variable, this node is no-op.
* For container types such as list, dictionary, or structure,
  this node receives the reference of the container as [input:Variable_Value]
  and copies the content of the input container.
  The resulting node graph variable will have different reference as the input value.
  In the below example, `first_list` variable is set to `[2, 3, 5]`
  and `second_list` copied the content.
  After the execution, `first_list` will be `[1, 3, 5]` and `second_list` will be `[2, 3, 4]`,
  because the two lists start with the same content but separate reference,
  thus [node:set_list_value] only modifies one of the lists.
  [image:set_node_graph_variable_container_reference_example]

# Performance
For a string node graph variable, this node took ~3 units to run on average when [input:Trigger_Event] is `No`.
When [input:Trigger_Event] is `Yes`, this node took ~6 units to run on average.

For an integer list of length 1000, this node took ~8 units to run on average when [input:Trigger_Event] is `No`.
When [input:Trigger_Event] is `Yes`, this node took ~11 units to run on average.

Whether [node:when_node_graph_variable_changes] exists to monitor the change does not seem to visibly affect performance.

This node performs clearly better than [node:set_custom_variable].

# See Also
* [node:get_node_graph_variable]
* [node:when_node_graph_variable_changes]
* [node:set_custom_variable]

# Authors
* kokokokomi222