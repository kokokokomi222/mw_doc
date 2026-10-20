# Summary
Mount a looping effect on an entity.

# Input Parameters
* [input:Special_Effects_Asset] (Config ID) - ID of the looping effect to mount. e.g. `10001103`
* [input:Target_Entity] (Entity) - Entity to play the effect at.
* [input:Attachment_Point_Name] (String) - Name of the attachment point. e.g. `"GI_RootNode"`
* [input:Move_With_the_Target] (Boolean) - If `Yes`, the effect will follow the entity. If `No`, the effect will remain where it started playing.
* [input:Rotate_With_the_Target] (Boolean) - If `Yes`, the effect will rotate with the entity. If `No`, the effect's rotation will remain fixed.
* [input:Location_Offset] (3D Vector) - Offset relative to the entity's attachment point. This transformation is in the entity coordinate space, taking entity transform into consideration.
* [input:Rotation_Offset] (3D Vector) - Rotation relative to the entity's attachment point. This transformation is in the entity coordinate space, taking entity transform into consideration.
* [input:Zoom_Multiplier] (Floating Point Numbers) - Zoom multiplier for the effect.
* [input:Play_Built-in_Sound_Effect] (Boolean) - If `Yes`, the effect will play a built-in sound associated with the effect, if one exists.

# Output Values
* [output:Special_Effect_Instance_ID] (Integer) - ID of the instance of the playing looping effect. Use this to clear the looping effect. This value is always non-negative. If a looping effect could not be mounted, this value is `0`.

# Usage
This node is used to play looping effect,
which is a visual special effect that plays continuously on loop
until it is cleared by [node:clear_looping_special_effect].
To play timed effect, use [node:play_timed_effects] instead.
To play sound effect, use [node:start_pause_specified_sound_effect_player]
or [node:player_plays_one_shot_2d_sound_effect] instead.

Effects may not be visible when you preview them for various reasons.
Some effects are too small or too large to be seen.
Some effects must be placed near ground for it to be visible,
while some others must move in order to be visible.
Some effects also come with built-in sound with can be played with [input:Play_Built-In_Sound_Effect].
See the [https://kokokokomi222.github.io/mw_doc/looping_vfxs/:looping effect browser]
for details on each lopping effect.

The effect can be stopped with [node:clear_looping_special_effect]
or [node:clear_special_effects_based_on_special_effect_assets].

# Example
In this example, a "Hydro Shield" effect is played when a tab is selected on the entity.
It is cleared when the tab is selected again.
[image:mount_looping_special_effect_example]

# Notes
* [input:Special_Effects_Asset] can be selected
  by clicking on the magnifier icon on the right.
  Clicking the play button plays the effect on stage
  (although it may be difficult to see for some effects).
* If [input:Special_Effects_Asset] is not an ID for a looping effect, this node is no-op.
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the "VFX Playing" component,
  this node raises "Entity component does not exist" error.
* If [input:Target_Entity] has model visibility turned off
  from the entity details panel or [node:activate_disable_model_display],
  the timed effect does not show.
* If [input:Attachment_Point_Name] is not a name for an attachment point of the entity,
  this node raises "Entity component does not exist" error, which is misleading.
* The position of the looping timed effect uses the entity coordinate system.
  Any offset specified with [input:Location_Offset] or [input:Rotation_Offset]
  takes effect after entity transformation is applied.
* If entity is destroyed while the effect is playing,
  The effect stops playing.
* One entity can have at most 10 looping effects playing at once.
  Note that this count does not include timed effects.
  If this node is used while 10 effects are already playing, this node is no-op and returns `0`.
* Not all parts of the effect may scale by [input:Zoom_Multiplier].
  Some parts may even be visible even when [input:Zoom_Multiplier] is 0 or negative.
* Appearance of effects can depend on camera location.
* Most looping effects have entering animation.

# Performance
This node took ~10 units to run on average.

# See Also
* [node:clear_looping_special_effect]
* [node:clear_special_effects_based_on_special_effect_assets]
* [node:play_timed_effects]

# Authors
* kokokokomi222