# Summary
Gets the list of all entities on the field.

# Output Values
* [output:Entity_List] (Entity List) - List of all entities on the field.

# Usage
This node gives us all entities on the field.
This includes the stage, the player entities, the character entities, etc.
This list can be huge because it includes every entity currently present.

In nearly all cases, this node is not what you want to use,
because the output will have a mix of many different entities.
You may want to use 
[node:get_entities_with_specified_prefab_on_the_field] or
[node:get_entity_list_by_unit_tag] instead.
If you really need to look through all entities on the field,
[node:get_specified_type_of_entities_on_the_field] is often more useful,
because you can limit it to just characters, objects, or creations.
Use [node:get_list_of_player_entities_on_the_field] for players.

# Example
**TO BE ADDED**

# Notes
* The stage entity is always on the field.
* If the player is in the game, the player entity is considered to be on the field.
  If the player is removed from disconnecting or quitting,
  then the player is now considered to be not on the field.
* When a character is destroyed, the character is still considered to be on the field.
  After the character revives the entity ID still remains the same.
  If the character is removed from the owner player disconnecting or quitting,
  then the character is now considered to be not on the field.
* There is a limit of 1000 entities on the field.

# Performance
When there are 100 entities on the field, this node took ~5 units to run on average.
When there are 1000 entities on the field, this node took ~25 units to run on average.

# See Also
* [node:query_if_entity_is_on_the_field]
* [node:get_specified_type_of_entities_on_the_field]
* [node:get_entities_with_specified_prefab_on_the_field]
* [node:get_entity_list_by_unit_tag]

# Authors
* kokokokomi222