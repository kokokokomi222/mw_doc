# Summary
Start a basic motion device with fixed-point motion.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with basic motion device component
* [input:Motion_Device_Name] (String) - Name of the motion device to assign
* [input:Movement_Mode] (Enumeration) - One of `Instant Movement` or `Uniform Linear Motion`
* [input:Movement_SPD] (Floating Point Numbers) - Speed of the motion. Unit is in meter per seconds. "Movement Mode" must be `Uniform Linear Motion` and "Parameter Type" must be `Fixed Speed` for this argument to take effect.
* [input:Target_Location] (3D Vector) - Target Location.  This is in world coordinate space, and is not relative to the current location of the entity.
* [input:Target_Rotation] (3D Vector) - Target rotation. This is in world coordinate space, and is not relative to the current rotation of the entity. "Lock Rotation" must be `No` for this argument to take effect.
* [input:Lock_Rotation] (Boolean) - If `Yes`, the entity keeps its original rotation during the motion. If `No`, the entity continuously rotates toward "Target Rotation" during the motion.
* [input:Parameter_Type] (Enumeration) - One of `Fixed Speed` or `Fixed Time`. "Movement Mode" must be `Uniform Linear Motion` for this argument to take effect.
* [input:Movement_Time] (Floating Point Numbers) - Duration of the motion. Unit is in seconds. "Movement Mode" must be `Uniform Linear Motion` and "Parameter Type" must be `Fixed Time` for this argument to take effect.

# Usage
Basic motion device with fixed-point motion is typically configured in the component,
[image:fixed_point_motion_config]
However, this node can create a basic motion device with fixed-point motion dynamically.
After this node executes, the newly created basic motion device starts running immediately,
without having to run [node:activate_basic_motion_device].

This node has three different modes of operation:

<ol>
    <li>
        [input:Movement_Mode] is `Instant Movement`. In this case, [input:Parameter_Type] is ignored.
        The entity teleports to the [input:Target_Location] immediately.
    </li>
    <li>
        [input:Movement_Mode] is `Uniform Linear Motion` and [input:Parameter_Type] is `Fixed Speed`.
        The entity moves toward [input:Target_Location], moving at the speed of [input:Movement_SPD] meters per second.
    </li>
    <li>
        [input:Movement_Mode] is `Uniform Linear Motion` and [input:Parameter_Type] is `Fixed Time`.
        The entity moves toward [input:Target_Location], taking [input:Movement_Time] seconds to finish.
    </li>
</ol>

In all these modes, the entity also turns toward [input:Target_Rotation]
if [input:Lock_Rotation] is `No`,
working similarly as [node:add_target_oriented_rotation_based_motion_device].
If [input:Lock_Rotation] is `Yes`, the entity will keep the initial rotation during the motion.

The [input:Target_Location] is in the world coordinate space, 
not relative to the current location of the entity.
For example, if the current location of the entity is `(2, 0, 0)`,
and [input:Target_Location] is `(5, 0, 0)`,
the resulting motion is 3 meters translation, not 5 meters.

The [input:Target_Rotation] is in the world coordinate space, 
not relative to the current rotation of the entity.
For example, if the current rotation of the entity is `(0, 45, 0)`,
and [input:Target_Rotation] is `(0, 180, 0)`,
the resulting motion is 135 degrees rotation, not 180 degrees.

# Example
This example demonstrates the first mode of operation.
[input:Movement_Mode] is `Instant Movement`,
so only [input:Target_Location] is relevant.
The entity will teleport to `(1, 0, 0)`.
Because [input:Lock_Rotation] is `Yes`,
the rotation of the entity will stay the same.
[image:activate_fixed_point_motion_device_example_1]

This next example demonstrates the second mode of operation.
[input:Movement_Mode] is `Uniform Linear Motion` and [input:Parameter_Type] is `Fixed Speed`,
so only [input:Target_Location] and [input:Movement_SPD] is relevant.
The entity will move toward to `(2, 0, 0)` at speed of `1.5` meters per second until the target is reached.
Because [input:Lock_Rotation] is `Yes`,
the rotation of the entity will stay the same.
[image:activate_fixed_point_motion_device_example_2]

This last example demonstrates the third mode of operation.
[input:Movement_Mode] is `Uniform Linear Motion` and [input:Parameter_Type] is `Fixed Time`,
so only [input:Target_Location] and [input:Movement_Time] is relevant.
The entity will move toward to `(3, 0, 0)`, taking `1.8` seconds to do so.
Because [input:Lock_Rotation] is `No`,
the entity will also rotate continuously and ending up with `(90, 0, 0)` rotation when the motion ends.
[image:activate_fixed_point_motion_device_example_2]

# Notes
* This node is inconsistently named.
  Other equivalent nodes start with "Add", but this node start with "Activate".
* If [input:Target_Entity] does not have the basic motion device component,
  this node raises "Entity component does not exist" error.
* [node:get_entity_location_and_rotation] reports the correct intermediate location and rotation
  during this motion, unlike follow motion device or projectile motion device.
* If there is already a running basic motion device on this entity named [input:Motion_Device_Name],
  this node stops that device in the middle of the motion.
  However, this does not overwrite the basic motion device statically defined in the component.
  See examples in the notes of [node:add_uniform_basic_linear_motion_device] and
  [node:add_uniform_basic_rotation_based_motion_device] for more detail.
  <p>This behavior is complicated to understand,
  so we recommend not using duplicate names and explicitly use [node:stop_and_delete_basic_motion_device] instead.</p>

# Performance
This node took ~32 units to run on average, but it seems to have high variance.

# See Also
* [node:activate_basic_motion_device]
* [node:add_uniform_basic_linear_motion_device]
* [node:add_uniform_basic_rotation_based_motion_device]
* [node:add_target_oriented_rotation_based_motion_device]

# Authors
* kokokokomi222