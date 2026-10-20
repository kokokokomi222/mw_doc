# Summary
Play a 2D sound effect.

# Input Parameters
* [input:Target_Entity] (Entity) - Player entity to play the sound for.
* [input:Sound_Effect_Asset_Index] (Integer) - ID of the sound asset. e.g. `50925`
* [input:Volume] (Integer) - Volume of the sound. `0` means mute, `100` means full gain. This value scales the amplitude linearly. Must be between `0` and `100`, inclusive.
* [input:Playback_Speed] (Floating Point Numbers) - Speed to play the sound at. `1.0` means default speed. Must be between `0.5` and `2.0`, inclusive.

# Usage
This node is a simple way to play a sound effect.
The sound will only play once.
It will not apply 3D sound effect,
so it will just play the sound in mono without any attenuation by distance.
With this node, you can also play a sound for just one player.

If you would like to repeat the sound on loop or use 3D sound effect,
use [node:add_sound_effect_player] instead.
If you want to play music, use [node:set_player_background_music] instead.

# Example
In this example, we play a sound asset `50918` (Hint UI_Heavy_Crafting Complete)
for the player that select the tab.
It plays at volume 50 (half the amplitude, i.e. ~6dB softer than full gain).
The sound plays at 1.5 times the speed.
[image:player_plays_one_shot_2d_sound_effect_example]

# Notes
* If [input:Target_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist).
* If [input:Sound_Effect_Asset_Index] is not an ID for a sound,
  this node is no-op.
* If [input:Volume] is negative or if it exceeds `100`, this node is no-op.
* [input:Playback_Speed] is less than `0.5` or greater than `2.0`,
  this node is no-op.
* Unlike music, [input:Playback_Speed] appears to apply pitch correction.
  Faster speed does not mean that the pitch is higher.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:add_sound_effect_player]

# Authors
* kokokokomi222