# Summary
Gets the value of a node graph variable.

# Input Parameters
* [input:Variable_Name] (String) - Name of the node graph variable.

# Output Values
* [output:Variable_Value] (Generic) - Value of the node graph variable.

# Usage
Node graph variable can be used to hold state that only needs to be known by the node graph.
If you do not need this state to persist past a node graph execution, use local variable instead.
If you want the state to be read and/or written from other node graphs,
or to be used in string formatting of UI text box or text bubble, use custom variable instead.

Node graph variable is scoped for each created entities that hold this node graph.
All node graph variable values are lost if the entity is removed or destroyed from the scene,
and the values do not get restored if it is recreated by [node:create_entity].

# Example
In this example, we get the node graph variable named `favorite_character` and print its value.
[image:get_node_graph_variable_example]

# Notes
* [input:Variable_Name] can be selected from the list of node graph variables
  by clicking the magnifying glass icon.
  Sadly, this does not set the type of [output:Variable_Value].
* If there does not exist a node graph variable named [input:Variable_Name],
  this node raises a "Custom Variable does not exist" error
  (misleading because "custom variable" and "node graph variable" are different)
  and returns the default value of the type selected for [output:Variable_Value].
* If the type of [output:Variable_Value] does not match the type of the node graph variable,
  this node raises a "Custom Variable type error" error
  (misleading because "custom variable" and "node graph variable" are different)
  and returns the default value of the type selected for [output:Variable_Value].

# Performance
Getting a string node graph variable took ~3 units to run on average.

Getting an integer list of length 1000 took ~9 units to run on average.

# See Also
* [node:set_node_graph_variable]
* [node:get_local_variable]
* [node:get_custom_variable]

# Authors
* kokokokomi222