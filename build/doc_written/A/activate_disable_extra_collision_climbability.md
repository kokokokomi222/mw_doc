# Summary
Sets the climability of an extra collision.

# Input Parameters
* [input:Target_Entity] (Entity) - Active Entity
* [input:Extra_Collision_ID] (Integer) - Identifier for this Extra Collision
* [input:Activate] (Boolean) - Set to True to activate

# Usage
Native collision is used so that characters can collide with the entity.
Extra collision component can be used to add or change the collision geometry.

[image:extra_collision_config]

Use this node to set the climbability of the extra collision.
Characters will be able to climb this extra collision geometry if climbability is enabled.

# Example
In this example, this entity's extra collision climbability is disabled if a player selects a tab.
[image:activate_disable_extra_collision_climbability_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the extra collision component,
  this node raises "Entity component does not exist" error.
* If [input:Extra_Collision_ID] is not an ID of an extra collision,
  this node is no-op.
* If the extra collision is currently disabled,
  this node still modifies the climbability.
  For example, the extra collision is not climbable after the below node graph executes
  even if it was initially climbable.
  [image:set_extra_climbability_is_independent]

# Performance
This node took ~3 units to run on average.

# See Also
* [node:activate_disable_extra_collision]
* [node:activate_disable_native_collision_climbability]

# Authors
* kokokokomi222
