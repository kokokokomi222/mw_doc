# Summary
Start a basic motion device.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to start the basic motion device for
* [input:Motion_Device_Name] (String) - Name of the motion device, as specified in the basic motion device component

# Usage
**Basic Motion Device** is an entity component that let us move dynamic entities.
It can be used without any node graph
by adding the component in the third tab of the entity detail panel
and setting an "Initially Effective" motion device.
[image:basic_motion_device_component]
However, the above method will move the entity at the start of the stage.
This node instead lets us dynamically start a basic motion device when we want to.

Despite the name, **Follow Motion Device** is a completely separate system,
and it has nothing to do with **Basic Motion Device**.
See [node:activate_disable_follow_motion_device] for detail.

# Example
In this example, we create a moving platform that starts moving when tab is selected.
First, the "Basic Motion Device" and "Tab" component is added.
"Initially Effective" is set to `None` and we created a motion device named `"Move Toward Exit"`
[image:activate_basic_motion_device_config]
Next, we create a below node graph and add it to the entity.
[image:activate_basic_motion_device_example]

# Notes
* If [input:Target_Entity] does not have the basic motion device component,
  this node raises "Entity component does not exist" error.
* If [input:Motion_Device_Name] does not exist in the basic motion device component,
  this node is no-op.
* [node:get_entity_location_and_rotation] reports the correct intermediate location and rotation
  during this motion, unlike follow motion device or projectile motion device.
* Multiple basic motion devices can run at the same time, 
  but the behaviors of every combination of devices would be too complicated to describe.

# Performance
This node took ~28 units to run on average.

# See Also
* [node:stop_and_delete_basic_motion_device]
* [node:pause_basic_motion_device]
* [node:recover_basic_motion_device]

# Authors
* kokokokomi222