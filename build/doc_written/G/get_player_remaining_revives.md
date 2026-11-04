# Summary
Gets the revive count for a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to get the revive count from.

# Output Values
* [output:Remaining_Times] (Integer) - Player's revive count.

# Usage
Revive count can be configured for players in player template detail panel.
Once a player runs out of revives, the player sees the below screen
and the player can no longer revive.
[image:revive_count]

Use this node to get the revive count for a player.

# Example
In this example, we give one more revive to the player that selects the tab.
[image:set_player_remaining_revives_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error and returns `0`.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error, which is misleading, and returns `0`.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_player_remaining_revives]

# Authors
* kokokokomi222
