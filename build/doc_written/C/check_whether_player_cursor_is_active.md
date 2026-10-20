# Summary
Returns cursor visibility.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to check the cursor visibility for.

# Output Values
* [output:Activate] (Boolean) - `Yes` if the player's cursor is visible.

# Usage
Luna VIII introduced various features involving cursors.
Cursor visibility can be set in player setting
or by [node:set_players_cursor_to_always_visible].
This node can be used to get this cursor visibility in node graph.

# Example
In this example, we print whether the cursor is visible
for the player that selects the tab.
[image:check_whether_player_cursor_is_active_example]

# Notes
* If [input:Target_Entity] is not a player entity,
  this node raises "Entity does not exist" error
  (can be misleading because the entity may exist)
  and returns `No`.
* Making the cursor visible by holding the alt key
  does not count as cursor visibility for this node.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_players_cursor_to_always_visible]

# Authors
* kokokokomi222