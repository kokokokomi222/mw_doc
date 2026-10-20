# Summary
[beyond_mode_only]

Set a player to follow a control motion device entity.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to follow the control motion device
* [input:Control_Motion_Device_Entity] (Entity) - Entity with a control motion device component

# Usage
Luna VIII introduced control motion devices.
An entity can have a control motion device component,
then this entity's movement can be controlled directly by players
instead of controlling Manekin/Manekina character.
This feature can be used to create a vehicle that can be driven by players.

Use this node to make a player follow a control motion device entity.
The camera will now follow the entity,
the character entity will not be visible,
and the character entity's location will be kept same as the following entity.

To make character visible again and get the camera back on character,
use [node:set_player_to_leave_control_motion_device].

# Example
When the tab is selected by a player,
we set the player to control this control motion device entity
and then follow this entity.
[image:set_player_to_follow_control_motion_device_example]

# Notes
* [input:Player_Entity] must be a player entity.
  If [input:Player_Entity] is a stage, character, object, or creation entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-player entity may exist).
* If [input:Control_Motion_Device_Entity] is not currently on the stage,
  this node raises "Entity does not exist" error.
* If [input:Control_Motion_Device_Entity] does not have a control motion device,
  this node is a no-op.
* If the player does not currently control any control motion device,
  this node is a no-op.
* If [input:Control_Motion_Device_Entity] is currently not controlled by the player,
  but player is currently controlling another control motion device,
  this node surprisingly works.
  With this, you can get into a weird situation where you only control entity A,
  but follows entity B.
* If the location and the rotation of the character is queried
  with [node:get_entity_location_and_rotation]
  while the player follows a control motion device entity,
  it returns the same location and rotation as the control motion device entity.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:set_player_to_activate_control_motion_device]
* [node:set_player_to_leave_control_motion_device]
* [node:when_player_follows_control_motion_device]
* [node:query_players_followed_control_motion_device]

# Authors
* kokokokomi222