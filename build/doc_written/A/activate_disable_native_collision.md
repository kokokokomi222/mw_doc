# Summary
Sets native collidability.

# Input Parameters
* [input:Target_Entity] (Entity) - Object entity to set the collision for.
* [input:Activate] (Boolean) - If `Yes`, native collision is enabled. If `No`, it is disabled.

# Usage
Native collision is used so that characters can collide with the entity.
Object entity can have its native collision configured in the entity details panel.

[image:native_collision_config]

Use this node to either enable or disable this native collision.

If you need to add more character collision geometry to the entity,
use extra collision component.
If you need to detect whether an entity is within certain geometry,
use collision trigger component instead.

# Example
In this example, this entity's native collision is disabled if a player selects a tab.
[image:activate_disable_native_collision_example]

# Notes
* If [input:Target_Entity] is not an exiting entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] is not an object entity,
  this node is no-op.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:activate_disable_native_collision_climbability]
* [node:activate_disable_extra_collision]

# Authors
* kokokokomi222