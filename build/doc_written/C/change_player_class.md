# Summary
[beyond_mode_only]

Changes player's class.

# Input Parameters
* [input:Target_Player] (Entity) - Player entity to change the class for.
* [input:Class_Config_ID] (Config ID) - ID of the class. e.g. `1090519041`
* [input:Existing_Skill_Handling] (Enumeration) - One of `Clear All` or `Preserve Unrelated Skills`.

# Usage
In Miliastra's beyond mode, each player has a current class.
Each class represents different capability of the current player,
and the class comes with many configurations such as:

* Camera
* UI layout
* Whether the player can Jump/sprint/climb/glide
* Level
* HP/ATK/DEF scale curve
* Maximum stamina
* Aggro multiplier
* Interruption intake setting
* Skills
* Custom variables
* Unit statuses
* Node graphs

This node switches the player's class to another class.

# Example
In this example, we have two classes configured: `Sword user` and `Bow user`.
[image:two_classes_created]
When a player selects the first tab, the player class is changed to `Sword user`.
When a player selects the second tab, the player class is changed to `Bow user`.
[image:change_player_class_example]

# Notes
* If [input:Target_Player] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Player] is not a player entity,
  this node is no-op.
* If [input:Class_Config_ID] is not an ID of a class,
  this node is no-op.
* I could not get [input:Existing_Skill_Handling] to show any behavior.
  Regardless of the argument value,
  the resulting skills on the player seems to be
  only the skills configured on the new class,
  not preserving any of the skills from the previous class.
  More testing is needed.
* If the changed class is the same as the previous class,
  [node:when_player_class_changes] and [node:when_player_class_is_removed] do not trigger.

# Performance
When the player successfully changed to a different class, this node took ~80 units to run on average. 
When the node failed or did not change to a different class, this node took ~2 units to run on average.

# See Also
* [node:change_players_current_class_level]
* [node:increase_players_current_class_exp]
* [node:when_player_class_changes]
* [node:query_player_class]

# Authors
* kokokokomi222