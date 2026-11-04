# Summary
Sets native collision climbability.

# Input Parameters
* [input:Target_Entity] (Entity) - Object entity to set the climbability for.
* [input:Activate] (Boolean) - If `Yes`, climbability is enabled. If `No`, it is disabled.

# Usage
Native collision is used so that characters can collide with the entity.
Object entity can have its native collision configured in the entity details panel.

[image:native_collision_config]

Use this node to set the climbability of the native collision.
Characters will be able to climb this entity if climbability is enabled.

# Example
In this example, this entity's native collision climbability is disabled if a player selects a tab.
[image:activate_disable_native_collision_climbability_example]

# Notes
* If [input:Target_Entity] is not an exiting entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] is not an object entity,
  this node is no-op.
* If the native collision is currently disabled,
  this node still modifies the climbability.
  For example, the entity is not climbable after the below node graph executes
  even if it was initially climbable.
  [image:set_native_climbability_is_independent]

# Performance
This node took ~2 units to run on average.

# See Also
* [node:activate_disable_native_collision]
* [node:activate_disable_extra_collision_climbability]

# Authors
* kokokokomi222