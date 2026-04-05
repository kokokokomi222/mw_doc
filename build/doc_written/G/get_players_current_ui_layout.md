# Summary
Returns the player's interface Layout ID.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity from which to query the interface layout from.

# Output Values
* [output:Layout_Index] (Integer) - ID of the interface layout. e.g. `1073741825`

# Usage
Interface layout is a collection of UI controls.
Interface layouts can be created in the "Manage UI Control Groups" panel,
which can be opened from the main menu.
[image:manage_ui_control_groups_menu]
Each player has one interface layout displayed.
The initial layout can be configured in the class detail panel.
This node lets you query what interface layout is being used by a player.

# Example
In this example, we consider the player that selected the tab.
If the ID of the player's current interface layout is `1073741825`,
we turn off UI control `1073741839`.
If the ID of the player's current interface layout is `1073741845`,
we turn off UI control `1073741871`.
[image:get_players_current_ui_layout_example]

# Notes
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error 
  (can be misleading, because the entity may exist) and returns 0.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:switch_current_interface_layout]

# Authors
* kokokokomi222