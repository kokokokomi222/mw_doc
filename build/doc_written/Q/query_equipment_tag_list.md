# Summary
Gets the list of equipment tags from equipment instance.

# Input Parameters
* [input:Equipment_Index] (Integer) - ID of the equipment. e.g. `3`

# Output Values
* [output:Tag_List] (Config ID List) - List of configuration ID of the equipment tags on the specified equipment.

# Usage
This node lets you query the equipment tags from equipment.
Equipment tags can be configured in the item detail panel of the equipment,
under the "Interaction Settings" tab.
[image:equipment_tag_configure]
This is currently the only way to set equipment tags.

Equipment tags can be configured to be shown in-game.
[image:equipment_tag_display]

# Example
In this example, we have an item node graph.
When equipment is equipped on a character,
we check whether the equipment has a certain tag.
If it does, we mount a looping VFX on the character.
[image:query_equipment_tag_list_example]

# Notes
* If [input:Equipment_Index] is not an ID for equipment, this node returns the empty list.

# Performance
This node took ~2 units to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222
