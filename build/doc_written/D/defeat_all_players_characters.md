# Summary
Downs all characters of a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to down all characters for.

# Usage
Use this node to down all characters owned by a player.

Use [node:destroy_entity] instead to down just one character.

# Example
In this example, we down all characters of a player when the player selects the tab.
The player's active character will play the death animation
and then the revive screen will be shown (if configured for revive screen).
[image:defeat_all_players_characters_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error, which is misleading.

# Performance
This node took ~180 units to run on average.

# See Also
* [node:when_all_players_characters_are_down]
* [node:query_if_all_player_characters_are_down]
* [node:destroy_entity]

# Authors
* kokokokomi222