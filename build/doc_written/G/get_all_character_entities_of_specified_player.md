# Summary
Gets the list of characters owned by the player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity.

# Output Values
* [output:Character_Entity_List] (Entity List) - List of character entities owned by the player.

# Usage
Use this node to get the character entities from a player entity.
Use [node:get_player_entity_to_which_the_character_belongs]
to get the player entity from a character entity.

In beyond mode, this list will contain exactly one character.

# Example
In this example from a beyond mode stage,
we listen to when the player completes teleportation
then we play a timed VFX at the character.
Note that "Player Entity" from [node:when_player_teleport_completes] is a player entity,
but [node:play_timed_effects] wants the character entity,
so we had to "convert" the player entity to character entity.
[image:when_player_teleport_completes_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error and returns the empty list.
* If [input:Player_Entity] is not a player entity,
  this node raises "Entity does not exist" error, which is misleading,
  and returns the empty list.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:get_player_entity_to_which_the_character_belongs]

# Authors
* kokokokomi222