# Summary
Creates a pre-placed entity.

# Input Parameters
* [input:Target_GUID] (GUID) - GUID for the entity to create. Typically copied from the top of the entity details panel. e.g. `1012345678`
* [input:Unit_Tag_Index_List] (Integer List) - List of unit tag IDs to put on the created entity. e.g. `[1023456789, 1023456790]`. Can be left empty.

# Usage
Typically, entities placed in the scene are created when the stage begins.
However, "Initial Create" can be set to false under "Create Settings" in the entity detail panel,
which allows you to create these entities later with this node.
[image:create_entity_initial_setting]

This node can also be used to recreate entities that have been removed or destroyed,
but it cannot be used for entities created by [node:create_prefab] or [node:create_prefab_group]
because these entities do not have GUID.

Use [node:create_prefab] instead
if you want to be able to dynamically set the created entity's location, rotation, level, and even the prefab.
This is the most common way to create an entity.

Unit tags let you find all entities with a specific tag.
See [node:add_unit_tag_to_entity] for more info.
It can be left empty.
See "Notes" section below for more detail.

Consider using [node:activate_disable_entity_deployment_group] instead
if you want to create many entities at once.

# Example
In this example, we create an entity with GUID `1077936436`
and give unit tags with GUID `1073741825` and `1073741826`.
[image:create_entity_example]

# Notes
* If you set unit tags in the entity detail panel, those tags will be overwritten by [input:Unit_Tag_Index_List].
  For example, if tag A and B were set in the entity detail panel,
  but tag B and C were passed into [input:Unit_Tag_Index_List],
  then the created entity has tag B and C.
  However, if [input:Unit_Tag_Index_List] is left empty, or an empty list is passed into it,
  the tags set in the entity detail panel will be used.
* If the entity with [input:Target_GUID] has been created already, this node is no-op.
  In particular, this node does not modify the tag list of the entity in this case.
* If the entity with [input:Target_GUID] does not exist,
  this node raises a "GUID does not exist" error, but continues the execution.
* An entity removed with [node:remove_entity] or [node:destroy_entity] can be created again with this node.
* This node works perfectly fine with creations.
* TODO: test what happens when dynamic entity limit is reached.

# Performance
Creating an entity with the default dynamic unit setting took ~65 units to run on average.
Setting [input:Unit_Tag_Index_List] does not seem to visibly affect the performance of this node.

# See Also
* [node:create_prefab]
* [node:remove_entity]
* [node:destroy_entity]
* [node:activate_disable_entity_deployment_group]

# Authors
* kokokokomi222