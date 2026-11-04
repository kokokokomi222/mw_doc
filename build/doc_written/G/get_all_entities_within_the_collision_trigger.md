# Summary
Gets the list of entities in the collision trigger.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that has the collision trigger component.
* [input:Trigger_ID] (Integer) - ID of the collision trigger. e.g. `1`

# Output Values
* [output:Entity_List] (Entity List) - List of the entities in the collision trigger.

# Usage
Collision triggers are used to detect whether an entity is within certain geometry.
Collision triggers can be configured in the collision trigger component.
[image:collision_trigger_config]

Use this node to get all entities that is colliding with the collision trigger.

# Example
In this example, we apply a unit status to all entities that are in the collision trigger
when the tab is selected.
[image:get_all_entities_within_the_collision_trigger_example]

# Notes
* Collision triggers can be configured to only trigger with specified type of entities
  (characters, objects, and/or creations).
  If an entity is not one of the specified type,
  this node will not include it in its return value.
  [image:collision_trigger_target_type]
* Characters and creations have their inherent collision trigger source geometry,
  so nothing needs to be configured on characters and creations
  to be included in this function's return value.
  However, one needs to add collision trigger source component for object entities
  to be included in this function's return value.
  Characters and creations can also add additional collision trigger source component.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:activate_disable_collision_trigger]
* [node:activate_disable_collision_trigger_source]
* [node:when_entering_collision_trigger]
* [node:when_exiting_collision_trigger]

# Authors
* kokokokomi222