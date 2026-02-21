# Summary
Gets the value of a custom variable from snapshot on entity destruction.

# Input Parameters
* [input:Custom_Variable_Component_Snapshot] (Custom Variable Snapshot) - Snapshot of the custom variables in the destroyed entity. Available as [output:Custom_Variable_Component_Snapshot] from [node:when_entity_is_destroyed].
* [input:Variable_Name] (String) - Name of the custom variable in the destroyed entity.

# Output Values
* [output:Variable_Value] (Generic) - Value of the custom variable in the destroyed entity.

# Usage
We normally use [node:get_custom_variable] to get custom variables from entities.
But when an entity is destroyed,
custom variables from the entity are no longer accessible and is gone forever.
If stage is listening to [node:when_entity_is_destroyed],
the event gives us the last minute access to the custom variables
of the destroyed entity in the form of custom variable snapshot.
This node lets us read from the snapshot.

# Example
In this example, we have a node graph for the stage that is listening to the entity destruction event.
When the destroyed entity is a creation and is in faction `3`,
then we increment the achievement progress of the player that destroyed the entity
by the value of the `score` custom variable from the destroyed entity.
[image:query_custom_variable_snapshot_example]

# Notes
* If [input:Custom_Variable_Component_Snapshot] is left empty,
  this node raises "Custom Variable does not exist" warning
  and returns the default value of the type of [output:Variable_Value].
* If there was no custom variable named [input:Variable_Name] in the destroyed entity,
  this node raises "Custom Variable does not exist" warning
  and returns the default value of the type of [output:Variable_Value].
* If the type of the custom variable does not match the type of [input:Variable_Value],
  this node raises "Custom Variable type error" error
  and returns the default value of the type of [output:Variable_Value].
* If [output:Variable_Value] is a container type,
  then it can be modified and the changes will be kept by the snapshot variable.

# Performance
For a string variable, it took ~2 units to run on average.

# See Also
* [node:when_entity_is_destroyed]

# Authors
* kokokokomi222