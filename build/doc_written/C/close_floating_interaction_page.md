# Summary
[early_info]

Closes floating interaction page.

# Input Parameters
* [input:Player_Entity] (Entity) - Entity of the player to close the floating interaction page for.
* [input:Floating_Interaction_Page_Index] (Integer) - ID of the floating interaction page to close. e.g. `1073741825`

# Usage
See [node:show_floating_interaction_page] to learn how to open a floating interaction page.
This node can be used to close a page.
Inherent container of a floating interaction page also contains a close button,
which can be used to close the page without using this node or any node graph.

# Example
In this example, we close the current floating interaction page
when a specific button on the page is triggered.
This node graph should be mounted on the player entity.
[image:close_floating_interaction_page_example]

# Notes
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist),
  but continues the execution.
* If [input:Floating_Interaction_Page_Index] is not an ID for an opened floating interaction page,
  this node is no-op.
* If there are multiple opened pages,
  this node can close any of the opened floating interaction page.
  It does not have to be the currently interactable page with the highest layer value.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:show_floating_interaction_page]
* [node:update_floating_interaction_page_list_data]
* [node:when_floating_interaction_page_is_triggered]

# Authors
* kokokokomi222