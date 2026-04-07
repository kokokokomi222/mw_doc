# Summary
Remove a UI control that were added from template.

# Input Parameters
* [input:Target_Player] (Entity) - Entity of player to remove the UI control for.
* [input:UI_Control_Group_Index] (Integer) - ID of the UI control template. e.g. `1073741825`

# Usage
This node removes UI control added using [node:activate_ui_control_group_in_control_group_library].

# Example
In this example, we add a UI control from template if the first tab is selected.
Selecting the second tab removes that UI control.
These take effect for the player of the character that selects the tabs.
[image:remove_ui_control_group_from_control_group_library_example]

# Notes
* [input:UI_Control_Group_Index] can be selected from the list of valid UI control templates
  by clicking the magnifying glass icon.
  It will show UI control templates that are relevant for this node,
  but it also shows "Deck Selector" and "Floating Interaction Page",
  which cannot be used with this node.
* If [input:Target_Player] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist)
  and continues the execution.
* If [input:UI_Control_Group_Index] is not an ID for a UI control template,
  this node is no-op.
* If no instance of the UI control template has already been added, this node is no-op.
* "Deck Selector" and "Floating Interaction Page" cannot be removed by this node.
  Use [node:close_deck_selector] instead to remove "Deck Selector".
  Use [node:close_floating_interaction_page] instead to remove "Floating Interaction Page".

# Performance
This node took ~7 units to run on average.

# See Also
* [node:activate_ui_control_group_in_control_group_library]

# Authors
* kokokokomi222