# Summary
Triggers when an entity is created.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that is created.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if the entity was created dynamically.

# Usage
Use this node to listen to event where entity is created.

# Example
In this example, when entity with the node graph is created,
it plays a timed VFX (`47`, "White Appearing Dust") at the entity.
[image:when_entity_is_created_example]

# Notes
* Stage, player, and character entity all trigger this event.
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].

# Performance
This node took ~1 units to run on average.

# See Also
* [node:create_entity]
* [node:create_prefab]

# Authors
* kokokokomi222