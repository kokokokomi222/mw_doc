# Summary
Gets the list of all entities of a specified type on the field

# Input Parameters
* [input:Entity_Type] (Enumeration) - One of `Stage`, `Object`, `Player`, `Character`, or `Creation`.

# Output Values
* [output:Entity_List] (Entity List) - List of all entities of the chosen type on the field.

# Usage
This node gives us all entities of a certain type on the field.

In many cases, this node is not what you want to use,
because the output will have a mix of many different entities.
You may want to use
[node:get_entities_with_specified_prefab_on_the_field] or
[node:get_entity_list_by_unit_tag] instead.
Use [node:get_list_of_player_entities_on_the_field] instead for the list of players.
Use [node:query_entity_by_guid] instead for the stage entity.

# Example
In this example, we get the list of all creatures on the field, get its length,
and set it to a custom variable named `num_creatures_left`.
[image:get_specified_type_of_entities_on_the_field_example]

# Notes
* If [input:Entity_Type] is not selected, this node returns the empty list of entities.
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
When there are 100 entities to return, this node took ~10 units to run on average.
When there are 900 entities to return, this node took ~75 units to run on average.

# See Also
* [node:query_if_entity_is_on_the_field]
* [node:get_all_entities_on_the_field]
* [node:get_entities_with_specified_prefab_on_the_field]
* [node:get_entity_list_by_unit_tag]

# Authors
* kokokokomi222