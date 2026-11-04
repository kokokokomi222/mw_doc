# Summary
Activates or disables follow motion device.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with a follow motion device component.
* [input:Activate] (Boolean) - If `Yes`, activates the follow motion device. If `No`, deactivates it.

# Usage
Follow motion device can be used to make an entity follow another entity.
It can be configured in the follow motion device component.
[image:follow_motion_device_config]

Use this node to activate or disable the follow motion device.
If activated, the entity will follow the configured target entity.
If deactivated, the entity will stop moving at the current location.

# Example
In this example, the entity will follow the character that selects the tab.
It will follow `(0, 0, -1)` offset from `GI_Chest` attachment point of the character.
The offset is in the coordinate system of the character entity.
It will follow the location and rotation of the character.
[image:activate_disable_follow_motion_device_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the follow motion device component,
  this node raises "Entity component does not exist" error.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:switch_follow_motion_device_target_by_guid]
* [node:switch_follow_motion_device_target_by_entity]
* [node:get_follow_motion_device_target]

# Authors
* kokokokomi222