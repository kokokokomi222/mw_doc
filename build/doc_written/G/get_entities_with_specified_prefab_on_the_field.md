# Summary
Gets the list of all entities with the specified prefab on the field.

# Input Parameters
* [input:Prefab_ID] (Prefab ID) - Prefab to search for on the field. Typically copied from the top of the prefab details panel. e.g. `1012345678`

# Output Values
* [output:Entity_List] (Entity List) - List of all entities with the specified prefab on the field.

# Usage
This node returns the list of all entities with the specified prefab on the field.
Consider using [node:get_entity_list_by_unit_tag] instead
if you need more fine control over the selection of the entities.

# Example
In this example, we get the list of all entities created from prefab `1077936129` on the field,
get its length, and set it to a custom variable named `num_coins_left`.
[image:get_entities_with_specified_prefab_on_the_field_example]

# Notes
* This node is called "Get Entity With Specified Prefab **ID** on the Field" in game.
* If [input:Prefab_ID] is not an ID for a prefab, this node returns the empty list of entities.
* There is a limit of 1000 entities on the field.

# Performance
When there are 100 entities to return, this node took ~11 units to run on average.
When there are 900 entities to return, this node took ~75 units to run on average.

# See Also
* [node:query_if_entity_is_on_the_field]
* [node:get_specified_type_of_entities_on_the_field]
* [node:get_entity_list_by_unit_tag]
* [node:get_entity_list_by_specified_prefab_id]

# Authors
* kokokokomi222