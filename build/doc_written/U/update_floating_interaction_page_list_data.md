# Summary
[early_info]

Updates the list of items of tab or single-choice window.

# Input Parameters
* [input:Player_Entity] (Entity) - Entity of the player to update the page for.
* [input:List_Index] (Integer) - ID of the "Tab" or "Single-Choice Window" UI control to update. e.g. `1073741825`
* [input:Visible_List_Item] (List) - IDs of the items in the UI control. List of integers. e.g. `[1, 2, 3]`
* [input:Select_First_Item_by_Default] (Boolean) - `Yes` to select the first item. `No` otherwise.

# Usage
Read [node:show_floating_interaction_page] to learn how to use floating interaction page.
This node lets you decide which items of "Tab" or "Single-Choice Window" to show,
and in what order.

# Example
In this example, we created a tab UI control in a floating interaction page.
The tab UI control has three items named `Ayaka`, `Barbara`, and `Columbina`.
and their preset texts are set acoordingly.
[image:update_floating_interaction_page_list_data_configure_tab]
In the node graph, we update the content of the tab to `[3, 1]`
when a specific UI control is triggered.
[image:update_floating_interaction_page_list_data_example]
As a result, only `Columbina` tab and `Ayaka` tab are visible, with `Columbina` tab selected.
[image:update_floating_interaction_page_list_data_result]

# Notes
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist),
  but continues the execution.
* If [input:List_Index] is not an ID for a UI control with list items,
  this node is no-op.
* If [input:Visible_List_Item] contains a number
  that is not the ID of a list item, it is ignored.
  For example, if a tab has ID `1`, `2`, and `3`,
  then `[0, 2, 4]` was passed into [input:Visible_List_Item],
  the result of this node is that only the list item with ID `2` is visible,
  because `0` and `4` are not IDs and are ignored.
* As seen in the "Example" section above,
  the list items are laid out in the order given in [input:Visible_List_Item].
* If [input:Select_First_Item_by_Default] is `No`,
  it retains the previous selection if the selected item is visible after this node.
  If it is not visible, it will select the first item in [input:Visible_List_Item].
  For example, let's say three list items `[1, 2, 3]` are initially visible,
  and [input:Visible_List_Item] is `[3, 1]` and [input:Select_First_Item_by_Default] is `No`.
  <ul>
  <li>
  If `1` was selected, `1` is selected after this node runs (it retains the previous selection).
  </li>
  <li>
  If `2` was selected, `3` is selected after this node runs (it selects the first item in the new list).
  </li>
  </ul>
  You can use this behavior to select a specific item as demonstrated in the example below.
  [image:update_floating_interaction_page_list_data_select_hack]
* If "Return to Server Event" is turned on in the list item panel,
  [node:when_floating_interaction_page_is_triggered] triggers on this UI control
  if this item gets selected after this node executes
  even if the selection did not change.
  [image:update_floating_interaction_page_list_data_server_event]

# Performance
This node took ~6 units to run on average.

# See Also
* [node:show_floating_interaction_page]
* [node:close_floating_interaction_page]
* [node:when_floating_interaction_page_is_triggered]

# Authors
* kokokokomi222