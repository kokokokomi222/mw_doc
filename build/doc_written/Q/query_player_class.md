# Summary
[beyond_mode_only]

Gets player's class.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to get the class for.

# Output Values
* [output:Class_Config_ID] (Config ID) - ID of the class. e.g. `1090519041`

# Usage
Use this node to get player's class.

# Example
In this example, we show a text bubble on this entity
if a player with class `1090519041` enters the collision trigger.
[image:query_player_class_example]

# Notes
* If [input:Target_Player] does not exist,
  this node raises "Entity does not exist" error and returns `0`.
* If [input:Target_Player] is not a player entity,
  this node returns `0`.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:change_player_class]
* [node:when_player_class_changes]
* [node:when_player_class_is_removed]

# Authors
* kokokokomi222