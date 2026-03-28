# Summary
[early_info]

Plays UI animation.

# Input Parameters
* [input:Player_Entity] (Entity) - Entity of the player to play the animation for.
* [input:Animation_Control_Index] (Integer) - ID of the UI control to animate. e.g. `1073741825`

# Usage
Luna VI introduced various new UI controls, and "UI Animation" is one of them.
It could be thought of as the equivalent of VFX for UI:
it shows a visual effect in the UI space instead of in game space.
This node is used to start playing UI animation.
This node also works for "Full-Screen UI Animation" control.

As noted in the "Notes" section below,
we recommend that this node is only used with non-looping effects.
Use [node:set_ui_control_group_status] instead to control visibility of looping effects.

# Example
In this example, we start playing a UI animation when the tab is selected.
[image:play_ui_animation_on_control_example]

# Notes
* [input:Animation_Control_Index] can be selected from the list of valid UI animations
  by clicking the magnifying glass icon.
  It will not show UI controls that are irrevant for this node.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the entity may exist)
  but continues the execution.
* If this node is called on a UI animation that is already playing,
  it restarts the animation from the beginning.
* If the UI animation uses a looping effect,
  it replays the entering animation while retaining time state,
  causing flicker in most cases, which is likely undesired.
  We recommend against using this node for UI animation with looping effects.
* If the target UI control is not visible in the current UI layout, this node is no-op.
  You can toggle its visibility with [node:set_ui_control_group_status].
  Note that setting UI animation's visibility to `On` with [node:set_ui_control_group_status]
  causes the animation to play from the beginning even without invoking this node.
  In particular, you cannot set the visibility to `Off` or `Hidden`, play the animation, and setting the visibility back to `On` soon after to cause the animation to start from the middle;
  it will only start from the beginning when the visibility was set to `On` in the last step.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:set_ui_control_group_status]

# Authors
* kokokokomi222