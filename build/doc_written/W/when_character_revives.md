# Summary
Triggers when a character revives.

# Output Values
* [output:Character_Entity] (Entity) - Character entity that revived.

# Usage
Use this node to listen to the event when the character is revived.
This node must be mounted on the character entity.
Consider using [node:when_all_players_characters_are_revived] instead.

# Example
In this example, we show a text bubble on the character that is revived.
[image:when_character_revives_example]

# Notes
* This node is triggered when the revive initiates as the loading screen starts to show,
  not when the loading screen goes away.
* [node:revive_character] and [node:revive_all_players_characters] triggers this node.
* Abnormal downing (drowning and falling) triggers this node.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:revive_character]
* [node:revive_all_players_characters]
* [node:revive_the_active_character]
* [node:when_all_players_characters_are_revived]

# Authors
* kokokokomi222