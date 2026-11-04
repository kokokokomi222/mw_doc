# Summary
Activates a text bubble.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with a text bubble component.
* [input:Text_Bubble_Configuration_ID] (Config ID) - ID for the text bubble. e.g. `1`

# Usage
Text bubble can be used to show text at an entity.
It can be configured in text bubble component,
which can be mounted on object, creation, and character entities.
[image:text_bubble_config]

Use this node to activate a text bubble.
Only one text bubble can be active at a time on an entity.
So if this entity already has an active text bubble when this node is used,
the new text bubble will replace the old one.

# Example
In this example, we show a text bubble on an entity
when a collision trigger is triggered on that entity.
[image:switch_active_text_bubble_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] does not have the text bubble component,
  this node raises "Entity component does not exist" error.
* If [input:Text_Bubble_Configuration_ID] is not an ID of a text bubble,
  any active text bubble on the entity is deactivated.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:when_text_bubble_is_completed]

# Authors
* kokokokomi222