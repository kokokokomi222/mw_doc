# Summary
[beyond_mode_only]

Switches players' camera.

# Input Parameters
* [input:Target_Player_List] (Entity List) - List of player entities.
* [input:Camera_Template_Name] (String) - Name of the camera to switch to, as specified in the "Manage Main Camera" panel.

# Usage
Various cameras with different perspective and configuration can be specified in the "Manage Main Camera" panel,
which can be opened from the main menu.
[image:manage_main_camera_menu]
This node can be used to change the camera for specific players.

# Example
In this example, we created a new camera named `Koko's First Person Camera` in the "Manage Main Camera" panel.
[image:manage_main_camera_example]
In the node graph, all players change their camera to `Koko's First Person Camera`
when a character selects the tab.
[image:switch_main_camera_template_example]

# Notes
* If [input:Target_Player_List] contains an entry that is not a player entity,
  this node raises "Entity does not exist" error (can be misleading, because the non-player entity may exist).
  This node ignores entries that are not player entities
  and successfully changes the camera for valid player entity entries.
* If [input:Camera_Template_Name] is not a name for a camera,
  the camera changes to a follow character classic camera.
  In particular, it does not change to the default camera.

# Performance
For a list of one player, this node took ~4 units to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222