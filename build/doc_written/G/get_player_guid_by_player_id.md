# Summary
Gets the player GUID from player ID.

# Input Parameters
* [input:Player_ID] (Integer) - ID of a player. It ranges from 1 to 8, inclusive.

# Output Values
* [output:Player_GUID] (GUID) - GUID of the player entity. e.g. `1086324738`

# Usage
Use this node to get the player GUID from player ID.
Player ID is the slot.

# Example
In this example, we show a UI control for player 1 when the tab is selected.
[image:get_player_guid_by_player_id_example]

# Notes
* If [input:Player_ID] is less than `1` or greater than `8`, this node returns `0`.
* If player slot with [input:Player_ID] was not occupied by a player
  when the stage began, this node still returns the correct GUID.
* If player with [input:Player_ID] left the stage,
  this node still returns the correct GUID.
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
* [node:get_player_id_by_player_guid]
* [node:query_entity_by_guid]

# Authors
* kokokokomi222