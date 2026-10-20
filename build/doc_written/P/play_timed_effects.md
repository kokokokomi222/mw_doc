# Summary
Play a timed effect at an entity.

# Input Parameters
* [input:Special_Effects_Asset] (Config ID) - ID of the timed effect to play. e.g. `10002012`
* [input:Target_Entity] (Entity) - Entity to play the effect at.
* [input:Attachment_Point_Name] (String) - Name of the attachment point on the entity. e.g. `"GI_RootNode"`
* [input:Move_With_the_Target] (Boolean) - If `Yes`, the effect will follow the entity. If `No`, the effect will remain where it started playing.
* [input:Rotate_With_the_Target] (Boolean) - If `Yes`, the effect will rotate with the entity. If `No`, the effect's rotation will remain fixed.
* [input:Location_Offset] (3D Vector) - Offset relative to the entity's attachment point. This transformation is in the entity coordinate space, taking entity transform into consideration.
* [input:Rotation_Offset] (3D Vector) - Rotation relative to the entity's attachment point. This transformation is in the entity coordinate space, taking entity transform into consideration.
* [input:Zoom_Multiplier] (Floating Point Numbers) - Zoom multiplier for the effect.
* [input:Play_Built-In_Sound_Effect] (Boolean) - If `Yes`, the effect will play a built-in sound associated with the effect, if one exists.

# Usage
This node is used to play timed effect,
which is a visual special effect that plays once and stops.
To play looping effect, use [node:mount_looping_special_effect] instead.
To play sound effect, use [node:start_pause_specified_sound_effect_player]
or [node:player_plays_one_shot_2d_sound_effect] instead.

Effects may not be visible when you preview them for various reasons.
Some effects are too small or too large to be seen.
Some effects must be placed near ground for it to be visible.
Some effects also come with built-in sound with can be played with [input:Play_Built-In_Sound_Effect].
See the [https://kokokokomi222.github.io/mw_doc/timed_vfxs/:timed effect browser]
for details on each timed effect.

# Example
In this example, "Orange Fireworks" effect is played when a tab is selected on the entity.
[image:play_timed_effects_example]

# Notes
* [input:Special_Effects_Asset] can be selected
  by clicking on the magnifier icon on the right.
  Clicking the play button plays the effect on stage as a preview
  (although it may be difficult to see for some effects).
* If [input:Special_Effects_Asset] is not an ID for a timed effect, this node is no-op.
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the "VFX Playing" component,
  this node raises "Entity component does not exist" error.
* If [input:Target_Entity] has model visibility turned off
  from the entity details panel or [node:activate_disable_model_display],
  the timed effect does not show.
* If [input:Attachment_Point_Name] is not a name for an attachment point of the entity,
  this node raises "Entity component does not exist" error, which is misleading.
* The position of the played timed effect uses the entity coordinate system.
  Any offset specified with [input:Location_Offset] or [input:Rotation_Offset]
  takes effect after entity transformation is applied.
* Entity zoom does not affect the effect size, but it does scale [input:Location_Offset].
  For example, if the [input:Target_Entity] has a zoom of `(1.0, 1.5, 2.0)`
  and [input:Location_Offset] is `(3.0, 5.0, 7.0)`,
  then the resulting offset in the stage coordinate space is `(3.0, 7.5, 14.0)`.
* If entity is destroyed while the effect is playing,
  The effect stops playing.
* If there are too many effects already, this node may fail,
  but this needs more testing.
* Not all parts of the effect may scale by [input:Zoom_Multiplier].
  Some parts may even be visible even when [input:Zoom_Multiplier] is 0 or negative.
* Appearance of effects can depend on camera location.

# Performance
This node took ~9 units to run on average.

# See Also
* [node:mount_looping_special_effect]

# Authors
* kokokokomi222