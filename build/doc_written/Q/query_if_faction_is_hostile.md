# Summary
Returns whether one faction is hostile toward another faction.

# Input Parameters
* [input:Faction_1] (Faction) - First faction.
* [input:Faction_2] (Faction) - Second faction.

# Output Values
* [output:Hostile] (Boolean) - `Yes` if the first faction is hostile toward the second faction.

# Usage
Faction is primarily used to split entities into teams with varying friendly/hostile relationships.
Creatures are only aggroed by hostile entities,
and ability units can be filtered to only target hostile faction entities (which is the default).

Factions can also be used for grouping players into teams for settlement.
By rewarding the result and ranking to factions,
faction players can be motivated to work together and compete against other factions.

Factions can be configured in "Stage Settings" but only in Beyond Mode.
In the Classic Mode, the faction configuration is locked to 5 factions with fixed relationships.

<table><tbody>
    <tr>
        <th>
            ID
        </th>
        <th>
            Faction
        </th>
        <th>
            Friendly to
        </th>
        <th>
            Hostile to
        </th>
    </tr>
    <tr>
        <td>
            1
        </td>
        <td>
            **Player**
        </td>
        <td>
            Player, Object 3
        </td>
        <td>
            Creation, Object 1, Object 2
        </td>
    </tr>
    <tr>
        <td>
            2
        </td>
        <td>
            **Creation**
        </td>
        <td>
            Creation, Object 1, Object 2
        </td>
        <td>
            Player, Object 3
        </td>
    </tr>
    <tr>
        <td>
            3
        </td>
        <td>
            **Object 1** <br/> (common objects)
        </td>
        <td>
            Object 1, Object 3
        </td>
        <td>
            Player, Creation, Object 2
        </td>
    </tr>
    <tr>
        <td>
            4
        </td>
        <td>
            **Object 2** <br/> (combative objects)
        </td>
        <td>
            Object 2, Object 3
        </td>
        <td>
            Player, Creation, Object 1
        </td>
    </tr>
    <tr>
        <td>
            5
        </td>
        <td>
            **Object 3** <br/> (player allied objects)
        </td>
        <td>
            Player, Object 1, Object 3
        </td>
        <td>
            Creation, Object 2
        </td>
    </tr>
</tbody></table>

The faction of each entity can be individually configured in the entity details panel.
Factions can be set during runtime with [node:set_entity_faction] in Beyond Mode.

# Example
In this example, we have a collision trigger on an entity.
If the entity is hostile toward the entering entity,
we play a timed VFX `10007048` (Red Ring Warning) at the entity.
[image:query_if_faction_is_hostile_example]

# Notes
* If [input:Faction_1] or [input:Faction_2] do not exist, then this node outputs `No`.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:query_entity_faction]

# Authors
* kokokokomi222