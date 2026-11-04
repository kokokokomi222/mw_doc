# Summary
[beyond_mode_only]

Increase player's class EXP.

# Input Parameters
* [input:Target_Player] (Entity) - Player entity to change the class level EXP for.
* [input:EXP] (Integer) - Amount of EXP.

# Usage
Use this node to change the level of player's class.
Note that each class has its own level,
so the level may change if the class is changed using [node:change_player_class].

You may want to use [node:change_players_current_class_level] instead.

# Example
In this example, we have a node graph mounted on the stage.
When a creature that mounts this node graph is destroyed and the attacker was a player,
we increase that player's class EXP by the custom variable `exp` of the destroyed entity.
[image:increase_players_current_class_exp_example]

# Notes
* If [input:Target_Player] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Player] is not a player entity,
  this node is no-op.
* If [input:EXP] is negative, this node is no-op.
* If [input:EXP] has excess EXP value after gaining a level,
  the rest of the EXP is added to the current class EXP.
  For example, let's say a class takes `100` EXP to level to 2, `400` to 3, and `900` to 4.
  We have a player with level `1` with no EXP.
  If [input:EXP] is `1250`,
  the player will level to `3` and have `1250-100-400=750` EXP,
  only `150` more EXP away from leveling to `4`.
* Player's class level cannot exceed the maximum level configured for the class.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:change_players_current_class_level]
* [node:when_player_class_level_changes]
* [node:query_player_class_level]

# Authors
* kokokokomi222