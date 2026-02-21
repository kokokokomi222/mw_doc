# Summary
Gets the number of players and the gameplay mode.

# Output Values
* [output:Player_Count] (Integer) - Number of players that tried to enter this game.
* [output:Gameplay_Mode] (Enumeration) - `Test Play`, `Room Play`, or `Match Play`.

# Usage
[output:Player_Count] is the number of players that tried to enter this game.
If a player attempted to enter the game, but could not load into the game due to network issues,
they still count for this value.
If a player quit in the middle of the game, either deliberately or by getting disconnected,
they still count for this value.
This value does not change during the course of a game.

[output:Gameplay_Mode] is:

* `Test Play` - if launched from Miliastra editor as Test Play, or Multiplayer Test Play.
* `Room Play` - if launched from a room.
* `Match Play` - if launched by going through the match making.

If a player tried to match, but ended up only getting matched alone or just with their own team,
this still counts as `Match Play` (TODO: verify).

# Performance
This node took ~2 units to run on average.

# Authors
* kokokokomi222
