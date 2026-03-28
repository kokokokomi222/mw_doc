# Summary
[early_info]

Triggers when an inventory owner sells equipment.

# Input Parameters
* [input:Selling_Inventory_Owner_Entity] (Entity) - Entity that sold the equipment.
* [input:Selling_Inventory_Owner_GUID] (GUID) - GUID of the above entity. `0` if the entity was created dynamically.
* [input:Equipment_Index_List] (List) - IDs of the equipments sold. It is a list of integers. e.g. `[2, 3, 5]`

# Usage
This node listens to the event where equipment sale occurs between inventory owners via a shop.
The shop owner entity must be running a "Self Inventory Shop", not "Custom Items Shop".
The item sold must be equipment, not a normal item.
This node triggers in both situations:

* A character buys from a self inventory shop, triggering this node on the shop owner entity.
* A character sells to a self inventory shop, triggering this node on the character entity.

[node:when_equipment_is_purchased] is always triggered at the same time,
but on the other entity of the transaction.

[input:Equipment_Index_List] is the list of equipment IDs.
They are not equipment configuration IDs.
Note that "equipment ID" is an integer that identifies an instance of equipment, and it is typically small (e.g. `3`),
while "equipment configuration ID" is a configuration ID that identifies a class of equipment, and it is typically large (e.g. `1107296257`).

# Example
In this example, we print `"I sold the cool sword!"`
when equipment with the specific configuration ID is sold
from the entity that mounts this node graph.
[image:when_equipment_is_sold_example]

# Notes
* Bulk sale triggers this node.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:when_equipment_is_purchased]

# Authors
* kokokokomi222