# Summary
Returns the upward vector of the entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to get the upward vector from.

# Output Values
* [output:Upward_Vector] (3D Vector) - Normalized upward vector in the world coordinate space. This is always a unit vector.

# Usage
Use this node to get the normalized upward vector of an entity.
This is `(0, 1, 0)` vector in the entity's local coordinate space,
transformed to the world coordinate space
and then normalized to a unit vector.

Positive Y direction is upward for characters and creatures,
the direction toward sky.

# Example
In this example, we consider the character that selected the tab.
Iterating a value from 1 to 5,
we create a prefab at the location
`i * (character's upward vector) + (character location)`,
where `i` is the value we are iterating.
The result is that we get 5 prefabs created in a line going upward from our character
(one of the ball is not visible in the screenshot, because the first ball is in the character's body).
[image:get_entity_upward_vector_example]
[image:get_entity_upward_vector_for_character]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and returns `(0, 1, 0)`.
* If [input:Target_Entity] is scaled, [output:Upward_Vector] is still a unit vector.
* If [input:Target_Entity] is the stage entity, it always returns `(0, 1, 0)`.
* If [input:Target_Entity] is a player entity, it returns the same upward vector as its character.
  In classic mode, all characters have the same location and rotation, so there is no ambiguity.


# Performance
This node took ~6 units to run on average.

# See Also
* [node:get_entity_forward_vector]
* [node:get_entity_right_vector]

# Authors
* kokokokomi222