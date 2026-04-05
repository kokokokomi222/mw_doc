# Summary
Gets the list of equipments from inventory.

# Input Parameters
* [input:Inventory_Owner_Entity] (Entity) - Entity with "Inventory" component.

# Output Values
* [output:Equipment_Index_List] (Integer List) - List of equipment ID of all equipments in the inventory. e.g. `[1, 2, 3]`

# Usage
Use this node to get all equipments in an inventory.

# Example
When tab is selected by a character,
we look for equipment with a specific equipment config ID from the inventory of the character.
The first instance of such equipment we find,
we equip the equipment to the slot at second row (indexed by 1) and third column (indexed by 2).
[image:replace_equipment_to_the_specified_slot_example]

# Notes
* If [input:Inventory_Owner_Entity] is not an entity,
  this node raises "Entity does not exist" error and returns the empty list.
* If [input:Inventory_Owner_Entity] does not have an "Inventory" component,
  this node raises "Entity component does not exist" error and returns the empty list.

# Performance
This node took ~3 units to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222