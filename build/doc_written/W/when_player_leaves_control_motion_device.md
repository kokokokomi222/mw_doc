# Summary
[beyond_mode_only]

Triggers when player leaves a control motion device.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity of the player that is now following a control motion device.
* [output:Event_Source_GUID] (GUID) - GUID of the player entity. e.g. `1086324738`
* [output:Leave_Control_Motion_Device_Entity] (Entity) - Control motion device entity that the player was previously following

# Usage
Luna VIII introduced control motion devices.
An entity can have a control motion device component,
then this entity's movement can be controlled directly by players
instead of controlling Manekin/Manekina character.
This feature can be used to create a vehicle that can be driven by players.

Use this node to listen to the event when a player leaves a control motion device
via [node:set_player_to_leave_control_motion_device].
This node should be in a node graph mounted on the player entity.

# Example
In this example, we have a node graph mounted on the player.
When the player leaves a motion control device entity,
we show a text bubble on the player's character.
[image:when_player_leaves_control_motion_device_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* If [node:set_player_to_leave_control_motion_device] is called,
  but player was not following any control motion device entity,
  this event is not triggered.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:set_player_to_leave_control_motion_device]
* [node:when_player_follows_control_motion_device]
* [node:query_players_followed_control_motion_device]

# Authors
* kokokokomi222