# Summary
Gets the revive duration of a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to get the revive duration from.

# Output Values
* [output:Duration] (Integer) - Revive duration of the player. Unit is seconds.

# Usage
Revive duration can be configured for players in player template detail panel.
When player is in the revive screen,
the timer will count down for this duration
and the player can revive back to field only after the timer reaches zero.
[image:revive_duration]

Use this node to get the revive duration of a player.

# Example
In this example, we reduce the revive duration by 5 seconds
for the player that selects the tab.
[image:set_player_revive_time_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error and returns `0`.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error, which is misleading, and returns `0`.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_player_revive_time]

# Authors
* kokokokomi222

