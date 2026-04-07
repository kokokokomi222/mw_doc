# Summary
Equip equipment to an equipment slot.

# Input Parameters
* [input:Target_Entity] (Entity) - Character entity that has an "Equipment Slot" component.
* [input:Equipment_Row] (Integer) - Row number of the equipment slot to equip to. This is 0-indexed.
* [input:Equipment_Column] (Integer) - Column number of the equipment slot to equip to. This is 0-indexed.
* [input:Equipment_Index] (Integer) - ID of the equipment to equip. e.g. `3`

# Usage
Use this node to equip equipment to an equipment slot.

# Example
When tab is selected by a character,
we look for equipment with a specific equipment config ID from the inventory of the character.
The first instance of such equipment we find,
we equip the equipment to the slot at second row (indexed by 1) and third column (indexed by 2).
[image:replace_equipment_to_the_specified_slot_example]
This is the result of equipping. Equipped equipment stays in the inventory.
[image:replace_equipment_to_the_specified_slot_result]

# Notes
* If [input:Target_Entity] is not a character entity,
  this node raises "Entity component does not exist" error,
  but continues the execution.
* If [input:Target_Entity] does not have an "Equipment Slot" component,
  this node raises "Entity component does not exist" error,
  but continues the execution.
* If there is no equipment slot at the coordinate indicated by
  [input:Equipment_Row] and [input:Equipment_Column], this node is no-op.
* If [input:Equipment_Index] is not an ID of an equipment,
  this node is no-op.
* If the equipment specified by [input:Equipment_Index] is already equipped to any equipment slot,
  this node is no-op.
* If there is an equipment already equipped to the specified slot,
  this node replaces the equipment at that slot,
  i.e. the previously equipped equipment is unequipped from the slot
  and the specified equipment is then equipped to the slot.

# Performance
This node took ~10 units to run on average.
Whether equipping is successful or not does not seem to visibly affect performance.

# See Also
* [node:remove_equipment_from_specified_slot]

# Authors
* kokokokomi222