# Summary
Changes the status of UI control.

# Input Parameters
* [input:Target_Player] (Entity) - Entity of player to change the status of UI control for.
* [input:UI_Control_Index] (Integer) - ID of the UI Control.
* [input:Display_Status] (Enumeration) - One of `Off`, `On`, `Hidden`.

# Usage
UI controls are user interface elements such as text, button, pop-up, or progress bar.
UI controls can be created and configured in the "Manage UI Control Groups" panel,
which can be opened from the main menu.
[image:manage_ui_control_groups_menu]
This node lets you modify the status of the UI control, making it visible or invisible.

# Example
In this example, we make a UI control visible for a player when the player's character selects the tab.
[image:set_ui_control_group_status_example]

# Notes
* TODO: Lots to test! Work in progress.

# Performance
This node takes ~3 units to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222