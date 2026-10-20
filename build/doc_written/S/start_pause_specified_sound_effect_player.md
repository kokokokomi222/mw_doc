# Summary
Pause or resume a looping sound effect player.

# Input Parameters
* [input:Target_Entity] (Entity) -Entity that has the looping sound effect player.
* [input:SFX_Player_ID] (Integer) - ID of the looping sound effect player.
* [input:Recover] (Boolean) - If `No`, pause the sound. If `Yes`, resume the sound.

# Usage
Use this node to pause or resume a looping sound effect played by [node:add_sound_effect_player].

[input:SFX_Player_ID] can be obtained from [node:add_sound_effect_player].

# Example
In this example, we pause the sound when the first tab is selected.
We resume the sound when the second tab is selected.

[image:start_pause_specified_sound_effect_player_example]

# Notes
* If [input:Target_Entity] is not an entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the Sound Effect Player component,
  this node raises "Entity component does not exist" error.
* If [input:SFX_Player_ID] is not an ID for a currently playing looping sound effect,
  this node is no-op.
* If [input:Recover] is `Yes` and the sound is already playing, this node is no-op.
  If [input:Recover] is `No` and the sound is already paused, this node is no-op.
* If the sound is paused during loop interval silence,
  it accounts for the duration of the interval correctly.
  For example, if the loop interval is set to 5 seconds,
  this node pauses the sound 2 seconds into the loop interval silence,
  and this node resumes the sound later,
  then the silence continues for 3 more seconds before starting the sound.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:add_sound_effect_player]
* [node:close_specified_sound_effect_player]

# Authors
* kokokokomi222