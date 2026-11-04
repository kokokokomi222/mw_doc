# Summary
Checks whether all characters are downed for a player.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to check the characters for.

# Output Values
* [output:Result] (Boolean) - `Yes` if the player's characters are all down. `No` otherwise.

# Usage
Use this node the check whether all characters of a player are downed.

# Example
In this example, we count all players who have at least one character alive
and print the count.
[image:query_if_all_player_characters_are_down_example]

# Notes
* During a character death animation, this node returns `No`.
* During revive loading screen, this node return `No`.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:when_the_character_is_down]
* [node:when_all_players_characters_are_down]

# Authors
* kokokokomi222
