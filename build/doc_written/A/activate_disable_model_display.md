# Summary
Makes entity visible or invisible.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to change visibility.
* [input:Activate] (Boolean) - `Yes` to make entity visible, `No` to make entity invisible.

# Usage
Use this node to make the model of an entity visible or invisible to all players.

# Example
In this example, selecting the tab of this entity makes the entity invisible.
[image:activate_disable_model_display_example]

# Notes
* If you want to make an entity invisible and keep it that way,
  you can just set the model visibility to false in the entity details panel.
  [image:activate_disable_model_display_initial_visibility_setting]
* Decoration and VFX also become invisible if the entity is invisible.
* Light source, tab, text bubble, nameplate, and scan tag stay visible even if the entity is invisible.
* Collision is not affected by visibility.
* Mini-map marker can be set to follow the visibility of the entity.
  [image:activate_disable_model_display_mini_map_marker_setting]
* If [input:Target_Entity] does not exist, this node is no-op.
* [input:Target_Entity] can be a character entity, and it works perfectly fine.
  You may want to use "Invisible to Other Players"
  and/or "Character Hidden" (makes the character look semi-transparent or fully invisible to owning player) unit status instead.
* [input:Target_Entity] can be a creation entity, and it works perfectly fine.
  You may want to use "Creation Invisible" unit status instead.
* There is no node for querying model visibility.
  You may want to track it yourself with a node graph variable or a custom variable.

# Performance
This node took ~1 unit to run on average.

# Authors
* kokokokomi222