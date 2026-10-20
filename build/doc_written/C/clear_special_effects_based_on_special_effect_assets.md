# Summary
Clear looping effects from an entity by effect ID.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to clear the looping effects from.
* [input:Special_Effects_Asset] (Config ID) - ID of the looping effect. e.g. `10001103`

# Usage
Use this node to clear looping effects from an entity
that was mounted with [node:mount_looping_special_effect].
Any looping effect with the specified effect asset ID will stop playing from the entity.
In order to more precisely specify which effect to clear.
Use [node:clear_looping_special_effect] instead.

# Example
In this example, a "Pyro Up Buff" effect is mounted every three seconds.
Using the tab clears all the accumulated effects.
[image:clear_special_effects_based_on_special_effect_assets_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Special_Effects_Asset] is not an ID of a looping effect, this node is no-op.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:mount_looping_special_effect]
* [node:clear_looping_special_effect]

# Authors
* kokokokomi222