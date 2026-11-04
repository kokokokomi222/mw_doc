# Summary

[early_info]

Sets extra push collidability.

# Input Parameters
* [input:Creation_Entity] (Entity) - Complex creation entity to set the push collidability for.
* [input:Extra_Push_Collision_ID] (Integer) - ID for the extra push collision. e.g. `1`
* [input:Activate] (Boolean) - If `Yes`, push collision is enabled. If `No`, it is disabled.

# Usage
v7.2 introduced push collision, which can be configured for complex creation entities.
Each entity has one to several native collision geometry that can be independently enabled.
This defines collision with characters or other creations.
If the push collision is turned off,
this complex creation entity can walk through characters and other creations,
but it will still collide with object entities and react to creation disruptor device.

[image:native_push_collision_config]

Complex creations can also have extra push collision component,
adding more push collision geometry.

[image:extra_push_collision_config]

Use this node to either enable or disable this extra push collisions.
You may want to consider using decorations instead,
but decoration collisions cannot be toggled from node graphs.

# Example
In this example, we have a large hydro slime that has an extra push collision component.
[image:extra_push_collision_config_example]
We disable the extra push collision when player selects the tab.
[image:activate_disable_extra_push_collision_example]

# Notes
* If [input:Target_Entity] is not an existing entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have an extra push collision component,
  this node raises "Entity component does not exist" error.
* If [input:Extra_Push_Collision_ID] is not an ID of an extra push collision,
  this node is no-op.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:activate_disable_native_collision]
* [node:activate_disable_extra_push_collision]

# Authors
* kokokokomi222