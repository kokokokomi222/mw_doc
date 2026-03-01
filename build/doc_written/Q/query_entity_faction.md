# Summary
Gets the faction of an entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to get the faction of.

# Output Values
* [output:Faction] (Faction) - Faction of the specified entity.

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
In this example, when a tab is selected from an entity,
we set the faction of the entity as the faction of the character that selected the tab.
[image:set_entity_faction_example]

# Notes
* If [input:Target_Entity] does not exist, 
  this node raises "Entity does not exist" error,
  and returns the default value of the faction type, `0`.
* If [input:Target_Entity] is the stage entity,
  this node returns the default value of the faction type, `0`.
* The faction of the character is always the same as the faction of the owning player.
  If the faction of a player or a character changes using [node:set_entity_faction],
  the corresponding player and characters all change faction together.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_entity_faction]
* [node:get_entity_list_by_specified_faction]
* [node:query_if_faction_is_hostile]

# Authors
* kokokokomi222