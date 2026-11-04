# Summary
Triggers when text bubble is completed.

# Output Values
* [output:Bubble_Owner_Entity] (Entity) - Entity with a text bubble component.
* [output:Character_Entity] (Entity) - Character entity that can see the text bubble.
* [output:Text_Bubble_Configuration_ID] (Config ID) - ID of the currently active text bubble.
* [output:Text_Bubble_Completion_Count] (Integer) - Number of times the character have seen this text bubble completed.

# Usage
Text bubble can be used to show text at an entity.
It can be configured in text bubble component,
which can be mounted on object, creation, and character entities.
[image:text_bubble_config]

Use this node to listen to the event when a text bubble completes.
This node must be mounted on the entity that has the text bubble component.
It is important that "Send end event?" is set to `Yes`.
If not, this node will not be triggered.
[image:text_bubble_event_config]

# Example
In this example, we have a bomb entity configured with text bubble counting down.
We destroy the entity after the text bubble is completed.
[image:when_text_bubble_is_completed_example]

# Notes
* "Send end event?" must be set to `Yes` on the component to trigger this event.
* If the text bubble is configured to loop,
  this node will trigger every time the loop ends.
* If the text bubble contains multiple texts, 
  this node only triggers when the last text completes.
* If the text bubble is switched to other text bubble by [node:switch_active_text_bubble]
  (or deactivated by the node),
  this node does not trigger.
* If no character is within the visible radius of the entity,
  this node does not trigger.
  This radius is centered at the root of the entity,
  not the attachment point of the text bubble.
* If there are multiple characters within the visible radius of the entity,
  this node is triggered once for each character.
  The value [output:Text_Bubble_Completion_Count] is tracked separately for each player.
  Even if a player switches to another character in classic mode,
  [output:Text_Bubble_Completion_Count] will be the total time seen by the player,
  not the character.
* If the text bubble is set to be initially effective,
  this node reports different [output:Text_Bubble_Configuration_ID] then expected.
  This initial text bubble is also considered separate
  for the purpose of counting [output:Text_Bubble_Completion_Count].
* If the entity is destroyed and created again,
  [output:Text_Bubble_Completion_Count] counts are reset.

# Performance
This node took ~6 units to run on average.

# See Also
* [node:switch_active_text_bubble]

# Authors
* kokokokomi222