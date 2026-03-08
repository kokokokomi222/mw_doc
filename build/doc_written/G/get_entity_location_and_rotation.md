# Summary
Returns the location and rotation of an entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to get the location and rotation from.

# Output Values
* [output:Location] (3D Vector) - Location of the entity in world coordinate space.
* [output:Rotate] (3D Vector) - Rotation of the entity in world coordinate space.

# Usage
This node gets the location and rotation of an entity.

# Example
In this example, we teleport the player that selects the tab
to the location and rotation of an entity specified by its GUID.
[image:get_entity_location_and_rotation_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error
  and returns `(0.0, 0.0, 0.0)` for both [output:Location] and [output:Rotate].
* If [input:Target_Entity] is the stage entity,
  [output:Location] and [output:Rotate] are always `(0.0, 0.0, 0.0)`.
* If [input:Target_Entity] is the player entity,
  this node outputs the character's location and rotation.
  In classic mode, all characters have the same location and rotation,
  so there is no ambiguity.
* This node works with "basic motion device" movement.
  However, it does not reflect the movement from "projectile motion device" or "follow motion device".
  The node will report the original starting location/rotation instead.

# Performance
This node took ~2 units to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222