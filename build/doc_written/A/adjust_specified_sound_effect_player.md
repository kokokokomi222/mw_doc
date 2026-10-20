# Summary
Adjusts the volume and playback speed of a looping sound effect.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that has the looping sound effect player.
* [input:SFX_Player_ID] (Integer) - ID of the looping sound effect player.
* [input:Volume] (Integer) - Volume of the sound. `0` means mute, `100` means full gain. This value scales the amplitude linearly. Must be between `0` and `100`, inclusive.
* [input:Playback_Speed] (Floating Point Numbers) - Speed to play the sound at. `1.0` means default speed. Must be between `0.5` and `2.0`, inclusive.

# Usage
This node lets us adjust the volume and speed
of a looping sound effect played by [node:add_sound_effect_player].

[input:SFX_Player_ID] can be obtained from [node:add_sound_effect_player].

# Example
In this example, we adjust the volume of the sound to `50`
and speed of the sound to `0.5`
when the signal named `Slow Motion` is received.

[image:adjust_specified_sound_effect_player_example]

# Notes
* If [input:Target_Entity] is not an entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the SFX Player component,
  this node raises "Entity component does not exist" error.
* If [input:SFX_Player_ID] is not an ID for a currently playing looping sound effect,
  this node is no-op.
* If [input:Volume] is negative or if it exceeds `100`, this node is no-op.
* Because [input:Volume] scales the amplitude linearly,
  it does not scale linearly with human perception, which is logarithmic.
  If you are making a volume slider, you may want to account for this.
  See [node:adjust_player_background_music_volume] for an example.
* If [input:Playback_Speed] is less than `0.5` or greater than `2.0`,
  this node is no-op.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:add_sound_effect_player]

# Authors
* kokokokomi222