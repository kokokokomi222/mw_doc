# Summary
[beyond_mode_only]

Triggers when player's level changes.

# Output Values
* [output:Event_Source_Entity] (Entity) - Player entity that changed its class level.
* [output:Event_Source_GUID] (GUID) - GUID of the player entity.
* [output:Pre-Change_Level] (Integer) - Level of the player class before the level change.
* [output:Post-Change_Level] (Integer) - Level of the player class after the level change.

# Usage
Use this node to listen to player's class level change.
This can occur from [node:change_players_current_class_level]
or [node:increase_players_current_class_exp].

# Example
In this example, we modify the custom variable `world_level` on the stage
when the player level changes.
[image:when_player_class_level_changes_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* If [node:change_players_current_class_level] is called
  where the changed level is same as the previous level,
  then this node does not trigger.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:change_players_current_class_level]
* [node:increase_players_current_class_exp]
* [node:query_player_class_level]

# Authors
* kokokokomi222