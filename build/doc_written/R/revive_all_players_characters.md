# Summary
Revives all characters of a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to revive the characters for.
* [input:Deduct_Revives] (Boolean) - If `Yes`, reduce the revive count by 1. If `No`, keep the revive count the same.

# Usage
Use this node to revive all characters owned by a player.
The character is revived at a revive point.
This node does not work if any of the characters are alive.
See notes for detail.

Consider using [node:revive_character] instead in beyond mode,
if you want to revive the character where they were downed.
Consider using [node:revive_the_active_character] instead in classic mode.

# Example
In this example, player 1's characters are revived
when another player selects the tab on this entity.
[image:revive_all_players_characters_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error, which is misleading.
* In beyond mode, this node revives the character owned by the player.
  In classic mode, this node revives all characters owned by the player
  only when every character owned by the player is down.
* This node succeeds even when the player has 0 revives left,
  regardless of what [input:Deduct_Revives] is.
* This node fails to revive the characters
  if the [input:Player_Entity]'s character is in a death animation.
* For the player that is reviving, a loading screen shows briefly
  which appears as below:
  [image:teleport_player_loading_screen]

# Performance
This node took ~190 units to run on average.

# See Also
* [node:revive_character]
* [node:revive_the_active_character]
* [node:allow_forbid_player_to_revive]
* [node:when_character_revives]
* [node:when_all_players_characters_are_revived].

# Authors
* kokokokomi222