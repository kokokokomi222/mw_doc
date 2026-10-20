# Summary
Start a basic motion device with uniform linear motion.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with basic motion device component
* [input:Motion_Device_Name] (String) - Name of the motion device to assign
* [input:Motion_Device_Duration] (Floating Point Numbers) - The duration for which this motion device remains active. Unit is in seconds.
* [input:Velocity_Vector] (3D Vector) - Velocity of the motion

# Usage
Basic motion device with uniform linear motion is typically configured in the component,
where the duration and velocity can be specified.
[image:uniform_linear_motion_config]
However, this node can create a basic motion device with uniform linear motion dynamically,
specifying the duration and velocity on runtime.
After this node executes, the newly created basic motion device starts running immediately,
without having to run [node:activate_basic_motion_device].

# Example
In this example, when tab is selected,
the entity will start moving with velocity of `(5, 0, 0)` for 3 seconds,
ending up at 15 meters forward in X direction when it stops.
Note that [node:activate_basic_motion_device] was not needed to start moving.
[image:add_uniform_basic_linear_motion_device_example]

# Notes
* If [input:Target_Entity] does not have the basic motion device component,
  this node raises "Entity component does not exist" error.
* [node:get_entity_location_and_rotation] reports the correct intermediate location
  during this motion, unlike follow motion device or projectile motion device.
* If there is already a running basic motion device on this entity named [input:Motion_Device_Name],
  this node stops that device in the middle of the motion.
  However, this does not overwrite the basic motion device statically defined in the component.
  Below example illustrates this issue.
  We have a statically defined basic motion device with uniform linear motion
  that moves forward at 2 meters per second for 3 second.
  [image:uniform_linear_motion_duplicate_name_issue_config]
  In the node graph, we start that statically defined basic motion device.
  But one second later, we start a dynamically defined basic motion device
  that moves sideways at 2 meters per second for 3 second.
  Lastly one more second later, we start the statically defined basic motion device again.
  All these devices have the same name: `my_motion`.
  [image:uniform_linear_motion_duplicate_name_issue]
  Say the entity starts at `(0, 0, 0)`.
  In this scenario, the entity moves forward 2 meters in the first second,
  ending up at `(2, 0, 0)`.
  Then this node stops that movement and moves sideways 2 meters in the next second,
  ending up at `(2, 0, 2)`.
  And finally, the original statically defined basic motion device gets started again,
  moving forward for 3 seconds.
  Thus, the entity comes to rest at `(8, 0, 2)`.
  <p>This behavior is complicated to understand,
  so we recommend not using duplicate names and explicitly use [node:stop_and_delete_basic_motion_device] instead.</p>

# Performance
This node took ~16 units to run on average.

# See Also
* [node:activate_basic_motion_device]
* [node:add_uniform_basic_rotation_based_motion_device]
* [node:activate_fixed_point_motion_device]
* [node:add_target_oriented_rotation_based_motion_device]

# Authors
* kokokokomi222