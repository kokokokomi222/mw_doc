# Summary
Sets collision trigger.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with collision trigger component.
* [input:Trigger_ID] (Integer) - ID for a collision trigger. e.g. `1`
* [input:Activate] (Boolean) -If `Yes`, collision trigger is enabled. If `No`, it is disabled.

# Usage
Collision triggers are used to detect whether an entity is within certain geometry.
Collision triggers can be configured in the collision trigger component.
[image:collision_trigger_config]

Use this node to enable and disable collision triggers.

# Example
In this example, we enable the collision trigger if a player selects the tab.
[image:activate_disable_collision_trigger_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the collision trigger component,
  this node raises "Entity component does not exist" error.
* If [input:Trigger_ID] is not an ID of a collision trigger,
  this node is no-op.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:when_entering_collision_trigger]
* [node:when_exiting_collision_trigger]
* [node:get_all_entities_within_the_collision_trigger]
* [node:activate_disable_collision_trigger_source]

# Authors
* kokokokomi222
