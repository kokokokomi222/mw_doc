# Summary
Returns whether the entity is on the field.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to test whether it is on the field.

# Output Values
* [output:On_the_Field] (Boolean) - `Yes` if the entity is on the field, `No` otherwise.

# Usage
This node checks whether an entity is on the field.
When we store an entity as a variable, it only stores the entity ID.
If the entity were to be removed/destroyed and then recreated with [node:create_entity],
the entity gets a new entity ID.
When the old entity ID stored in the variable is queried with this node,
it will say that the entity is not on the field.
The only exception is the character entities.
Read the "Notes" section below for detail.

# Example
In this example, we get the entity stored in the node graph variable named `boss`
and check whether this entity is still on the field.
If yes, we set the custom variable named `message` to `"Beat the boss first to continue"`.
If no, we send a signal named `Teleport to next zone`.
[image:query_if_entity_is_on_the_field_example]

# Notes
* If [input:Target_Entity] is invalid entity (e.g. default entity with ID 0),
  this node returns `No`.
* The stage entity is always on the field.
* If the player is in the game, the player entity is considered to be on the field.
  If the player is removed from disconnecting or quitting,
  then the player is now considered to be not on the field.
* When a character is destroyed, the character is still considered to be on the field.
  After the character revives the entity ID still remains the same.
  If the character is removed from the owner player disconnecting or quitting,
  then the character is now considered to be not on the field.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:get_all_entities_on_the_field]
* [node:get_specified_type_of_entities_on_the_field]
* [node:get_entities_with_specified_prefab_on_the_field]

# Authors
* kokokokomi222