# Summary
Get the equipment ID equipped at an equipment slot.

# Input Parameters
* [input:Target_Entity] (Entity) - Character entity that has an "Equipment Slot" component.
* [input:Row] (Integer) - Row number of the equipment slot to query. This is 0-indexed.
* [input:Column] (Integer) - Column number of the equipment slot to query. This is 0-indexed.

# Output Values
* [output:Equipment_Index] (Integer) - Equipment ID of the equipment equipped at the equipment slot. `0` if the slot is empty.

# Usage
Use this node to get the equipment ID of the equipment,
which is equipped at an equipment slot.

# Example
In this example, when a character selects the tab,
we look at the equipment equipped at the top-left equipment slot by the character.
We print the name of the equipment by looking up the dictionary with equipment config ID as key.
[image:get_the_equipment_index_of_the_specified_equipment_slot_example]

# Notes
* If [input:Target_Entity] is not a character entity,
  this node raises "Entity component does not exist" error and returns `0`.
* If [input:Target_Entity] does not have an "Equipment Slot" component,
  this node raises "Entity component does not exist" error and returns `0`.
* If there is no equipment slot at the coordinate indicated by [input:Row] and [input:Column],
  this node returns `0`.

# Performance
This node took ~2 units to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222