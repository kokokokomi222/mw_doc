# Summary
Sets extra collidability.

# Input Parameters
* [input:Target_Entity] (Entity) - Object entity to set the extra collision for.
* [input:Extra_Collision_ID] (Integer) - ID for the extra collision. e.g. `1`
* [input:Activate] (Boolean) - If `Yes`, extra collision is enabled. If `No`, it is disabled.

# Usage
Native collision is used so that characters can collide with the entity.
Extra collision component can be used to add or change the collision geometry.

[image:extra_collision_config]

Use this node to either enable or disable this extra collisions.

You may want to use decorations instead, which can be configured under model.
If you need to detect whether an entity is within certain geometry,
use collision trigger component instead.

# Example
In this example, this entity's extra collision is disabled if a player selects a tab.
[image:activate_disable_extra_collision_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the extra collision component,
  this node raises "Entity component does not exist" error.
* If [input:Extra_Collision_ID] is not an ID of an extra collision,
  this node is no-op.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:activate_disable_native_collision]
* [node:activate_disable_extra_collision_climbability]

# Authors
* kokokokomi222