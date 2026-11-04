# Summary
Gets list of players.

# Output Values
* [output:Player_Entity_List] (Entity List) - List of all player entities.

# Usage
Use this node to get the list of players that are currently connected to the stage.

# Example
In this example, we show a UI control to every player when the tab is selected.
[image:get_list_of_player_entities_on_the_field_example]

# Notes
* If a player was in the lobby but has not loaded in to the stage yet
  (e.g. game client crashing),
  this player is not in [output:Player_Entity_List].
  Players are given 10 minutes to load in to the stage,
  after which the player will not be able to load in to the stage.
* If a player left the stage, this player is not in [output:Player_Entity_List].
* If all characters of a player is down, this player is still in [output:Player_Entity_List].
* [node:query_game_mode_and_player_number] returns the player number
  that was in the room when the stage began,
  so this number does not change while the stage runs,
  and it may not match the length of [output:Player_Entity_List].
* The order of players is not by ID,
  but the order of players does not change while the stage runs.
  More testing is needed to figure out what decides the order of players.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:query_game_mode_and_player_number]

# Authors
* kokokokomi222