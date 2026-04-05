# Summary
[early_info]

Remove equipment from slot.

# Input Parameters
* [input:Equipment_Slot_Owner_Entity] (Entity) - Character entity to remove the equipment from.
* [input:Equipment_Slot_Row_Count] (Integer) - Row number of the equipment slot to remove from. This is 0-indexed.
* [input:Equipment_Slot_Column_Count] (Integer) - Column number of the equipment slot to remove from. This is 0-indexed.

# Usage
Use this node to remove equipment from an equipment slot.
Removed equipment stays in the inventory.

# Example
In this example, we remove the equipment at second row (indexed by 1) and third column (indexed by 2).
[image:remove_equipment_from_specified_slot_example]
This is the result of removal. Removed equipment stays in the inventory.
[image:remove_equipment_from_specified_slot_result]

# Notes
* If [input:Equipment_Slot_Owner_Entity] is not a character entity,
  this node raises "Entity component does not exist" error,
  but continues the execution.
* If [input:Equipment_Slot_Owner_Entity] does not have an "Equipment Slot" component,
  this node raises "Entity component does not exist" error,
  but continues the execution.
* If there is no equipment slot at the coordinate indicated by
  [input:Equipment_Slot_Row_Count] and [input:Equipment_Slot_Column_Count],
  this node is no-op.
* If there is no equipment at the slot, this node is no-op.

# Performance
When equipment was removed, this node took ~10 units to run on average.
If there is no equipment at the slot, this node took ~2 units to run on average.

# See Also
* [node:replace_equipment_to_the_specified_slot]

# Authors
* kokokokomi222