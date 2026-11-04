# Summary
[beyond_mode_only]

Changes player's class level.

# Input Parameters
* [input:Target_Player] (Entity) - Player entity to change the class level for.
* [input:Level] (Integer) - New level. Must be between 1 and maximum level of the class, inclusive.

# Usage
Use this node to change the level of player's class.
Note that each class has its own level,
so the level may change if the class is changed using [node:change_player_class].
The maximum class level can be configured in the class details panel.
[image:class_maximum_level]

You may want to use [node:increase_players_current_class_exp] instead.

# Example
In this example, we increase the player's class level by one when the tab is selected.
[image:change_players_current_class_level_example]

# Notes
* If [input:Target_Player] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Player] is not a player entity,
  this node is no-op.
* If [input:Level] is less than 1 or greater than the class maximum level,
  this node is no-op.
* If this node successfully runs, class EXP is set to 0.
  If this node fails, the current EXP does not change.
* If the changed level is same as the previous level,
  then [node:when_player_class_level_changes] does not trigger.
* Class maximum level can be configured to an integer between 1 and 200, inclusive.
* If the level increases from previous level, a yellow effect is played on the character,
  quickly followed by a blue effect with level number on the head.
  If level increases multiple times quickly,
  all the yellow effects are played together right away,
  but the blue effects are put on a queue and plays one at a time.
  [image:level_up_effect_yellow]
  [image:level_up_effect_blue]
  If the level stays the same or decreases, no effect is played.

# Performance
This node took ~30 units to run on average.

# See Also
* [node:increase_players_current_class_exp]
* [node:when_player_class_level_changes]
* [node:query_player_class_level]

# Authors
* kokokokomi222
