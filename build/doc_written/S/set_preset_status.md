# Summary
Sets the preset status.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to set the preset status for.
* [input:Preset_Status_Index] (Integer) - Preset status ID, as seen in the details panel in the editor (e.g. `100010060`).
* [input:Preset_Status_Value] (Integer) - Value to set the preset status to. Usually a small non-negative integer.

# Usage
Some prefabricated dynamic units
(e.g. Common Chest, Wooden Lever Mechanism, Stone Spiky Platform, Block Figure)
comes with built-in preset status.
These are different states that the model can be in (e.g. chest can be open or closed; lever can be pulled to left or right; spike trap can be activated or deactivated; block figure can be stopped, walking, running, jumping, or waving),
and transitioning animation is shown when preset state changes.
This node sets this preset status value.

# Example
In this example, we have a Precious Chest entity that has two preset status states:
0 for closed and 1 for opened.
[image:when_preset_status_changes_setup]
When the tab is selected, we set the preset status, which has the ID `100010060`, to `1`. This opens the chest.
[image:set_preset_status_example]

# Notes
* If the [input:Target_Entity] does not have a preset status, this node is no-op.
* If the [input:Preset_Status_Index] does not exist for the entity, this node is no-op.
* If the [input:Preset_Status_Value] is out of range, this node is no-op.

# Performance
This node took ~6 units to run on average.

If it is not the first time the preset status is set in this node graph,
and the preset status is set to the same value without change,
this node appears to run faster.

# See Also
* [node:get_preset_status]
* [node:when_preset_status_changes]

# Authors
* kokokokomi222
