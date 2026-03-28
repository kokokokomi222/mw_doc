# Summary
Switch Interface Layout.

# Input Parameters
* [input:Target_Player] (Entity) - Entity of the player to switch interface layout for.
* [input:Layout_Index] (Integer) - ID of the interface layout. e.g. `1073741825`

# Usage
Interface layout is a collection of UI controls.
Interface layouts can be created in the "Manage UI Control Groups" panel,
which can be opened from the main menu.
[image:manage_ui_control_groups_menu]
Each player has one interface layout displayed.
The initial layout can be configured in the class detail panel.
This node lets you switch to a different layout for a particular player.

# Example
In this example, a new interface layout named `Koko's Layout` was created with ID `1073741845`.
[image:switch_current_interface_layout_configure]
The node graph changes the interface layout of the player of the character that selected the tab.
[image:switch_current_interface_layout_example]

# Notes
* [input:Layout_Index] can be selected from the list of interface layouts by clicking the magnifying glass icon.
* If [input:Target_Player] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the entity may exist)
  and continues the execution.
* If [input:Layout_Index] is not an ID for a interface layout, this node is no-op.
* Some UI controls play subtle animations when switched in by this node.
  Thus, if you switch from layout A to layout B and then back to layout A in one node graph execution,
  it can be noticed by the players by the entering animations playing.

# Performance
* This node took ~6 units to run on average.

# See Also
* [node:get_players_current_ui_layout]

# Authors
* kokokokomi222