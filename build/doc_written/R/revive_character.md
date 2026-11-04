# Summary

[beyond_mode_only]

Revives a character.

# Input Parameters
* [input:Character_Entity] (Entity) - Character entity to revive.

# Usage
Use this node to revive a character in beyond mode.
This is a different from the typical revive:
The character is revived at the location where the character was downed,
not at a revive point.
It also does not use up revive count.

Consider using [node:revive_all_players_characters] instead
if you want to use the usual revive system.
In classic mode, use [node:revive_the_active_character] instead.

# Example
In this example, player 1's character is revived
when another player selects the tab on this entity.
[image:revive_character_example]

# Notes
* If [input:Character_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Character_Entity] is not a character entity,
  this node raises "Entity does not exist" error, which is misleading.
* If [input:Character_Entity] is not down, this node is no-op.
* This node successfully revives the character
  if the character is in a death animation.
* When successful, The character is revived at the location and rotation
  where the character was downed, not at a revive point.
  Camera is moved to look the back of the character.
* This revive does not decrement the revive count.
* This revive does not trigger [node:when_all_players_characters_are_revived],
  but it triggers [node:when_character_revives].

# Performance
This node took ~25 units to run on average.

# See Also
* [node:revive_all_players_characters]
* [node:revive_the_active_character]
* [node:allow_forbid_player_to_revive]

# Authors
* kokokokomi222