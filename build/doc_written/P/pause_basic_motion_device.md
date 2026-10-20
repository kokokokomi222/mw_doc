# Summary
Pause a basic motion device.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with a running basic motion device
* [input:Motion_Device_Name] (String) - Name of the motion device, as specified in the basic motion device component

# Usage
See [node:activate_basic_motion_device] for details on basic motion device.
This node pauses a running basic motion device, stopping movement temporarily.
The paused motion can be resumed with [node:recover_basic_motion_device].

# Example
In this example, we have a node graph mounted on an entity with basic motion device component.
When we receive `Time Stop Skill Used` signal,
we pause the basic motion device named `"Move Toward Exit"`.
When we receive `Time Stop Skill Ended` signal,
we resume the basic motion device named `"Move Toward Exit"`.
[image:pause_basic_motion_device_example]

# Notes
* If [input:Target_Entity] does not have the basic motion device component,
  this node raises "Entity component does not exist" error.
* If there is no running basic motion device with name [input:Motion_Device_Name],
  this node is no-op.

# Performance
This node took ~7 units to run on average.

# See Also
* [node:recover_basic_motion_device]

# Authors
* kokokokomi222