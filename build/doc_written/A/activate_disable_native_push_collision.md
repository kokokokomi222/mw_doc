# Summary

[early_info]

Sets native push collidability.

# Input Parameters
* [input:Creation_Entity] (Entity) - Complex creation entity to set the native push collidability for.
* [input:Native_Push_Collision_ID] (Integer) - ID for the native push collision. e.g. `1`
* [input:Activate] (Boolean) - If `Yes`, push collision is enabled. If `No`, it is disabled.

# Usage
v7.2 introduced push collision, which can be configured for complex creation entities.
Each entity has one to several native collision geometry that can be independently enabled.
This defines collision with characters or other creations.
If the push collision is turned off,
this complex creation entity can walk through characters and other creations,
but it will still collide with object entities and react to creation disruptor device.

[image:native_push_collision_config]

Use this node to either enable or disable this native push collisions.

# Example
In this example, we have a large hydro slime that has native push collision enabled.
[image:native_push_collision_example]
We disable the native push collision when player selects the tab.
[image:activate_disable_native_push_collision_example]

# Notes
* If [input:Target_Entity] is not a creation entity,
  this node raises "Entity does not exist" error (which can be misleading).
* If [input:Target_Entity] is a creation entity, but not a complex creation entity,
  this node is no-op.
* If [input:Native_Push_Collision_ID] is not an ID of a native push collision,
  this node is no-op.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:activate_disable_native_collision]
* [node:activate_disable_extra_push_collision]

# Authors
* kokokokomi222