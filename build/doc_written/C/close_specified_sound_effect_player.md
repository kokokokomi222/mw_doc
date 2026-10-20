# Summary
Stops a looping sound effect player.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that has the looping sound effect player.
* [input:SFX_Player_ID] (Integer) - ID of the looping sound effect player.

# Usage
Use this node to stop a looping sound effect played by [node:add_sound_effect_player].
It will immediately stop making the sound
and the sound effect player will be removed from the entity.

[input:SFX_Player_ID] can be obtained from [node:add_sound_effect_player].

# Example
In this example, we stop the sound when the signal named `Stop Sound` is received.

[image:close_specified_sound_effect_player_example]

# Notes
* If [input:Target_Entity] is not an entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the Sound Effect Player component,
  this node raises "Entity component does not exist" error.
* If [input:SFX_Player_ID] is not an ID for a currently playing looping sound effect,
  this node is no-op.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:add_sound_effect_player]
* [node:start_pause_specified_sound_effect_player]

# Authors
* kokokokomi222