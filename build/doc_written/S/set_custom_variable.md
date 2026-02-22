# Summary
Sets the value of a custom variable.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that holds the custom variable.
* [input:Variable_Name] (String) - Name of the custom variable.
* [input:Variable_Value] (Generic) - Value to set the custom variable to.
* [input:Trigger_Event] (Boolean) - If `Yes`, [node:when_custom_variable_changes] triggers

# Usage
Custom variable can be used to hold state that is publicly accessible by all node graphs.
It can also be used for string formatting by UI text box, text bubbles, nameplate, and others.
If you do not need the state to be read/written from other node graphs,
use node graph variable instead.

Custom variable is scoped for each created entities.
All custom variable values are lost if the entity is removed or destroyed from the scene,
and the values do not get restored if it is recreated by [node:create_entity].

# Example
In this example, we set the custom variable `weapon` to `"Everlasting Moonglow"`
for the character entity that selected the tab.
[image:set_custom_variable_example]

# Notes
* If [input:Target_Entity] does not exist, this node raises "Entity does not exist" error, but continues the execution.
* If there does not exist a custom variable named [input:Variable_Name],
  it creates a new custom variable with that name.
  Note that this behavior is different from [node:set_node_graph_variable].
* If the type of [input:Variable_Value] does not match the type of the custom variable, this node is no-op.
* For container types such as list, dictionary, or structure,
  this node receives the reference of the container as [input:Variable_Value]
  and copies the content of the input container.
  The resulting custom variable will have different reference as the input value.
  In the below example, `first_list` variable is set to `[2, 3, 5]`
  and `second_list` copied the content.
  After the execution, `first_list` will be `[1, 3, 5]` and `second_list` will be `[2, 3, 4]`,
  because the two lists start with the same content but separate reference,
  thus [node:set_list_value] only modifies one of the lists.
  [image:set_custom_variable_container_reference_example]

# Performance
For a string custom variable, this node took ~7 units to run on average when [input:Trigger_Event] is `No`.
When [input:Trigger_Event] is `Yes`, this node took ~9 units to run on average.

For an integer list of length 1000, this node took ~27 units to run on average when [input:Trigger_Event] is `No`.
When [input:Trigger_Event] is `Yes`, this node took ~30 units to run on average.

Whether [node:when_custom_variable_changes] exists to monitor the change does not seem to visibly affect performance.

This node performs clearly worse than [node:set_node_graph_variable].

# See Also
* [node:get_custom_variable]
* [node:when_custom_variable_changes]
* [node:set_node_graph_variable]

# Authors
* kokokokomi222