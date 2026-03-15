# Summary
Returns the forward vector of the entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to get the forward vector from.

# Output Values
* [output:Forward_Vector] (3D Vector) - Normalized forward vector in the world coordinate space. This is always a unit vector.

# Usage
Use this node to get the normalized forward vector of an entity.
This is `(0, 0, 1)` vector in the entity's local coordinate space,
transformed to the world coordinate space
and then normalized to a unit vector.

Positive Z direction is forward for characters and creatures,
the direction that eyes are looking toward.

# Example
In this example, we consider the character that selected the tab.
Iterating a value from 1 to 5,
we create a prefab at the location
`i * (character's forward vector) + (character location)`,
where `i` is the value we are iterating.
The result is that we get 5 prefabs created in a line going forward from our character.
[image:get_entity_forward_vector_example]
[image:get_entity_forward_vector_for_character]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and returns `(0, 0, 1)`.
* If [input:Target_Entity] is scaled, [output:Forward_Vector] is still a unit vector.
* If [input:Target_Entity] is the stage entity, it always returns `(0, 0, 1)`.
* If [input:Target_Entity] is a player entity, it returns the same forward vector as its character.
  In classic mode, all characters have the same location and rotation, so there is no ambiguity.

# Performance
This node took ~6 units to run on average.

# See Also
* [node:get_entity_upward_vector]
* [node:get_entity_right_vector]

# Authors
* kokokokomi222