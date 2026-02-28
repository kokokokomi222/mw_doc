# Summary
Gets the speed and the velocity of a character.

# Input Parameters
* [input:Character_Entity] (Entity) - Character to get the speed from

# Output Values
* [output:Current_Speed] (Floating Point Numbers) - Speed of the character. Unit is meter / second.
* [output:Velocity_Vector] (3D Vector) - Velocity of the character. Unit of the components of the vector is meter / second.

# Usage
To use this node, first a unit status must be created with an effect "Monitor Movement Rate".
The parameters of this unit status is not relevant for this node: any values will work.
Those parameters are for [node:when_character_movement_spd_meets_condition].
[image:when_character_movement_spd_meets_condition_unit_status_configuration]
Next, character must have the unit status so that it can monitor the speed.
You can also use [node:add_unit_status] to add the unit status to the character.
[image:when_character_movement_spd_meets_condition_character_configuration]
This node functions even if the condition of the effect is not satisfied,
as long as the effect is on the character.

# Example
In this example, the node graph is on the character entity.
We print the character's speed and the y-component of the character's velocity.
[image:query_characters_current_movement_spd_example]

# Notes
* If called in [node:when_character_movement_spd_meets_condition],
  [output:Current_Speed] of this node is always equal to
  [output:Current_Movement_SPD] of the event node.
* Square of [output:Current_Speed] should be approximately equal to
  the sum of squares of the components of [output:Velocity_Vector].
* The walking speed of Manekin/Manekina is roughly 5.
  Sprinting speed of Manekin/Manekina is roughly 8, but it can reach around 10 briefly.
* The character speed is measured very inconsistently on a moving platform.
  Even while the platform is moving at constant speed without turning,
  the speed seems to be sometimes relative to the platform,
  and sometimes it seems relative to the world.
  This is probably because the server doesn't know the precise local position of the character immediately.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:when_character_movement_spd_meets_condition]

# Authors
* kokokokomi222