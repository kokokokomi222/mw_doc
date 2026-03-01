# Summary
[beyond_mode_only]

Triggers when an entity changes its faction.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that changed faction.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if the entity was created dynamically.
* [output:Pre-Change_Faction] (Faction) - Old faction of the entity before the change.
* [output:Post-Change_Faction] (Faction) - New faction of the entity after the change.

# Usage
Faction is primarily used to split entities into teams with varying friendly/hostile relationships.
Creatures are only aggroed by hostile entities,
and ability units can be filtered to only target hostile faction entities (which is the default).

Factions can also be used for grouping players into teams for settlement.
By rewarding the result and ranking to factions,
faction players can be motivated to work together and compete against other factions.

Factions can be configured in "Stage Settings" but only in Beyond Mode.
The faction of each entity can be individually configured in the entity details panel.

This node triggers when an entity changes its faction,
which can only occur with [node:set_entity_faction].

# Example
In this example, we have a node graph mounted to a player.
When the player's faction changes,
we create a string list with the nickname of the player and the name of the faction
(which is obtained from a node graph variable dictionary called `faction_name` that maps faction to string).
That string list is stored to a custom variable named `message`.
[image:when_entity_faction_changes_example]

# Notes
* This node cannot trigger on the stage entity.
  [node:set_entity_faction] does not work on the stage entity,
  so the stage cannot have a faction nor acquire a faction during runtime.
* The faction of the character is always the same as the faction of the owning player.
  If the faction of a player or a character changes using [node:set_entity_faction],
  the corresponding player and characters all change faction together,
  and this node triggers on all such player and character entities.
* This node triggers even when [output:Pre-Change_Faction] and [output:Post-Change_Faction] are the same.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:set_entity_faction]
* [node:query_entity_faction]

# Authors
* kokokokomi222