# Summary
Triggers when an entity enters a collision trigger.

# Output Values
* [output:Entering_Entity] (Entity) - Entity that entered the collision trigger.
* [output:Entering_Entity_GUID] (GUID) - GUID of the above entity. `0` if created dynamically.
* [output:Trigger_Entity] (Entity) - Entity that has the collision trigger component.
* [output:Trigger_Entity_GUID] (GUID) - GUID of the above entity. `0` if created dynamically.
* [output:Trigger_ID] (Integer) - ID of the collision trigger. e.g. `1`

# Usage
Collision triggers are used to detect whether an entity is within certain geometry.
Collision triggers can be configured in the collision trigger component.
[image:collision_trigger_config]

Use this node to listen to the event when an entity enters a collision trigger,
i.e. when the entering entity's collision trigger source
collides with the trigger entity's collision trigger.
This node must be in a node graph that is mounted on the entity with collision trigger component.

# Example
In this example, we show a text bubble when an entity enters the collision trigger.
[image:when_entering_collision_trigger_example]

# Notes
* Collision triggers can be configured to only trigger with specified type of entities
  (characters, objects, and/or creations).
  If the entering entity is not one of the specified type,
  this node will not trigger.
  [image:collision_trigger_target_type]
* Characters and creations have their inherent collision trigger source geometry,
  so nothing needs to be configured on characters and creations to make this node function.
  However, one needs to add collision trigger source component for object entities
  to make this node function.
  Characters and creations can also add additional collision trigger source component.
* This node triggers if an entity is created that collides with the trigger geometry.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:activate_disable_collision_trigger]
* [node:activate_disable_collision_trigger_source]
* [node:when_exiting_collision_trigger]
* [node:get_all_entities_within_the_collision_trigger]

# Authors
* kokokokomi222
