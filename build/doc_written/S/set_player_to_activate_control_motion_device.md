# Summary
[beyond_mode_only]

Set control motion devices for a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to change the control motion devices for
* [input:Control_Motion_Device_Entity_List] (Entity List) - List of entities with a control motion device component

# Usage
Luna VIII introduced control motion devices.
An entity can have a control motion device component,
then this entity's movement can be controlled directly by players
instead of controlling Manekin/Manekina character.
This feature can be used to create a vehicle that can be driven by players.

Use this node to set the control motion device entities to control for a player.

This node only sets the control of control motion devices.
To change the camera to the control motion device
and to hide the character from the stage,
use [node:set_player_to_follow_control_motion_device]
after calling this node.

This node can also be used to return the control to the character
by passing an empty list to [input:Control_Motion_Device_Entity_List].
In general, you should also call [node:set_player_to_leave_control_motion_device] at this time.

# Example
In this example, two entities with GUID `1077936475` and `1077936478`
each have a control motion device.
When the tab is selected by a player,
we set the player to control these two entities.
Both entities will be controlled together with the same input.
Player's character remains on stage
and the camera still stays on the character,
but the player input does not control the character anymore.
To make the player's camera follow one of the control motion device entity
and make the character disappear,
use [node:set_player_to_follow_control_motion_device].
[image:set_player_to_activate_control_motion_device_example]

# Notes
* [input:Player_Entity] must be a player entity.
  If [input:Player_Entity] is a stage, character, object, or creation entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-player entity may exist).
* If one of the entity in [input:Control_Motion_Device_Entity_List]
  is not currently on the stage,
  this node raises "Entity does not exist" error.
* If one of the entity in [input:Control_Motion_Device_Entity_List]
  does not have a control motion device,
  this node is a no-op.
* Leave [input:Control_Motion_Device_Entity_List] empty
  to return the control to the player's character.
* If you are controlling and following a control motion device entity,
  and then call this node with empty list,
  then the player is stuck in a position
  where the player is still following the entity,
  but the control is on player's character.
  As a result, player cannot move at all.
  You should be calling [node:set_player_to_leave_control_motion_device]
  at the same time as well (the order of this node and [node:set_player_to_leave_control_motion_device] does not matter).
* If the length of [input:Control_Motion_Device_Entity_List] is greater than 4,
  this node is no-op.
  Up to 3 control motion devices can be controlled by a player at once.

# Performance
This node took ~17 units to run on average.

# See Also
* [node:set_player_to_follow_control_motion_device]
* [node:when_players_activated_control_motion_device_list_changes]
* [node:query_players_currently_activated_control_motion_device_list]
* [node:query_control_motion_devices_current_movement_parameters]

# Authors
* kokokokomi222