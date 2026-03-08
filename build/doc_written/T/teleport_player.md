# Summary
Teleports a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to teleport.
* [input:Target_Location] (3D Vector) - Location in world coordinate space.
* [input:Target_Rotation] (3D Vector) - Rotation in world coordinate space.

# Usage
This node teleports a player to the specified location/rotation.
If the teleported location is far from the starting location,
a loading screen may show briefly.
See "Notes" section below for more detail.

Unfortunately, it seems that it is not possible to set the camera angle after the teleportation as of Luna V.

# Example
In this example, when a player selects a tab on the entity,
we teleport the player to the location/rotation specified by a preset point.
[image:teleport_player_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error
  but continues the execution.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error (misleading because the entity **does** exist)
  but continues the execution.
  In particular, this node does **not** work with character entities.
* If [input:Target_Location] is outside the stage's "Effective Scene Range",
  this node still functions correctly.
* If any component of [input:Target_Location] is greater than `512.0` or less than `-512.0`,
  this node is no-op.
* If the distance from the current location to [input:Target_Location] is greater than `60.0`,
  a loading screen will show briefly, which appears as below.
  [image:teleport_player_loading_screen]
* There is a cooldown of 1 second for player teleportation.
  If you attempt to teleport a player again when the player teleported less then a second ago,
  this node is no-op.
  If there are multiple teleport player nodes in one node graph execution,
  the **first** one gets executed and the rest are no-op.

# Performance
This node took ~30 units to run on average.

# See Also
* [node:when_player_teleport_completes]

# Authors
* kokokokomi222