# Summary
Deactivates a revive point.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to deactivate the revive point for.
* [input:Revive_Point_ID] (Integer) - ID of the revive point to deactivate.

# Usage
When all characters of a player are down,
the player can revive at revive points.
Revive points can be configured in stage setting.
[image:revive_point_config]
The list of active revive points for players can be configured
in player template details panel.
[image:player_revive_point_config]
Use this node to deactivate a revive point for a player.

# Example
In this example, we activate the revive point with ID `2`
and deactivate the revive point with ID `1`
for a player that selects the tab.
[image:activate_revive_point_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error, which is misleading.
* If [input:Revive_Point_ID] is not an ID of a revive point,
  this node is no-op.
* If this node runs while the player is in the revive screen,
  the revive point is invalid for the player's revival from this revive screen.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:activate_revive_point]

# Authors
* kokokokomi222