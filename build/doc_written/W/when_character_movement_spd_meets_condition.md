# Summary
Triggers when "Monitor Movement Rate" unit status effect meets the condition.

# Output Values
* [output:Event_Source_Entity] (Entity) - Character entity that has the "Monitor Movement Rate" unit status effect and met its condition.
* [output:Event_Source_GUID] (GUID) - Always `0`.
* [output:Unit_Status_Config_ID] (Config ID) - Configuration ID of the unit status. e.g. `1012345678`.
* [output:Condition:_Comparison_Type] (Enumeration) - One of `Less Than`, `Less Than or Equal To`, `Greater Than`, `Greater Than or Equal To`. It cannot be `Equal To`.
* [output:Condition:_Comparison_Value] (Floating Point Numbers) - Speed to compare with, as specified in the "Monitor Movement Rate" unit status effect. Unit is meter/second.
* [output:Current_Movement_SPD] (Floating Point Numbers) - Current speed of the character entity. Unit is meter/second.

# Usage
To use this node, first a unit status must be created with an effect "Monitor Movement Rate".
In the example below, this effect will trigger when the character's speed is greater than `5.00` meter/second,
and it will not trigger again for `1.50` seconds while in cooldown.
[image:when_character_movement_spd_meets_condition_unit_status_configuration]
Next, character must have the unit status so that it can monitor the speed.
You can also use [node:add_unit_status] to add the unit status to the character.
[image:when_character_movement_spd_meets_condition_character_configuration]

A character can have multiple "Monitor Movement Rate" unit status effects,
so [output:Unit_Status_Config_ID] can be used to tell them apart with [node:multiple_branches].

You may want to use [node:query_characters_current_movement_spd] instead if you just need to get the speed,
but you still need the unit status effect on the character.

# Example
In this example, when the character triggers the speed monitor,
we play a timed VFX `10002128` (Anemo Shockwave) at the character.
[image:when_character_movement_spd_meets_condition_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* Even if "Trigger CD" is set to `0.00` or negative value,
  this node only triggers about 2 times per second.
  So the lowest effective "Trigger CD" is roughly `0.5` seconds.
  There is a huge delay between character accelerating and this node triggering,
  and that may have to do with very infrequent event polling rate
  and/or server receiving the local position of the character late, but we cannot be sure.
* [output:Current_Movement_SPD] includes the vertical component.
  When falling or jumping, the character may have higher speed than expected.
* The walking speed of Manekin/Manekina is roughly 5.
  Sprinting speed of Manekin/Manekina is roughly 8, but it can reach around 10 briefly.
* The character speed is measured very inconsistently on a moving platform.
  Even while the platform is moving at constant speed without turning,
  the speed seems to be sometimes relative to the platform,
  and sometimes it seems relative to the world.
  This is probably because the server doesn't know the precise local position of the character immediately.

# Performance
This node took ~7 units to run on average.

# See Also
* [node:query_characters_current_movement_spd]

# Authors
* kokokokomi222