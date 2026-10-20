# Summary
Triggers when tab is selected.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity with the tab component
* [output:Event_Source_GUID] (GUID) - GUID of above Entity. `0` if the entity was created dynamically.
* [output:Tab_ID] (Integer) - ID of the tab. e.g. `1`
* [output:Selector_Entity] (Entity) - Character entity that selected the tab

# Usage
Tab component is used to give selectable options to players.
[image:tabs]
Use this node to listen to the event where tab is selected by a player.

# Example
In this example, we have an entity with two tabs configured.
[image:when_tab_is_selected_example_config]
We show a text bubble when the first tab is selected,
open the shop when the second tab is selected.
[image:when_tab_is_selected_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* The maximum number of tabs that can be added to one entity is 10.
* [output:Selector_Entity] is the character entity, not the player entity.
  In order to get the player entity, use [node:get_player_entity_to_which_the_character_belongs].

# Performance
This node took ~2 units to run on average.

# See Also
* [node:activate_disable_tab]

# Authors
* kokokokomi222