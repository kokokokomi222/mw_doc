# Summary
Start a basic motion device that rotate towards a target rotation.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with basic motion device component
* [input:Motion_Device_Name] (String) - Name of the motion device to assign
* [input:Motion_Device_Duration] (Floating Point Numbers) - The duration for which this motion device remains active. Unit is in seconds.
* [input:Target_Angle] (3D Vector) - Target rotation. This is in world coordinate space, and is not relative to the current rotation of the entity.

# Usage
Basic motion device that rotate towards target is typically configured in the component,
where the duration and the target rotation can be specified.
[image:rotate_towards_target_config]
However, this node can create a basic motion device that rotate towards target dynamically,
specifying the duration and the target rotation on runtime.
After this node executes, the newly created basic motion device starts running immediately,
without having to run [node:activate_basic_motion_device].

The [input:Target_Angle] is in the world coordinate space, 
not relative to the current rotation of the entity.
For example, if the current rotation of the entity is `(0, 45, 0)`,
and [input:Target_Angle] is `(0, 180, 0)`,
the resulting motion is 135 degrees rotation, not 180 degrees.

The motion follows [https://en.wikipedia.org/wiki/Spherical_linear_interpolation:spherical linear interpolation],
often shortened as slerp, to achieve smooth transition from one rotation to another.

# Example
In this example, when tab is selected,
the entity will start turning toward the character that selected the tab for 2 seconds,
ending up facing the character when it stops.
Note that [node:activate_basic_motion_device] was not needed to start moving.
[image:add_target_oriented_rotation_based_motion_device_example]

# Notes
* [input:Target_Angle] is more appropriately named "Target Rotation" as in [node:activate_fixed_point_motion_device].
* If [input:Target_Entity] does not have the basic motion device component,
  this node raises "Entity component does not exist" error.
* [node:get_entity_location_and_rotation] reports the correct intermediate rotation
  during this motion, unlike follow motion device or projectile motion device.
* If there is already a running basic motion device on this entity named [input:Motion_Device_Name],
  this node stops that device in the middle of the motion.
  However, this does not overwrite the basic motion device statically defined in the component.
  See examples in the notes of [node:add_uniform_basic_linear_motion_device] and
  [node:add_uniform_basic_rotation_based_motion_device] for more detail.
  <p>This behavior is complicated to understand,
  so we recommend not using duplicate names and explicitly use [node:stop_and_delete_basic_motion_device] instead.</p>

# Performance
**TO BE ADDED**

# See Also
* [node:activate_basic_motion_device]
* [node:add_uniform_basic_linear_motion_device]
* [node:add_uniform_basic_rotation_based_motion_device]
* [node:activate_fixed_point_motion_device]

# Authors
* kokokokomi222