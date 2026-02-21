# Summary
Triggers on the stage when an entity is destroyed.

# Output Values
* [output:Event_Source_Entity] (Entity) - Destroyed entity.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if the entity was created dynamically.
* [output:Location] (3D Vector) - Location of the destroyed entity.
* [output:Orientation] (3D Vector) - Rotation of the destroyed entity.
* [output:Entity_Type] (Enumeration) - One of `Stage`, `Object`, `Player`, `Character`, and `Creation`.
* [output:Faction] (Faction) - Faction of the destroyed entity.
* [output:Damage_Source] (Entity) - Entity that caused destruction of the entity by making it reach 0 HP. Can be `0`.
* [output:Owner_Entity] (Entity) - Owner of the destroyed entity. `0` if the owner does not exist.
* [output:Custom_Variable_Component_Snapshot] (Custom Variable Snapshot) - Snapshot of the custom variables of the destroyed entity. See [node:query_custom_variable_snapshot].

# Usage
**This node only works with the stage entity!**
This node must be in a node graph added to the stage entity.
When an entity is destroyed, it cannot run node graphs anymore and trigger events.
The stage is listening to destruction of other entities.

The difference between "remove" and "destroy" is important to understand.
Firstly, "destroy" could be thought of as a more specific version of "remove".
"Remove" and "destroy" both trigger [node:when_entity_is_removed_destroyed],
but only "destroy" triggers this node.
When a creation is "destroyed", it plays its death animation and drops energy particles/orbs.
However, if it is "removed", it simply disappears into thin air.
This node receives much more information about the removed entity than [node:when_entity_is_removed_destroyed].

Entities can be destroyed by the following methods:

* When a character/creation/object's HP reaches zero.
* Calling [node:destroy_entity] on an entity.

# Example
In this example, we have a node graph for the stage that is listening to the entity destruction event.
When the destroyed entity is a creation and is in faction `3`,
then we increment the achievement progress of the player that destroyed the entity
by the value of the `score` custom variable from the destroyed entity.
[image:query_custom_variable_snapshot_example]

# Notes
* [output:Location] and [output:Orientation] works with "basic motion device" movement.
  However, it does not reflect the movement from "projectile motion device" or "follow motion device".
  The entity will report the original starting location/rotation instead.
* If the entity was destroyed by [node:destroy_entity], [output:Damage_Source] is `0`.

# Performance
When repeatedly creating and destroying one entity with the default setting,
this node took ~3 unit to run on average.

# See Also
* [node:when_entity_is_removed_destroyed]
* [node:query_custom_variable_snapshot]
* [node:destroy_entity]

# Authors
* kokokokomi222