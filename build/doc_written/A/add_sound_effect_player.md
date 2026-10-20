# Summary
Plays a sound.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to play the sound from. It must have an SFX Player component.
* [input:Sound_Effect_Asset_Index] (Integer) - ID of the sound effect. e.g. `50925`
* [input:Volume] (Integer) - Volume of the sound. `0` means mute, `100` means full gain. This value scales the amplitude linearly. Must be between `0` and `100`, inclusive.
* [input:Playback_Speed] (Floating Point Numbers) - Speed to play the sound at. `1.0` means default speed. Must be between `0.5` and `2.0`, inclusive.
* [input:Loop_Playback] (Boolean) - If `Yes`, loop the sound, repeating it indefinitely.
* [input:Loop_Interval_Time] (Floating Point Numbers) - Amount of silence before looping the sound. Unit is seconds.
* [input:3D_Sound_Effect] (Boolean) - If `Yes`, play the sound using 3D sound effect, applying panning and distance based attenuation.
* [input:Range_Radius] (Floating Point Numbers) - Radius of the 3D sound effect. The sound will not be heard outside the range. Unit is in meters. Must be between `1.0` and `1000.0`.
* [input:Attenuation_Mode] (Enumeration) - One of `Linear Attenuation`, `Fast Then Slow`, and `Slow Then Fast`
* [input:Attachment_Point_Name] (String) - Name of the attachment point on the entity. e.g. `"GI_RootNode"`
* [input:Attachment_Point_Offset] (3D Vector) - Offset relative to the entity's attachment point. This transformation is in the entity coordinate space, taking entity transform into consideration.

# Output Values
* [output:SFX_Player_ID] (Integer) - ID of the resulting sound player if the sound is looping. `-1` if the node failed or if the sound is not looping.

# Usage
Miliastra can play sound effects from entities.
Sounds can be added to entities from SFX Player component,
and it will be played when the entity is created
without having to use node graphs.
[image:sfx_player_component]

Use this node to play sounds from node graph.
If you just need to play a sound once as a 2D effect,
use [node:player_plays_one_shot_2d_sound_effect] instead
which does the same thing but much simpler.
If you want to play music, use [node:set_player_background_music] instead.

Sound effects in Miliastra are capable of some basic 3D sound features.
It can do attenuation: making the sound softer as players get further away from the sound source.
It also utilizes stereo channels to give players the sense of the direction of the audio source.

The returned value [output:SFX_Player_ID] can be used by

* [node:close_specified_sound_effect_player] - to stop the sound
* [node:start_pause_specified_sound_effect_player] - to pause/resume the sound
* [node:adjust_specified_sound_effect_player] - to adjust the volume or the playback speed

# Example
In this example, the sound with ID `50662` (Object_Loop SFX_Hum_04)
starts playing at this entity when the tab is selected by a player.
It plays at volume 50 (half the amplitude, i.e. ~6dB softer than full gain).
It plays at twice the speed.
It will loop the sound with 0.5 second silence between the loops
(so it will play for 2.5 seconds, pause for 0.5 seconds, and then repeat the cycle).
It plays as a 3D effect, so the sound will be heard louder if the player is closer to the entity.
The 3D sound radius is set to 50 meters,
so if the player is more than 50 meters from the sound player,
the sound will not be heard by the player.
Attenuation mode is set to `Slow Then Fast`,
so the sound will get softer as player move away from the entity
but the rate at which the sound gets softer is low at first but increase as the distance increases.
The sound player is attached 1 meter higher than `GI_RootNode` attachment point.
The 1 meter here is not affected by the entity's zoom (see notes for more detail).
[image:add_sound_effect_player_example]

# Notes
* [input:Sound_Effect_Asset_Index] can be selected by clicking on the magnifier icon on the right.
  Clicking the play button plays the sound for preview.
* If [input:Target_Entity] is not an entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the SFX Player component,
  this node raises "Entity component does not exist" error.
* Stage entity and the player entities cannot have SFX Player component.
* If [input:Sound_Effect_Asset_Index] is not an ID for a sound,
  this node is no-op.
* If [input:Volume] is negative or if it exceeds `100`, this node is no-op.
* Because [input:Volume] scales the amplitude linearly,
  it does not scale linearly with human perception, which is logarithmic.
  If you are making a volume slider, you may want to account for this.
  See [node:adjust_player_background_music_volume] for an example.
* [input:Playback_Speed] is less than `0.5` or greater than `2.0`,
  this node is no-op.
* Unlike music, [input:Playback_Speed] appears to apply pitch correction.
  Faster speed does not mean that the pitch is higher.
* If [input:Loop_Playback] is `Yes` and [input:Loop_Interval] is negative, this node is no-op.
  If [input:Loop_Playback] is `No`, [input:Loop_Interval] can be any value.
* One entity can only have 10 looping sound effect players at once.
  If this node is called with [input:Loop_Playback] set to `Yes`
  while the entity already has 10 looping sound effect players,
  this node is no-op.
* If [input:3D_Sound_Effect] is `Yes`
  and [input:Range_Radius] is less than `1.0` or greater than `1000.0`,
  this node is no-op.
  If [input:3D_Sound_Effect] is `No`
  [input:Range_Radius] can be any value.
* The attenuation curve approximately looks like the following:
  [image:attenuation_curve]
  `Fast Then Slow` eases out while `Slow Then Fast` eases in.
  The attenuation factor is multiplied to the amplitude of the sound.
  The attenuation factor should be inversely proportional to the distance in physics,
  so `Fast Then Slow` may be the most physically accurate one out of the three.
* If [input:3D_Sound_Effect] is `Yes`
  and [input:Attachment_Point_Name] is not a name for an attachment point of the entity,
  this node succeeds in making a sound player, but does not play the sound.
* Unlike visual special effects,
  [input:Attachment_Point_Offset] is not affected by the entity's zoom,
  but it is affected by location and rotation.
  The preview of the player location and range preview in the SFX Player component is incorrect
  when the entity has non-default zoom.
  You may want to define a custom attachment point
  instead of using [input:Attachment_Point_Offset].

# Performance
This node took ~9 units to run on average.

# See Also
* [node:player_plays_one_shot_2d_sound_effect]
* [node:adjust_specified_sound_effect_player]
* [node:start_pause_specified_sound_effect_player]
* [node:close_specified_sound_effect_player]

# Authors
* kokokokomi222
