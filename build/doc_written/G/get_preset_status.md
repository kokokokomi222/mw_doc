# Summary
Returns the value of preset status.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to get the preset status from.
* [input:Preset_Status_Index] (Integer) - Preset status ID, as seen in the details panel in the editor (e.g. `100010060`).

# Output Values
* [output:Preset_Status_Value] (Integer) - Value of the preset status.

# Usage
Some prefabricated dynamic units
(e.g. Common Chest, Wooden Lever Mechanism, Stone Spiky Platform, Block Figure)
comes with built-in preset status.
These are different states that the model can be in (e.g. chest can be open or closed; lever can be pulled to left or right; spike trap can be activated or deactivated; block figure can be stopped, walking, running, jumping, or waving),
and transitioning animation is shown when preset state changes.
This node gets the value of the preset status.

# Example
In this example, we have a Precious Chest entity that has two preset status states:
0 for closed and 1 for opened.
[image:when_preset_status_changes_setup]
We get the preset status of this chest entity.
If the value is 0 (closed), we print `"Chest is closed"`.
If the value is 1 (open), we print `"Chest is open"`.
[image:get_preset_status_example]

# Notes
* If the [input:Target_Entity] does not have a preset status, this node returns 0 for [output:Preset_Status_Value].
* If the [input:Preset_Status_Index] does not exist for the entity, this node returns 0 for [output:Preset_Status_Value].

# Performance
This node took ~3 units to run on average.

# See Also
* [node:set_preset_status]
* [node:when_preset_status_changes]

# Authors
* kokokokomi222
