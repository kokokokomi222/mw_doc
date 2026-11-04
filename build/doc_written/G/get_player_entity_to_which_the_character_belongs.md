# Summary
Gets the player that owns the character.

# Input Parameters
* [input:Character_Entity] (Entity) - Character entity.

# Output Values
* [output:Affiliated_Player_Entity] (Entity) - Player entity that owns the character.

# Usage
Use this node to get the player entity from a character entity.
This node is very frequently used in Miliastra.
Use [node:get_all_character_entities_of_specified_player]
to get the character entities from a player entity.

# Example
In this example, we make a UI control visible for a player
when the player selects the tab.
Note that `Selector Entity` from [node:when_tab_is_selected] is a character entity,
but [node:set_ui_control_group_status] wants the player entity,
so we had to "convert" the character entity to player entity.
[image:set_ui_control_group_status_example]

# Notes
* If [input:Character_Entity] does not exist,
  this node raises "Entity does not exist" error and returns `0`.
* If [input:Character_Entity] is not a character entity,
  this node raises "Entity does not exist" error, which is misleading, and returns `0`.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:get_all_character_entities_of_specified_player]

# Authors
* kokokokomi222