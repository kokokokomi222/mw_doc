# Summary
Triggers when basic motion device stops.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity with basic motion device component
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if the entity was created dynamically.
* [output:Motion_Device_Name] (String) - Name of the motion device, as specified in the basic motion device component

# Usage
Use this node to listen to event where

* Basic motion device completes the motion OR
* Basic motion device was stopped by [node:stop_and_delete_basic_motion_device].

# Example
In this example, we play a sound effect
when the entity's basic motion device stops.
[image:when_basic_motion_device_stops_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].

# Performance
This node took ~2 units to run on average.

# See Also
* [node:activate_basic_motion_device]
* [node:stop_and_delete_basic_motion_device]

# Authors
* kokokokomi222