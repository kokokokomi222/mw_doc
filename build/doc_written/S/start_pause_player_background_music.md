# Summary
Pauses or resumes the music.

# Input Parameters
* [input:Target_Entity] (Entity) - Player entity to pause/resume the music for.
* [input:Recover] (Boolean) - If `Yes`, resume the music. If `No`, pause the music.

# Usage
Use this node to pause or resume the background music for a player.
Use [node:set_player_background_music] to set and start the music.

# Example
In this example, we pause the music for the player that selects the first tab.
We resume the music for the player that selects the second tab.
[image:start_pause_player_background_music_example]

# Notes
* The word "resume" is probably more appropriate for the node name than "start".
* If [input:Target_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist).
* If [input:Recover] is `Yes` and the music is already playing, this node is no-op.
  If [input:Recover] is `No` and the music is already paused, this node is no-op.
* If the music is paused during loop interval silence,
  it accounts for the duration of the interval correctly.
  For example, if the loop interval is set to 5 seconds,
  this node pauses the music 2 seconds into the loop interval silence,
  and this node resumes the music later,
  then the silence continues for 3 more seconds before starting the music.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:set_player_background_music]
* [node:adjust_player_background_music_volume]

# Authors
* kokokokomi222