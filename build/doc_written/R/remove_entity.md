# Summary
Removes an entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to remove.

# Usage
The difference between "remove" and "destroy" is important to understand.
Firstly, "destroy" could be thought of as a more specific version of "remove".
"Remove" and "destroy" both trigger [node:when_entity_is_removed_destroyed],
but only "destroy" triggers [node:when_entity_is_destroyed].
When a creation is "destroyed", it plays its death animation and drops energy particles/orbs.
However, if it is "removed", it simply disappears into thin air.

# Example
This example removes all entities with a specific prefab ID when the tab is selected.
A local variable is used to temporarily store the list of all relevant entities.
If the list was directly connected to the loop without using the local variable,
this node graph will not work as intended 
because the [node:get_entities_with_specified_prefab_on_the_field]
node will be evaluated every iteration and the list will change.
[image:set_local_variable_example]

# Notes
* If the removed entity was statically created and thus have a GUID,
  then this entity can be recreated using [node:create_entity].
* If [input:Target_Entity] was set as an invalid entity `0`, this node is no-op.
* If [input:Target_Entity] is the stage entity, this node is no-op. Stage cannot be removed.
* If [input:Target_Entity] is a player entity, this node is no-op.
  Player cannot be removed by this node, but it is removed if the player leaves the stage.
* If [input:Target_Entity] is a character entity, this node is no-op.
  Character cannot be removed by this node, but it is removed if the owning player leaves the stage.
  However, it can be destroyed by [node:destroy_entity].

# Performance
To remove object entities with default setting, it took ~24 units to run on average.
Whether the stage is listening to [node:when_entity_is_removed_destroyed]
does not seem to visibly affect the performance of this node.

# See Also
* [node:destroy_entity]
* [node:when_entity_is_removed_destroyed]

# Authors
* kokokokomi222