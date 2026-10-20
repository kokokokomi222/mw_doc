# Summary
[beyond_mode_only]

Sets whether cursor can click through UI controls.

# Input Parameters
* [input:Player_Entity] (Entity) - Entity of the player to set the cursor click-through for.
* [input:Click_Through_UI_Controls?] (Boolean) - `Yes` to let cursor collision work through all UI controls. `No` otherwise.

# Usage
Luna VIII introduced various features involving cursors.
Cursor settings can be configured in the player detail panel.
"Allow UI control click-through" can be set to `Yes`
in order to make the cursor collisions to work even when a UI control is blocking it.
[image:player_cursor_config]
This node lets you toggle this setting dynamically.

Note that this node does not affect UI controls that does not collide with cursor.
See the note below for detail.

# Example
In this example, when a player selects the tab, we make the player's cursor visible.
[image:set_players_cursor_to_always_visible_example]

# Notes
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-player entity may exist).
* Not all UI controls block cursor collisions.
  If the UI controls are not clickable (like text boxes or images),
  the UI controls allow cursor collisions through
  even when [input:Click_Through_UI_Controls?] is set to `No`.
  This node only affects cursor collisions blocked by UI controls that are clickable,
  like interactive button, custom button, custom switch, item display, etc.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:set_players_cursor_to_click_through_ui_controls]
* [node:enable_players_cursor_to_click_selectable_targets]
* [node:check_whether_player_cursor_is_active]

# Authors
* kokokokomi222