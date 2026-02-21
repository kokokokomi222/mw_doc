# Summary
Triggers on the stage when an entity is removed.

# Output Values
* [output:Event_Source_GUID] (GUID) - GUID of the removed entity. `0` if the entity was created dynamically.

# Usage
**This node only works with the stage entity!**
This node must be in a node graph added to the stage entity.
When an entity is removed, it cannot run node graphs anymore and trigger events.
The stage is listening to destruction of other entities.

The difference between "remove" and "destroy" is important to understand.
Firstly, "destroy" could be thought of as a more specific version of "remove".
"Remove" and "destroy" both trigger this node,
but only "destroy" triggers [node:when_entity_is_destroyed].
When a creation is "destroyed", it plays its death animation and drops energy particles/orbs.
However, if it is "removed", it simply disappears into thin air.
This node receives much less information about the removed entity than [node:when_entity_is_destroyed].

Entities can be destroyed by the following methods:

* When a character/creation/object's HP reaches zero.
* Calling [node:destroy_entity] on an entity.

Entities can also be removed by the following methods:

* Calling [node:remove_entity] on an entity.
* Calling [node:activate_disable_entity_deployment_group] to disable entities.
* When a player leaves the stage (either by quitting or settling),
  player and player's characters are removed.

# Example
**TO BE ADDED**

# Notes
* **TO BE ADDED**

# Performance
When repeatedly creating and destroying one entity with the default setting,
this node took ~1 unit to run on average.

# See Also
* [node:when_entity_is_destroyed]
* [node:remove_entity]
* [node:destroy_entity]

# Authors
* kokokokomi222
