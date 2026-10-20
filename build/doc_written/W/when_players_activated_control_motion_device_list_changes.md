# Summary
[beyond_mode_only]

Triggers when player changes their control motion device.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity of the player that changed control motion device.
* [output:Event_Source_GUID] (GUID) - GUID of the player entity. e.g. `1086324738`
* [output:Old_Control_Motion_Device_Entity_List] (Entity List) - List of entities that were controlled by the player before the change
* [output:Current_Activated_Control_Motion_Device_Entity_List] (Entity List) - List of entities that are controlled by the player after the change

# Usage
Luna VIII introduced control motion devices.
An entity can have a control motion device component,
then this entity's movement can be controlled directly by players
instead of controlling Manekin/Manekina character.
This feature can be used to create a vehicle that can be driven by players.

Use this node to listen to the event when a player changes their control motion device
via [node:set_player_to_activate_control_motion_device].
This node should be in a node graph mounted on the player entity.

# Example
In this example, we have a node graph mounted on the player.
When the control motion devices change for the player,
we iterate through all the new active devices.
For each device entity, if it is not in the old device entity list,
we forward this event to the entity.
[image:when_players_activated_control_motion_device_list_changes_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* If [node:set_player_to_activate_control_motion_device] was called with identical list of entities
  as the list of currently activated control motion device entities for the player,
  this event is not triggered.
* The length of [output:Old_Control_Motion_Device_Entity_List]
  and [output:Current_Activated_Control_Motion_Device_Entity_List]
  cannot exceed 3.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:set_player_to_activate_control_motion_device]
* [node:query_players_currently_activated_control_motion_device_list]

# Authors
* kokokokomi222