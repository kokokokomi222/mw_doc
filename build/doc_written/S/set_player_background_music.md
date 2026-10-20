# Summary
Plays a music.

# Input Parameters
* [input:Target_Entity] (Entity) - Player entity to play the music for.
* [input:Background_Music_Index] (Integer) - ID of the music. e.g. `10109`
* [input:Start_Time] (Floating Point Numbers) - Time to start the music at. Unit is seconds.
* [input:End_Time] (Floating Point Numbers) - Time to stop the music at. Unit is seconds.
* [input:Volume] (Integer) - Volume of the music. `0` means mute, `100` means full gain. This value scales the amplitude linearly. Must be between `0` and `100`, inclusive.
* [input:Loop_Playback] (Boolean) - If `Yes`, loop the music, repeating it indefinitely.
* [input:Loop_Interval] (Floating Point Numbers) - Amount of silence before looping the music. Unit is seconds.
* [input:Playback_Speed] (Floating Point Numbers) - Speed to play the music at. `1.0` means default speed. Must be between `0.5` and `2.0`, inclusive.
* [input:Enable_Fade_In/Out] (Boolean) - If `Yes`, fade the music in and out. See notes for details.

# Usage
Miliastra stages can play various built-in Genshin music for players.
The music can be browsed from Manage Background Music menu.
Background music can be set here,
and that will play the music for all players when the stage starts
without using any node graphs.
[image:manage_background_music_menu]
[image:manage_background_music_window]

Use this node to play music from node graph.
Available music can be browsed [https://kokokokomi222.github.io/mw_doc/music/:here].

Use [node:player_plays_one_shot_2d_sound_effect] or [node:add_sound_effect_player]
to play a sound effect instead.

# Example
In this example, the music with ID `10130` (Die Mittsommernacht-Fantasie)
starts playing for the player when the tab is selected by the player.
It plays the section starting from 3:00 (180 seconds from start) to 3:10 (190 seconds from start),
at volume 50 (half the amplitude, i.e. ~6dB softer than full gain).
It loops the section with 3 second silence between the loops.
The music is played at the normal speed.
The music fades in at the beginning of the section and fades out at the end of the section.
The fade is linear.
In this particular example, the fade-in took 5 seconds and the fade-out took 2 seconds
(see notes for more detail on fade duration).

[image:set_player_background_music_example]

The envelope looks like the following when graphed:

[image:music_envelope]

# Notes
* If this node cannot run due to any of the problems listed below,
  it will not cause any side effect.
  Any music that is already playing will continue to play.
* [input:Background_Music_Index] can be selected by clicking on the magnifier icon on the right.
  Clicking the play button plays the music for preview.
* If [input:Target_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist).
* If [input:Background_Music_Index] is not an ID for a music,
  this node is no-op.
* If [input:Start_Time] is negative, this node is no-op.
* If [input:End_Time] exceeds the music duration,
  this value is clamped to the music duration.
* If [input:Start_Time] is greater than [input:End_Time],
  this node is no-op.
  If the two values are equal, this node runs
  (with [input:Enable_Fade_In/Out] set to `Yes`, it will even play a bit of music).
* If [input:Volume] is negative or if it exceeds `100`, this node is no-op.
* Because [input:Volume] scales the amplitude linearly,
  it does not scale linearly with human perception, which is logarithmic.
  If you are making a volume slider, you may want to account for this.
  See [node:adjust_player_background_music_volume] for an example.
* If [input:Loop_Playback] is `Yes` and [input:Loop_Interval] is negative, this node is no-op.
  If [input:Loop_Playback] is `No`, [input:Loop_Interval] can be any value.
* [input:Loop_Interval] is not scaled by [input:Playback_Speed].
  For example, if [input:Loop_Interval] is `3` and [input:Playback_Speed] is `1.5`,
  the loop interval will take 3 seconds.
* [input:Playback_Speed] is less than `0.5` or greater than `2.0`,
  this node is no-op.
* Unlike sound effects, [input:Playback_Speed] does not apply pitch correction.
  Faster speed means the music plays at higher pitch.
* Fade in/out is linear on amplitude.
  The fade-out seems to always take two seconds,
  but fade-in seems to vary in time, ranging from 2 to 5 seconds.
  This needs more testing.
* If [input:Enable_Fade_In/Out] is set to `Yes`
  and the part of the music played is short,
  It can increase the duration of the played part of the music.
  This needs more testing.
* [input:Enable_Fade_In/Out] behaves strangely with [input:Playback_Speed].
  It can increase the duration of the played part of the music.
  This needs more testing.
* Background music may continue to play during loading out of the game.
  You may want to stop the music before settling the stage.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:adjust_player_background_music_volume]
* [node:start_pause_player_background_music]

# Authors
* kokokokomi222