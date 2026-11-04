# Summary
Sets whether the player can revive.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to set the revivability for.
* [input:Allow] (Boolean) - If `Yes`, player can revive given enough number of revives. If `No`, player cannot revive.

# Usage
In player template details panel, player can be configured to allow or disallow revive.
[image:allow_revive_config]
Use this node to set this revivability configuration.
If "Allow Revive" is set to `No`,
the player cannot revive regardless of the number of revives.
When the player's characters are downed with "Allow Revive" set to `No`,
the player will see the following prompt:
[image:revive_forbidden]

# Example
In this example, player is set to no longer revive when the player selects the tab.
[image:allow_forbid_player_to_revive_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error, which is misleading.
* If "Allow Revive" is toggled on,
  configurations in the player template details panel all applies,
  including revive duration, revive count, revive points, etc.
* Player can still revive from
  [node:revive_character] and [node:revive_all_players_characters]
  even if "Allow Revive" is set to `No`.
  TODO: test [node:revive_the_active_character]????

# Performance
This node took ~2 units to run on average.

# See Also
* [node:revive_character]
* [node:revive_the_active_character]
* [node:revive_all_players_characters]

# Authors
* kokokokomi222