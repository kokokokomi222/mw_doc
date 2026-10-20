# Summary
[beyond_mode_only]

Gets the list of control motion devices activated on a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity

# Output Values
* [output:Control_Motion_Device_Entity_List] (Entity List) - List of control motion device entities that are activated on the player

# Usage
Luna VIII introduced control motion devices.
An entity can have a control motion device component,
then this entity's movement can be controlled directly by players
instead of controlling Manekin/Manekina.
This feature can be used to create a vehicle that can be driven by players.

This node lets you query the control motion device entities that are controlled by the player.

# Example
We have a node graph mounted on a player.
If an interactive button is pressed by the player,
we iterate through all control motion device entities controlled by the player,
and play a timed effect at these entities.
[image:query_players_currently_activated_control_motion_device_list_example]

# Notes
* [input:Player_Entity] must be a player entity.
  If [input:Player_Entity] is a stage, character, object, or creation entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-player entity may exist).
* The length of [output:Control_Motion_Device_Entity_List] cannot exceed 3.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_player_to_activate_control_motion_device]
* [node:when_players_activated_control_motion_device_list_changes]

# Authors
* kokokokomi222