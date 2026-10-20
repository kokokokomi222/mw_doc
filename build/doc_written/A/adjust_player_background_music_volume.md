# Summary
Adjusts music volume.

# Input Parameters
* [input:Target_Entity] (Entity) - Player entity to adjust the music volume for.
* [input:Volume] (Integer) - Volume of the music. `0` means mute, `100` means full gain. This value scales the amplitude linearly. Must be between `0` and `100`, inclusive.

# Usage
Use this to adjust background music volume for players.
Use [node:set_player_background_music] to set and start the music.

# Example
In this example, we have a node graph mounted on the player.
When it receives `Music Volume Change` signal,
where `volume` is a floating point number ranging from `0` to `100`,
it computes the reasonable amplitude scale for the requested volume change
(the formula used here is `100 * 10^((100-volume)*0.015)`)
and use this node to change the music volume for the player.
[image:adjust_player_background_music_volume_example]

# Notes
* If [input:Target_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist).
* If [input:Volume] is negative or if it exceeds `100`, this node is no-op.
* Because [input:Volume] scales the amplitude linearly,
  it does not scale linearly with human perception, which is logarithmic.
  If you are making a volume slider, you may want to account for this.
  See the above example.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_player_background_music]
* [node:start_pause_player_background_music]

# Authors
* kokokokomi222