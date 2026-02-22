# Summary
Creates a prefab group.

# Input Parameters
* [input:Prefab_Group_ID] (Integer) - ID for the prefab group to create.
* [input:Location] (3D Vector) - Location of the prefab group center in world coordinate space.
* [input:Rotate] (3D Vector) - Rotation of the prefab group center in world coordinate space.
* [input:Owner_Entity] (Entity) - Owner of the created entities. Can be left empty.
* [input:Level] (Integer) - Level of the created entities. Only used if [input:Overwrite_Level] is `Yes`. Must be between 1 and 200, inclusive.
* [input:Unit_Tag_Index_List] (Integer List) - List of unit tag IDs to put on the created entities. e.g. `[1023456789, 1023456790]`. Can be left empty. See "Notes" section below for detail.
* [input:Overwrite_Level] (Boolean) - If `No`, [input:Level] is ignored and the prefab setting is used.

# Output Values
* [output:Created_Entity_List] (Entity List) - Entities created in this way do not have a GUID

# Usage
A prefab group consists of multiple prefabs.
Prefab groups let you place prefabs that repeatedly show up together with same relative positions.
This node creates an instance of a prefab group dynamically.

A prefab group can be created by drag selecting or shift selecting multiple prefabs,
right-clicking to bring up the context menu,
and then selecting "Create Prefab Group".
[image:create_prefab_group_create_menu]

# Example
In this example, entities are created from prefab group with ID `1077936135`.
The center of the prefab group will have the same location and rotation as the event source entity.
All created entities will be owned by the tab selecting character,
with level 90 and unit tags `[1073741826, 1073741827]`.
[image:create_prefab_group_example]

# Notes
* If prefab group with [input:Prefab_Group_ID] does not exist, this node is a no-op.
* If [input:Location] is outside the stage's "Effective Scene Range", this node is no-op.
  No entity is created.
  [image:create_prefab_effective_scene_range]
* If one of the created entity is outside the stage's "Effective Scene Range",
  it is successfully created.
  This gives a way to create an entity outside the stage bound,
  but we would not recommend relying on this behavior
  since there is a potential for it to be patched.
* If [input:Owner_Entity] is set to an entity that does not exist or is removed,
  this node still works and creates all the entities but sets the owner of the entities to none.
* If [input:Overwrite_Level] is `Yes` and [input:Level] is less than 1 or greater than 200,
  this node is no-op. No entity is created.
  If [input:Overwrite_Level] is `No`,
  any value of [input:Level] is fine and the node will successfully execute.
* If you set unit tags in the prefab detail panel,
  those tags will be overwritten by [input:Unit_Tag_Index_List].
  All the created entities will have exactly these tags and no other tags, regardless of prefab setting.
  However, if [input:Unit_Tag_Index_List] is left empty, or an empty list is passed into it,
  the tags set in the prefab detail panel will be used.
* Entities created by this node do not have a GUID.
  If [node:query_guid_by_entity] is called on an entity created by this node, it returns `0`.
* TODO: test what happens when dynamic entity limit is reached.

# Performance
Creating a prefab group with five prefabs with the default setting took ~250 units to run on average.
Setting [input:Unit_Tag_Index_List] does not seem to visibly affect the performance of this node.

# See Also
* [node:create_prefab]
* [node:remove_entity]
* [node:destroy_entity]
* [node:activate_disable_entity_deployment_group]

# Authors
* kokokokomi222