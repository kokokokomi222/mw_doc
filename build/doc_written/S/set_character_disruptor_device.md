# Summary

[beyond_mode_only]

Sets character disruptor device.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that has a character disruptor device component.
* [input:Device_ID] (Integer) - ID for the character disruptor device. e.g. `1`

# Usage
Character disruptor device is a component that can apply physical forces to characters.
[image:character_disruptor_device_config]

Use this node to switch the active character disruptor device.
Only one character disruptor device at a time can be active on an entity.

# Example
In this example, we enable the character disruptor device `1` when the tab is selected.
[image:set_character_disruptor_device_example]

# Notes
* If [input:Target_Entity] is not an existing entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have a character disruptor device component,
  this node raises "Entity component does not exist" error.
* If [input:Device_ID] is not an ID for a character disruptor device,
  all character disruptor device on this entity is disabled.

# Performance
This node took ~3 unit to run on average.

# See Also
* [node:set_creation_disruptor_device]

# Authors
* kokokokomi222