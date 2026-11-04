# Summary

[early_info]
[beyond_mode_only]

Sets creation disruptor device.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that has a creation disruptor device component.
* [input:Device_ID] (Integer) - ID for the creation disruptor device. e.g. `1`

# Usage
v7.2 introduced creation disruptor device,
which is a component that can apply physical forces to creations.
It's similar to character disruptor device, but it works on creations.
[image:creation_disruptor_device_config]

Use this node to switch the active creation disruptor device.
Only one creation disruptor device at a time can be active on an entity.

# Example
In this example, we enable the creation disruptor device `1` when the tab is selected.
[image:set_creation_disruptor_device_example]

# Notes
* If [input:Target_Entity] is not an existing entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have a creation disruptor device component,
  this node raises "Entity component does not exist" error.
* If [input:Device_ID] is not an ID for a creation disruptor device,
  all creation disruptor device on this entity is disabled.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_character_disruptor_device]

# Authors
* kokokokomi222