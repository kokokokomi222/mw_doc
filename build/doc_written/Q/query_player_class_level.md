# Summary
[beyond_mode_only]

Gets player's class level.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to get the level for.
* [input:Class_Config_ID] (Config ID) - ID of the class. e.g. `1090519041`

# Output Values
* [output:Level] (Integer) - Player's class level.

# Usage
Use this node to get player's class level.
Note that each class has its own level.

# Example
In this example, we increase the player's class level by one when the tab is selected.
[image:change_players_current_class_level_example]

# Notes
* If [input:Target_Player] does not exist,
  this node raises "Entity does not exist" error and returns `0`.
* If [input:Target_Player] is not a player entity,
  this node returns `0`.
* If [input:Class_Config_ID] is not an ID of a class,
  this node returns `0`.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:change_players_current_class_level]
* [node:increase_players_current_class_exp]
* [node:when_player_class_level_changes]

# Authors
* kokokokomi222