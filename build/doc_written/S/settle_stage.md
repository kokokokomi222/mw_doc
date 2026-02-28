# Summary
Settles the stage.

# Usage
Settling the stage terminates the gameplay for every player,
and all players are sent to the results screen that shows
new achievements, competitive rank changes, scores and rankings of players, etc.

To actually set the results of settlement,
use "Stage Settlement" execution nodes such as
[node:set_player_settlement_success_status] or [node:set_player_settlement_ranking_value].

# Example
In this example, the player who selected the tab will have their settlement status set to `Victory`.
Then we settle the stage, ending the stage immediately.
[image:settle_stage_example]

# Notes
* This node removes all players and characters.
  Thus, no settlement result can be set after this node has been executed.
  We recommend that you do not run any logic after this node is called,
  even though it can still run nodes after this node.

# Performance
In a single player game with all peripheral systems disabled,
this node took ~1200 units to run on average.

# See Also
* [node:set_player_settlement_success_status]
* [node:set_player_settlement_ranking_value]
* [node:set_faction_settlement_success_status]
* [node:set_faction_settlement_ranking_value]
* [node:set_player_settlement_scoreboard_data_display]

# Authors
* kokokokomi222