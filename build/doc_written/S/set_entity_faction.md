# Summary
[beyond_mode_only]

Sets the faction of an entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to set the faction.
* [input:Faction] (Faction) - Faction that the entity will change into.

# Usage
Faction is primarily used to split entities into teams with varying friendly/hostile relationships.
Creatures are only aggroed by hostile entities,
and ability units can be filtered to only target hostile faction entities (which is the default).

Factions can also be used for grouping players into teams for settlement.
By rewarding the result and ranking to factions,
faction players can be motivated to work together and compete against other factions.

Factions can be configured in "Stage Settings" but only in Beyond Mode.
The faction of each entity can be individually configured in the entity details panel.

# Example
In this example, when a tab is selected from an entity,
we set the faction of the entity as the faction of the character that selected the tab.
[image:set_entity_faction_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error, but continues the execution.
* If [input:Faction] is not an ID for a faction that exists,
  this node is no-op and [node:when_entity_faction_changes] does not trigger.
* If [input:Target_Entity] is the stage entity,
  this node is no-op and [node:when_entity_faction_changes] does not trigger.
  The stage does not have a faction, and it cannot be set.
* If [input:Target_Entity] is a player entity,
  then the player entity **and** all character entities owned by the player
  change the faction to [input:Faction]
  and [node:when_entity_faction_changes] triggers on all changed entities.
* If [input:Target_Entity] is a character entity,
  then the player entity that owns the character **and** all character entities owned by that player
  change the faction to [input:Faction]
  and [node:when_entity_faction_changes] triggers on all changed entities.
* If [input:Faction] is the same as the current faction of the entity,
  it still triggers [node:when_entity_faction_changes].

# Performance
This node took ~5 units to run on average.

# See Also
* [node:query_entity_faction]
* [node:when_entity_faction_changes]

# Authors
* kokokokomi222
