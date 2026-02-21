# Summary
Creates a prefab.

# Input Parameters
* [input:Prefab_ID] (Prefab ID) - Prefab ID for the prefab to create. Typically copied from the top of the prefab details panel. e.g. `1012345678`
* [input:Location] (3D Vector) - Location in world coordinate space.
* [input:Rotate] (3D Vector) - Rotation in world coordinate space.
* [input:Owner_Entity] (Entity) - Owner of the created entity. Can be left empty.
* [input:Overwrite_Level] (Boolean) - If `No`, [input:Level] is ignored and the prefab setting is used.
* [input:Level] (Integer) - Level of the created entity. Only used if [input:Overwrite_Level] is `Yes`. Must be between 1 and 200, inclusive.
* [input:Unit_Tag_Index_List] (Integer List) - List of unit tag IDs to put on the created entity. e.g. `[1023456789, 1023456790]`. Can be left empty. See "Notes" section below for detail.

# Output Values
* [output:Created_Entity] (Entity) - The created entity.

# Usage
Use this node to create an instance of a prefab.
This is the most straightforward way to dynamically create an entity.

If you want to create an entity just once with static position, rotation, and level,
you can use [node:create_entity] instead.

# Example
In this example, an entity is created from prefab with ID `1077936129`,
with same location and rotation as the event source entity,
owned by the tab selecting character,
with level 90,
and with unit tags `[1073741826, 1073741827]`.
[image:create_prefab_example]

# Notes
* If prefab with [input:Prefab_ID] does not exist,
  this node raises a "Prefab ID does not exist" error, but continues the execution.
* If [input:Location] is outside the stage's "Effective Scene Range", this node is no-op.
  No entity is created.
  [image:create_prefab_effective_scene_range]
* If [input:Owner_Entity] is set to an entity that does not exist or is removed,
  this node still works and creates an entity but sets the owner of the entity to none.
* If [input:Overwrite_Level] is `Yes` and [input:Level] is less than 1 or greater than 200,
  this node is no-op. No entity is created.
  If [input:Overwrite_Level] is `No`,
  any value of [input:Level] is fine and the node will successfully execute.
* If you set unit tags in the prefab detail panel, those tags will be overwritten by [input:Unit_Tag_Index_List].
  For example, if tag A and B were set in the prefab detail panel,
  but tag B and C were passed into [input:Unit_Tag_Index_List],
  then the created entity has tag B and C.
  However, if [input:Unit_Tag_Index_List] is left empty, or an empty list is passed into it,
  the tags set in the prefab detail panel will be used.
* Entities created by this node do not have a GUID.
  If [node:query_guid_by_entity] is called on an entity created by this node, it returns `0`.
* TODO: test what happens when dynamic entity limit is reached.

# Performance
Creating an entity with default prefab setting took ~70 units to run on average.
Setting [input:Unit_Tag_Index_List] does not seem to visibly affect the performance of this node.

# See Also
* [node:create_entity]
* [node:remove_entity]
* [node:destroy_entity]

# Authors
* kokokokomi222