# Summary
Sets the revive count for a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to set the revive count for.
* [input:Remaining_Times] (Integer) - Revive count to set.

# Usage
Revive count can be configured for players in player template detail panel.
Once a player runs out of revives, the player sees the below screen
and the player can no longer revive.
[image:revive_count]

Use this node to set the revive count for a player.

# Example
In this example, we give one more revive to the player that selects the tab.
[image:set_player_remaining_revives_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error, which is misleading.
* If [input:Remaining_Times] is negative, this node is no-op.
* If this node modifies the revive count to a positive number
  while the player is in the "Unable to Act" revive screen due to having zero revive count,
  the player gets the revive count and is able to revive.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:get_player_remaining_revives]

# Authors
* kokokokomi222
