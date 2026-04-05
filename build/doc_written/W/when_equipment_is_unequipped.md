# Summary
Triggers when equipment is unequipped.

# Output Values
* [output:Equipment_Owner_Entity] (Entity) - Character entity that unequipped the equipment.
* [output:Equipment_Owner_GUID] (GUID) - Always `0`.
* [output:Equipment_Index] (Integer) - ID of the equipment that was unequipped. e.g. `3`

# Usage
This node must be used in "Item Node Graph", which is different from the typical "Entity Node Graph".
Item node graph can be added to an item in the item detail panel.
[image:item_node_graph_configure]
The event is triggered on the equipment item, not on the character entity.

# Example
When equipment is unequipped, we first print the name of the player.
We then print name of the equipment by looking up the dictionary with equipment config ID as key.
[image:when_equipment_is_unequipped_example]

# Notes
* If this node is used in node graphs that are not "Item Node Graph", it never triggers.
  This node must be in an "Item Node Graph".
* This node triggers when the equipment is manually unequipped.
  It also triggers when the equipment was replaced out using [node:replace_equipment_to_the_specified_slot].

# Performance
This node took ~4 units to run on average.

# See Also
* [node:when_equipment_is_equipped]

# Authors
* kokokokomi222
