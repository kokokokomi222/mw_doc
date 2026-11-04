# Summary
Gets the target of the follow motion device.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with a follow motion device component.

# Output Values
* [output:Follow_Target_Entity] (Entity) - Entity that is being followed by the follow motion device.
* [output:Follow_Target_GUID] (GUID) - GUID of the above entity. `0` if created dynamically.

# Usage
Follow motion device can be used to make an entity follow another entity.
It can be configured in the follow motion device component.
[image:follow_motion_device_config]

Use this node to get the follow target entity.

# Example
In this example, this entity will follow the player 1 entity
if it is not following a player entity when the tab is selected.
It will follow `(0, 0, -1)` offset from `GI_Chest` attachment point of the player's character.
The offset is in the coordinate system of the character entity.
It will follow the location and rotation of the character.
[image:switch_follow_motion_device_target_by_entity_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the follow motion device component,
  this node raises "Entity component does not exist" error.
* If [input:Target_Entity] has a follow motion device component,
  but the follow motion device is currently disabled,
  this node raises "Entity does not exist" error
  (which is not a typical behavior of query nodes)
  and returns `0` for both entity and GUID.
* If [input:Target_Entity] has a follow motion device enabled,
  but not currently following an entity,
  this node raises "Entity does not exist" error
  (which is not a typical behavior of query nodes)
  and returns `0` for both entity and GUID.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:activate_disable_follow_motion_device]
* [node:switch_follow_motion_device_target_by_guid]
* [node:switch_follow_motion_device_target_by_entity]

# Authors
* kokokokomi222