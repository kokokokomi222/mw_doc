# Summary
Triggers when preset status changes.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that has the preset status change.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if the entity was created dynamically.
* [output:Preset_Status_Index] (Integer) - Preset status ID, as seen in the details panel in the editor
  (e.g. `100010060`).
* [output:Pre-Change_Value] (Integer) - Previous value of the preset status before the change occurred
  (e.g. `0`).
* [output:Post-Change_Value] (Integer) - New value of the preset status after the change occurred
  (e.g. `1`).

# Usage
Some prefabricated dynamic units
(e.g. Common Chest, Wooden Lever Mechanism, Stone Spiky Platform, Block Figure)
comes with built-in preset status.
These are different states that the model can be in (e.g. chest can be open or closed; lever can be pulled to left or right; spike trap can be activated or deactivated; block figure can be stopped, walking, running, jumping, or waving),
and transitioning animation is shown when preset state changes.
This node listens to the change to this preset status.

# Example
In this example, we have a Precious Chest entity that has two preset status states:
0 for closed and 1 for opened.
[image:when_preset_status_changes_setup]
When the preset status changes on this chest to 1 (which means opened), it plays a VFX effect.
[image:when_preset_status_changes_example]

# Notes
* If the previous preset status and the new preset status is the same, it still triggers this event.
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* This node has a [output:Preset_Status_Index] output because some dynamic units may have multiple preset statuses. As of Luna IV, the only dynamic unit with multiple preset statuses is the "Metal Punching Target".

# Performance
This node took ~2 units to run on average.

# See Also
* [node:get_preset_status]
* [node:set_preset_status]

# Authors
* kokokokomi222