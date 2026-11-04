# Summary
Enables/disables collision trigger source.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that has a collision trigger source.
* [input:Activate] (Boolean) -If `Yes`, collision trigger source is enabled. If `No`, it is disabled.

# Usage
Collision triggers are used to detect whether an entity is within certain geometry.
Collision triggers can be configured in the collision trigger component.
[image:collision_trigger_config]

Collision trigger source component can be added to object/character/creation entities,
giving the entity additional geometry to collide with collision triggers.
Use this node to either enable or disable collision trigger source.

# Example
In this example, we activate the collision trigger source on the entity
when the tab is selected.
[image:activate_disable_collision_trigger_source_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the collision trigger source component,
  this node raises "Entity component does not exist" error.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:activate_disable_collision_trigger]
* [node:activate_disable_collision_trigger_source]
* [node:when_entering_collision_trigger]
* [node:when_exiting_collision_trigger]

# Authors
* kokokokomi222