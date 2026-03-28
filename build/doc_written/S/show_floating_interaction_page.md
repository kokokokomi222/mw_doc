# Summary
[early_info]

Opens floating interaction page.

# Input Parameters
* [input:Player_Entity] (Entity) - Entity of the player to open the floating interaction page for.
* [input:Floating_Interaction_Page_Index] (Integer) - ID of the floating interaction page to open. e.g. `1073741825`
* [input:Initialize_List_Data] (Dictionary that maps integer to list of Integers) - Dictionary where keys are IDs of "Tab" or "Single-Choice Window" UI controls (e.g. `1073741825`) and values are lists of visible item IDs of the control (e.g. `[1, 2, 3]`). Can be left blank.

# Usage
Luna VI introduced various new UI controls,
but floating interaction page is the most complex one.
It allows craftperpeople to create a beautiful UI page
that works with mouse, touch screen, and controller.
It is often overlaid and takes up full screen.
[image:floating_ui_page_preview]

Floating interaction page cannot be added directly to a layout.
Instead, this node is used to open the page defined in the "UI Control Group Library",
similar to how deck selector works.
See "Example" section below to see how a floating interaction page can be used.

Item lists for tabs and single-choice windows
can be updated dynamically with [node:update_floating_interaction_page_list_data].

# Example
We will start by configuring a floating interaction page in "Manage UI Control Groups".
First, we must ensure that the UI Rendering mode is
"Hierarchical Rendering" instead of "Sequential Rendering".
Some of the new UI controls are only supported under the new "Hierarchical Rendering" mode.
Stages created after the start of Luna VI should default to "Hierarchical Rendering",
however older stages may need to adjust this mode.
[image:hierarchical_rendering_configure]

Next, we create a floating interaction page in "UI Control Group Library".
Contents of the page can be edited under "Style" &gt; "Edit Details".
After filling out the contents, save the template and copy the ID of the template.
[image:floating_ui_page_configure]

Lastly, we create a node graph to open the page for the player that select the tab.
We also make item `1`, `2`, and `3` visible for the tab UI control with ID `1073741962`.
[image:show_floating_interaction_page_example]

# Notes
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist),
  but continues the execution.
* If [input:Floating_Interaction_Page_Index] is not an ID for a floating interaction page,
  this node is no-op.
* If the floating interaction page with the same ID is already open, this node is no-op.
* If a floating interaction page with different ID is already open,
  this node opens the specified floating interaction page.
  As a result, two pages will be open, one on top of the other.
  Only the page with the higher layer value will be interactable
  (the most recently opened page in case of layer value tie).
  When the interactable page is closed, the other page will now be interactable.
* If [input:Initialize_List_Data] is empty,
  every item of tabs and single-choice windows will not be visible.
* If a key of [input:Initialize_List_Data] is not an ID for a UI control with list items,
  it ignores that entry. Other legitimate entries will be processed.
* If an entry of a value of [input:Initialize_List_Data] is not a valid ID for a list item,
  it ignores that entry. Other legitimate entries will be processed.
* Floating interaction pages do not retain selection state when closed.
  When they are re-opened with this node,
  all tabs and single-choice windows are completely refreshed.

# Performance
This node took ~7 units to run on average.

# See Also
* [node:update_floating_interaction_page_list_data]
* [node:close_floating_interaction_page]
* [node:when_floating_interaction_page_is_triggered]

# Authors
* kokokokomi222