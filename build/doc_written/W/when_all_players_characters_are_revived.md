# Summary
Triggers when all characters are revived for a player.

# Output Values
* [output:Player_Entity] (Entity) - Player entity that has the revived characters.

# Usage
Use this node to listen to the event when all characters are revived for a player.
This node must be mounted on the player entity.
Consider using [node:when_character_revives] instead.

# Example
In this example, we show a UI control on the player that is revived.
[image:when_all_players_characters_are_revived_example]

# Notes
* This node is triggered when the revive initiates as the loading screen starts to show,
  not when the loading screen goes away.
* [node:revive_character] does not trigger this node,
  but [node:revive_all_players_characters] does trigger this node.
* Abnormal downing (drowning and falling) does not trigger this node.
  Use [node:when_player_is_abnormally_downed_and_revives] to listen to this event.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:revive_character]
* [node:revive_all_players_characters]
* [node:revive_the_active_character]
* [node:when_character_revives]

# Authors
* kokokokomi222