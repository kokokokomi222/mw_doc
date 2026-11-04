# Summary
Triggers when all characters are downed for a player.

# Output Values
* [output:Player_Entity] (Entity) - Player entity that has the downed characters.
* [output:Reason] (Enumeration) - One of `Node Graph Triggered`, `Normal Defeat`, or `Abnormal Defeat`

# Usage
Use this node to listen to the event when all characters are downed for a player.
This node must be mounted on the player entity.
Consider using [node:when_the_character_is_down] instead.

# Example
In this example, we show a UI control on the player
when all characters are downed for the player.
[image:when_all_players_characters_are_down_example]

# Notes
* This node is triggered after the character death animation concludes
  and as it enters the revive screen.

# Performance
This node took ~7 units to run on average.

# See Also
* [node:when_the_character_is_down]
* [node:when_player_is_abnormally_downed_and_revives]
* [node:query_if_all_player_characters_are_down]

# Authors
* kokokokomi222