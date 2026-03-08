# Summary
Returns the type of an entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to get the entity type of.

# Output Values
* [output:Entity_Type] (Enumeration) - One of `Stage`, `Object`, `Player`, `Character`, or `Creation`.

# Usage
Use this node to get the type of the entity.

# Example
In this example, we get the type of the entity that is entering the collision trigger.
If the entering entity is a character, then we hide the model of the entity.
[image:get_entity_type_example]

# Notes
* **TO BE ADDED**

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:get_specified_type_of_entities_on_the_field]
* [node:get_entity_list_by_specified_type]

# Authors
* kokokokomi222