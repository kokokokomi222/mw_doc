# Summary
Gets the player ID from player GUID.

# Input Parameters
* [input:Player_GUID] (GUID) - GUID of a player entity. e.g. `1086324738`

# Output Values
* [output:Player_ID] (Integer) - ID of the player. It ranges from 1 to 8, inclusive.

# Usage
Use this node to get the player ID from player GUID.

# Example
In this example, we print the ID of the player that selected this tab.
[image:get_player_id_by_player_guid_example]

# Notes
* If [input:Player_GUID] is not a GUID for a player, this node returns `0`.
* Player GUIDs are fixed for all stages.
  Player 1's GUID is always `1086324738` and
  the next player's GUID is 1 more than the previous player's GUID.
  <table><tbody>
  <tr>
    <th>Player ID</th>
    <th>Player GUID</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1086324738</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1086324739</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1086324740</td>
  </tr>
  <tr>
    <td>4</td>
    <td>1086324741</td>
  </tr>
  <tr>
    <td>5</td>
    <td>1086324742</td>
  </tr>
  <tr>
    <td>6</td>
    <td>1086324743</td>
  </tr>
  <tr>
    <td>7</td>
    <td>1086324744</td>
  </tr>
  <tr>
    <td>8</td>
    <td>1086324745</td>
  </tr>
  </tbody></table>

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:get_player_guid_by_player_id]
* [node:query_guid_by_entity]

# Authors
* kokokokomi222
