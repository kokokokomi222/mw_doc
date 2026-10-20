# Summary
Stop a basic motion device.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to stop the basic motion device for
* [input:Motion_Device_Name] (String) - Name of the motion device, as specified in the basic motion device component
* [input:Stop_All_Basic_Motion_Devices] (Boolean) - If set to `yes`, stops all basic motion devices on this entity. If set to `no`, stops only the basic motion device whose name matches the above input name.

# Usage
This node is used to completely stop a basic motion device.
If you may want to resume the motion later,
use [node:pause_basic_motion_device] instead.

The name of this node is little misleading:
it does not "delete" basic motion device from the component altogether.
It can still start the basic motion device later with the same name.
This node simply "deletes" the currently running instance,
so that it cannot be resumed from where it left off.

A basic motion device can be started at the start of the stage
from the basic motion device component.
It can also start with [node:activate_basic_motion_device].

# Example
In this example, a basic motion device named `"Move Toward Exit"`
is being stopped when a signal named `Boss Appears` occurs.
[image:stop_and_delete_basic_motion_device_example]

# Notes
* If [input:Target_Entity] does not have the basic motion device component,
  this node raises "Entity component does not exist" error.
* If there is no running basic motion device with name [input:Motion_Device_Name],
  this node is no-op.

# Performance
This node took ~17 units to run on average.

# See Also
* [node:activate_basic_motion_device]
* [node:pause_basic_motion_device]
* [node:recover_basic_motion_device]

# Authors
* kokokokomi222