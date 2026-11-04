# Summary
Triggers when a character is abnormally downed and revived.

# Output Values
* [output:Player_Entity] (Entity) - Player entity that has the abnormally downed character.

# Usage
Use this node to listen to the event
when all characters are abnormally downed for a player and then revived.
This can happen in multiple ways:

* Drowning by running out of stamina while swimming.
* Falling too far down the stage.

Dying to electro-charged water or burning grass may count too,
but I was not able to set up a test for this.

This node must be mounted on the player entity.

# Example
In this example, we show a UI control on the player that is revived from abnormal downing.
[image:when_player_is_abnormally_downed_and_revives_example]

# Notes
* This node is triggered when the revive initiates as the loading screen starts to show,
  not when the loading screen goes away.
* Abnormally down from falling seems to occur
  when the character reaches around -2048 in y coordinate.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:when_all_players_characters_are_revived]
* [node:when_the_character_is_down]
* [node:when_all_players_characters_are_down]

# Authors
* kokokokomi222
