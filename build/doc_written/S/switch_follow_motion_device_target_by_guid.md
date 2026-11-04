# Summary
Sets a follow target of the follow motion device.

# Input Parameters
* [input:Target_Entity] (Entity) - Following entity with a follow motion device component.
* [input:Follow_Target_GUID] (GUID) - GUID of the entity to follow.
* [input:Follow_Target_Attachment_Point_Name] (String) - Name of the attachment point of the follow target entity. e.g. `GI_RootNode`
* [input:Location_Offset] (3D Vector) - Location offset. Coordinate system depends on the follow coordinate system below.
* [input:Rotation_Offset] (3D Vector) - Rotation offset. Coordinate system depends on the follow coordinate system below.
* [input:Follow_Coordinate_System] (Enumeration) - One of `Relative Coordinate System` or `World Coordinate System`
* [input:Follow_Type] (Enumeration) - One of `Completely Follow`, `Follow Location`, or `Follow Rotation`.

# Usage
Follow motion device can be used to make an entity follow another entity.
It can be configured in the follow motion device component.
[image:follow_motion_device_config]

Use this node to set the follow target entity.
You may want to use [node:switch_follow_motion_device_target_by_entity] instead,
which works very similarly.

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
* If the follow motion device of [input:Target_Entity] is currently deactivated,
  this node is no-op.
* If [input:Follow_Target_GUID] is not a GUID of an existing entity,
  the entity will stop following any entity.
* [input:Follow_Target_GUID] can be the GUID of the stage entity,
  although the stage doesn't move, so this behavior is not useful.
* If [input:Follow_Target_GUID] is GUID of a player entity,
  the entity will follow the active character of the player.
  [input:Follow_Target_Attachment_Point_Name] should be an attachment point for the character.
  If the follow target entity is queried using [node:get_follow_motion_device_target],
  it returns the player entity.
* If [input:Follow_Target_Attachment_Point_Name] is not
  a name of an attachment point of the follow target entity,
  it defaults to `GI_RootNode`.
* If [input:Follow_Coordinate_System] is `Relative Coordinate System`,
  [input:Location_Offset] and [input:Rotation_Offset] are
  in the follow target entity's coordinate system.
  It will be transformed by the follow target entity's rotation, but not entity's zoom.
* If [input:Follow_Coordinate_System] is `Relative Coordinate System`,
  [input:Location_Offset] and [input:Rotation_Offset] are
  in stage coordinate system.
  It will not be transformed by the follow target entity's rotation or zoom.

# Performance
This node took ~8 units to run on average.

# See Also
* [node:activate_disable_follow_motion_device]
* [node:switch_follow_motion_device_target_by_entity]
* [node:get_follow_motion_device_target]

# Authors
* kokokokomi222
