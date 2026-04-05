# Summary
Triggers when player interacts with a UI control.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity of player that interacted with the UI control
* [output:Event_Source_GUID] (GUID) - GUID of the above entity.
* [output:UI_Control_Group_Composite_Index] (Integer) - ID of the UI control combination that contains the interacted UI control. ID of UI control (same as below output) if the UI control is not in a combination. e.g. 1073741825
* [output:UI_Control_Group_Index] (Integer) - ID of the interacted UI control. e.g. 1073741826

# Usage
[image:interactable_ui_controls]
"Interactive Button" and "Item Display" are UI controls that can take user input.
Depending on user device, they can take mouse, keyboard, controller, or touch input.
This node triggers on the node graphs mounted on the player entity
that interacted with such interactable UI controls.

# Example
In this example, we have a node graph mounted on a player entity.
We print `"Button Pressed!"` if the UI control with ID `1073741872` is interacted by this player.
We print `Item Display Pressed!` if the UI control with ID `1073741873` is interacted by this player.
[image:when_ui_control_group_is_triggered_example]

# Notes
* If the UI Control is on cooldown, this node does not trigger.

# Performance
This node took ~3 units to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222
