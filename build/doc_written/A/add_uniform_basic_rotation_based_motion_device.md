# Summary
Start a basic motion device with uniform rotational motion.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with basic motion device component
* [input:Motion_Device_Name] (String) - Name of the motion device to assign
* [input:Motion_Device_Duration] (Floating Point Numbers) - The duration for which this motion device remains active. Unit is in seconds.
* [input:Angular_Velocity_(°/s)] (Floating Point Numbers) - Angular velocity of the motion. Unit is degrees per second.
* [input:Rotation_Axis_Orientation] (3D Vector) - Orientation of the rotation axis. Rotation follows the left-hand rule (see usage for detail).

# Usage
Basic motion device with uniform rotational motion is typically configured in the component,
where the duration, angular velocity, and the rotation axis can be specified.
[image:uniform_rotational_motion_config]
However, this node can create a basic motion device with uniform rotational motion dynamically,
specifying the duration, angular velocity, and the rotation axis on runtime.
After this node executes, the newly created basic motion device starts running immediately,
without having to run [node:activate_basic_motion_device].

The orientation of [input:Angular_Velocity_(°/s)] is given using the left-hand rule relative to [input:Rotation_Axis_Orientation]:
If left thumb points toward [input:Rotation_Axis_Orientation],
the left fingers curls in the direction of rotation.
If [input:Rotation_Axis_Orientation] was pointing straight up (e.g. `(0, 1, 0)`)
and [input:Angular_Velocity_(°/s)] is positive,
the entity will rotate clockwise when viewed from the top.
[image_small:left_hand_rule_for_rotation]

# Example
In this example, when tab is selected,
the entity will start rotating with velocity of 45 degrees/second for 2 seconds
where the rotation axis points toward `(0, 1, 0)`.
The entity will end up 90 degrees rotated clockwise (if viewed from top) when it stops.
Note that [node:activate_basic_motion_device] was not needed to start moving.
[image:add_target_oriented_rotation_based_motion_device]

# Notes
* If [input:Target_Entity] does not have the basic motion device component,
  this node raises "Entity component does not exist" error.
* [node:get_entity_location_and_rotation] reports the correct intermediate rotation
  during this motion, unlike follow motion device or projectile motion device.
* If there is already a running basic motion device on this entity named [input:Motion_Device_Name],
  this node stops that device in the middle of the motion.
  However, this does not overwrite the basic motion device statically defined in the component.
  Below example illustrates this issue.
  We have a statically defined basic motion device with uniform rotational motion
  that turns 45 degrees clockwise per second for 3 second.
  [image:uniform_rotational_motion_duplicate_name_issue_config]
  In the node graph, we start that statically defined basic motion device.
  But one second later, we start a dynamically defined basic motion device
  that turns 45 degrees counterclockwise per second for 3 second.
  Lastly one more second later, we start the statically defined basic motion device again.
  All these devices have the same name: `my_motion`.
  [image:uniform_rotational_motion_duplicate_name_issue]
  Say the entity's rotation starts at `(0, 0, 0)`.
  In this scenario, the entity turns 45 degrees clockwise in the first second,
  ending up at `(0, 45, 0)`.
  Then this node stops that movement and turns 45 degrees counterclockwise in the next second,
  ending back at `(0, 0, 0)`.
  And finally, the original statically defined basic motion device gets started again,
  turning clockwise for 3 seconds.
  Thus, the entity comes to rest at `(0, 135, 0)`.
  <p>This behavior is complicated to understand,
  so we recommend not using duplicate names and explicitly use [node:stop_and_delete_basic_motion_device] instead.</p>

# Performance
This node took ~30 units to run on average.

# See Also
* [node:activate_basic_motion_device]
* [node:add_uniform_basic_linear_motion_device]
* [node:add_uniform_basic_rotation_based_motion_device]
* [node:activate_fixed_point_motion_device]
* [node:add_target_oriented_rotation_based_motion_device]

# Authors
* kokokokomi222