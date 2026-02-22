# Summary
Gets the number of players and the gameplay mode.

# Output Values
* [output:Player_Count] (Integer) - Number of players that tried to enter this game.
* [output:Gameplay_Mode] (Enumeration) - `Test Play`, `Room Play`, or `Match Play`.

# Usage
[output:Player_Count] is the number of players that tried to enter this game
(the players that were in the "Preparation Area" for room play,
or the players that were shown in the "Match successful" screen).
If a player attempted to enter the game, but could not load into the game due to a network issue or other issues,
they still count for this value (TODO: very difficult to verify thoroughly, needs more testing).
If a player quit in the middle of the game, either deliberately or by getting disconnected,
they still count for this value.
This value does not change during the course of a game.
To actually get the number of player present in the game,
you may want to use [node:when_entity_is_created] on the player entity and
[node:when_entity_is_removed_destroyed] for the player entity.
Some stages use a ready button instead to figure out the players that are present.

[output:Gameplay_Mode] is:

* `Test Play` - if the stage is launched from Miliastra editor as "Test Play" or "Multiplayer Test Play".
* `Room Play` - if the stage is launched from a room.
* `Match Play` - if the stage is launched by going through the match making.

If a player tried to match, but ended up only getting matched alone or just with their own team,
this still counts as `Match Play` (TODO: verify).

# Performance
This node took ~2 units to run on average.

# Authors
* kokokokomi222
