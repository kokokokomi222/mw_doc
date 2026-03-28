# Summary
[early_info]

Triggers when a UI control on a floating interaction page is used.

# Output Values
* [output:Player_Entity] (Entity) - Entity of the player that triggered the interaction.
* [output:Player_GUID] (GUID) - GUID of the above player.
* [output:Floating_Interaction_Page_Index] (Integer) - ID of the floating interaction page that contains that used UI control. e.g. `1073741889`
* [output:Interactive_Item_Index] (Integer) - ID of the used UI control. e.g. `1073741890`
* [output:List_Index] (List of Integers) - List with the ID of the used UI control as its only entry, if the UI control is a tab or a single-choice window, empty list otherwise. e.g. `[1073741890]` TODO: I'm not sure why this is a list instead of integer.
* [output:Selected_List_Item] (List of Integers) - List with the ID of the selected item as its only entry, if the UI control is a tab or a single-choice window, empty list otherwise. e.g. `[3]` TODO: I'm not sure why this is a list instead of integer.

# Usage
See [node:show_floating_interaction_page] to learn how to open a floating interaction page.
This node can be used to listen to interactions from the page,
such as button press or switch toggle.
Note that [node:when_ui_control_group_is_triggered] do not trigger
for UI controls on a floating interaction page.
This node should be mounted on a player entity, but the event can be forwarded.

# Example
In this example, we close the current floating interaction page
when a specific button on the page is triggered.
This node graph should be mounted on the player entity.
[image:close_floating_interaction_page_example]

# Notes
* This node is triggered by the following UI controls: <ul>
  <li>Interactive Button</li>
  <li>Item Display</li>
  <li>Custom Button</li>
  <li>Custom Switch</li>
  <li>Single-Choice Window (if "Return to Server Event" is enabled)</li>
  <li>Tab (if "Return to Server Event" is enabled)</li>
  </ul>
  They do not trigger [node:when_ui_control_group_is_triggered]
  if they are on a floating interaction page.

# Performance
This node took ~8 units to run on average.

# See Also
* [node:show_floating_interaction_page]
* [node:update_floating_interaction_page_list_data]
* [node:close_floating_interaction_page]

# Authors
* kokokokomi222