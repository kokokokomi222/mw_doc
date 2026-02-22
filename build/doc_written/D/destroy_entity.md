# Summary
Destroys an entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to destroy.

# Usage
The difference between "remove" and "destroy" is important to understand.
Firstly, "destroy" could be thought of as a more specific version of "remove".
"Remove" and "destroy" both trigger [node:when_entity_is_removed_destroyed],
but only "destroy" triggers [node:when_entity_is_destroyed].
When a creation is "destroyed", it plays its death animation and drops energy particles/orbs.
However, if it is "removed", it simply disappears into thin air.

# Example
In this example, we added a collision trigger to the character.
We set "Effective Target" to "Creations".
[image:destroy_entity_collision_trigger_setting]

In the node graph added to the character,
we destroy the entity that entered this collision trigger area.
As a result, any creation that our character touches will be destroyed.
[image:destroy_entity_example]

# Notes
* If the destroyed entity was statically created and thus have a GUID,
  then this entity can be recreated using [node:create_entity].
* If [input:Target_Entity] was set as an invalid entity `0`, this node is no-op.
* If [input:Target_Entity] is the stage entity, this node is no-op. Stage cannot be destroyed.
* If [input:Target_Entity] is a player entity, this node is no-op. Player cannot be destroyed.
* If [input:Target_Entity] is a character entity, the character's HP is set to 0, plays the death animation, and dies.

# Performance
To destroy object entities with default setting, this node took ~36 units to run on average.
Whether the stage is listening to [node:when_entity_is_destroyed] and/or [node:when_entity_is_removed_destroyed]
does not seem to visibly affect the performance of this node.

# See Also
* [node:remove_entity]
* [node:when_entity_is_removed_destroyed]
* [node:when_entity_is_destroyed]

# Authors
* kokokokomi222