# Summary
Clear a looping effect from an entity.

# Input Parameters
* [input:Special_Effect_Instance_ID] (Integer) - Instance ID that was returned from [node:mount_looping_special_effect]
* [input:Target_Entity] (Entity) - Entity that has the looping effect mounted

# Usage
Use this node to clear a looping effect from an entity
that was mounted with [node:mount_looping_special_effect].
Consider using [node:clear_looping_special_effect] instead,
if you would like to clear potentially many instances of a looping effect at once.

# Example
In this example, a "Hydro Shield" effect is played when a tab is selected on the entity.
It is cleared when the tab is selected again.
[image:mount_looping_special_effect_example]

# Notes
* If [input:Special_Effect_Instance_ID] is not an instance ID of a mounted effect for the entity,
  this node is no-op.
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:mount_looping_special_effect]
* [node:clear_special_effects_based_on_special_effect_assets]

# Authors
* kokokokomi222