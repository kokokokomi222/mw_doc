# Summary
Gets the value of a custom variable.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that holds the custom variable.
* [input:Variable_Name] (String) - Name of the custom variable.

# Output Values
* [output:Variable_Value] (Generic) - Value of the custom variable.

# Usage
Custom variable can be used to hold state that is publicly accessible by all node graphs.
It can also be used for string formatting by UI text box, text bubbles, nameplate, and others.
If you do not need the state to be read/written from other node graphs,
use node graph variable instead.

Custom variable is scoped for each created entities.
All custom variable values are lost if the entity is removed or destroyed from the scene,
and the values do not get restored if it is recreated by [node:create_entity].

# Example
In this example, we get the custom variable named `weapon` from the character that selected the tab and print its value.
[image:get_custom_variable_example]

# Notes
* If [input:Target_Entity] does not exist, this node raises "Entity does not exist" error,
  and returns [hoyo:mhk23ora1wom:the default value of the type] selected for [output:Variable_Value].
* If there does not exist a custom variable named [input:Variable_Name],
  this node raises a "Custom Variable does not exist" warning
  and returns [hoyo:mhk23ora1wom:the default value of the type] selected for [output:Variable_Value].
* If the type of [output:Variable_Value] does not match the type of the custom variable,
  this node raises a "Custom Variable type error" error
  and returns [hoyo:mhk23ora1wom:the default value of the type] selected for [output:Variable_Value].

# Performance
Getting a string custom variable took ~3 units to run on average.

Getting an integer list of length 1000 took ~7 units to run on average.

# See Also
* [node:set_custom_variable]
* [node:get_node_graph_variable]

# Authors
* kokokokomi222