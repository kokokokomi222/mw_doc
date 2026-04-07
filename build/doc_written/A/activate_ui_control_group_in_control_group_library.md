# Summary
Add a UI control from template.

# Input Parameters
* [input:Target_Player] (Entity) - Entity of player to add the UI control for.
* [input:UI_Control_Group_Index] (Integer) - ID of the UI control template. e.g. `1073741825`

# Usage
UI controls can be added to UI layout, so that it can be seen by players.
However, you can also define a UI control template and add it to the UI dynamically using this node.
Use [node:remove_ui_control_group_from_control_group_library] to remove the UI control added this way.

# Example
In this example, we defined a UI control template named `Important Popup` in the "UI Control Group Library".
[image:ui_control_template_configure]
In the node graph, we add this popup from the template.
The popup is added to the player of the character that selected the tab.
[image:activate_ui_control_group_in_control_group_library_example]

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
* If an instance of the UI control template has already been added, this node is no-op.
  Only one instance of each template can be present at once.
* UI controls added this way are independent from UI control layouts.
  When player's UI layout is switched with [node:switch_current_interface_layout],
  all UI controls added with this node stay visible for the player.
* All UI controls can be added this way (including UI control combinations),
  except for "Deck Selector" and "Floating Interaction Page".
  Use [node:invoke_deck_selector] instead to add "Deck Selector".
  Use [node:show_floating_interaction_page] instead to add "Floating Interaction Page".

# Performance
This node took ~8 units to run on average.

# See Also
* [node:remove_ui_control_group_from_control_group_library]

# Authors
* kokokokomi222