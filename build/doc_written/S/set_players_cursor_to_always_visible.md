# Summary
[beyond_mode_only]

Sets cursor visibility.

# Input Parameters
* [input:Player_Entity] (Entity) - Entity of the player to set the cursor visibility for.
* [input:Always_Show_Cursor?] (Boolean) - `Yes` to always show cursor. `No` otherwise.

# Usage
Luna VIII introduced various features involving cursors.
Cursor settings can be configured in the player detail panel.
"Always Show Cursor" can be set to `Yes` in order to make the cursor always visible.
[image:player_cursor_config]
This node lets you toggle this setting from node graphs.

If cursor is visible, cursor coordinates and its hit results can also be queried from client node graph.

With keyboard/mouse input, players normally hold alt key
to bring out the cursor so UI controls can be clicked.
However, the visible cursor behaves little differently than the alt-hold cursor:
visible cursor still controls the camera, but the alt-hold cursor does not control the camera.
Cursor coordinates and hit results can be queried in the client node graph for visible cursor,
while alt-hold cursor cannot be queried.
Visible cursor can also be configured to click through UI controls using
[node:set_players_cursor_to_click_through_ui_controls].
Both visible cursor and alt-hold cursor can leave the Genshin window.

Testing is needed for controllers and mobile devices.

# Example
In this example, when a player selects the tab, we make the player's cursor visible.
[image:set_players_cursor_to_always_visible_example]

# Notes
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-player entity may exist).

# Performance
This node took ~3 units to run on average.

# See Also
* [node:set_players_cursor_to_click_through_ui_controls]
* [node:enable_players_cursor_to_click_selectable_targets]
* [node:check_whether_player_cursor_is_active]

# Authors
* kokokokomi222