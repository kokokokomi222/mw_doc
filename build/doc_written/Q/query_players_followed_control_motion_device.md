# Summary
[beyond_mode_only]

Gets the control motion device followed by a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity

# Output Values
* [output:Control_Motion_Device_Entity] (Entity) - Control motion device entity that is followed by the player. Default entity `0` if the player is not following any control motion device.

# Usage
Luna VIII introduced control motion devices.
An entity can have a control motion device component,
then this entity's movement can be controlled directly by players
instead of controlling Manekin/Manekina.
This feature can be used to create a vehicle that can be driven by players.

This node lets you query the control motion device entity that is followed by the player.

# Example
We have a node graph mounted on a player.
If an interactive button is pressed by the player,
we get the followed control motion device entity
and apply a unit status to buff the speed of the entity.
[image:query_players_followed_control_motion_device_example]

# Notes
* [input:Player_Entity] must be a player entity.
  If [input:Player_Entity] is a stage, character, object, or creation entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-player entity may exist).
* If no control motion device entity is being followed the player,
  this node returns the default entity, `0`.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_player_to_follow_control_motion_device]
* [node:set_player_to_leave_control_motion_device]
* [node:when_player_follows_control_motion_device]
* [node:when_player_leaves_control_motion_device]

# Authors
* kokokokomi222