# Summary
Triggers when a character is downed.

# Output Values
* [output:Character_Entity] (Entity) - Character entity that was downed.
* [output:Reason] (Enumeration) - One of `Node Graph Triggered`, `Normal Defeat`, or `Abnormal Defeat`
* [output:Knockdown_Entity] (Entity) - If normally defeated, entity that dealt the fatal damage. `0` otherwise.

# Usage
Use this node to listen to the event when the character is downed.
This can occur in multiple ways:

* HP reaching `0` from damage (`Normal Defeat`).
* Using [node:hp_loss] on the character (`Node Graph Triggered`).
* Using [node:destroy_entity] on the character (`Node Graph Triggered`).
* Using [node:defeat_all_players_characters] on the character (`Node Graph Triggered`).
* Drowning by running out of stamina while swimming (`Abnormal Defeat`).
* Falling too far down the stage (`Abnormal Defeat`).

This node must be mounted on the character entity.
Consider using [node:when_all_players_characters_are_down] instead.

# Example
In this example, when a character is downed,
we decrease the custom variable `score` of the player by 1.
If this downing was caused by another character,
we increase the custom variable `score` of the attacking player by 1.
[image:when_the_character_is_down_example]

# Notes
* This node is triggered as the death animation begins.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:when_all_players_characters_are_down]
* [node:when_player_is_abnormally_downed_and_revives]
* [node:query_if_all_player_characters_are_down]

# Authors
* kokokokomi222
