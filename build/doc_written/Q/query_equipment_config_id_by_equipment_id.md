# Summary
Gets the equipment config ID of an equipment instance.

# Input Parameters
* [input:Equipment_Index] (Integer) - Equipment ID. e.g. `3`

# Output Values
* [output:Equipment_Config_ID] (Config ID) - Equipment configuration ID. e.g. `1107296257`

# Usage
Each equipment has one "equipment configuration ID", which can be found at the top of the item details panel.
This is typically a large number: e.g. `1107296257`.
[image:equipment_config_id]
Each instance of equipment has one "equipment ID", which specifically identifies the instance.
This is typically a small integer: e.g. `3`.

You can have multiple instances of one equipment:
e.g. 3 instances `1`, `2`, `3` can exist for the equipment `1107296257`.
This node gets the equipment configuration ID from equipment ID.

# Example
When equipment is equipped, we first print the name of the player.
We then print name of the equipment by looking up the dictionary with equipment config ID as key.
[image:when_equipment_is_equipped_example]

# Notes
* If [input:Equipment_Index] is not equipment ID for equipment,
  this node returns `0`.

# Performance
This node took ~2 units to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222