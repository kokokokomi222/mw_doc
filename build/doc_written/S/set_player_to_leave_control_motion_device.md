# Summary
[beyond_mode_only]

Set a player to leave a control motion device entity.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to leave a control motion device

# Usage
Luna VIII introduced control motion devices.
An entity can have a control motion device component,
then this entity's movement can be controlled directly by players
instead of controlling Manekin/Manekina character.
This feature can be used to create a vehicle that can be driven by players.

Use this node to make a player leave a control motion device entity.
The player's character will appear near the control motion device entity
at the location as configured in the component,
and the camera will get back to the character.
This undoes [node:set_player_to_follow_control_motion_device].

# Example
We have a node graph mounted on the player.
When the interactive button is pressed by the player,
we make the player leave the following control motion device entity,
return the player's control back to the player's character,
and then hide the interactive button.
[image:set_player_to_leave_control_motion_device_example]

# Notes
* [input:Player_Entity] must be a player entity.
  If [input:Player_Entity] is a stage, character, object, or creation entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-player entity may exist).
* The location at which the character appears after leaving
  can be configured in the control motion device component
  to a custom attachment point.
  This is where the character's `GI_AvatarRoot` ends up at (located at between two feet).
  [image:control_motion_device_exit_point_config]

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_player_to_activate_control_motion_device]
* [node:set_player_to_follow_control_motion_device]
* [node:when_player_leaves_control_motion_device]
* [node:query_players_followed_control_motion_device]

# Authors
* kokokokomi222