# Summary
[beyond_mode_only]

Triggers when changing to a player's class.

# Output Values
* [output:Event_Source_Entity] (Entity) - Player entity that changed its class.
* [output:Event_Source_GUID] (GUID) - GUID of the player entity.
* [output:Pre-Modification_Class_Config_ID] (Config ID) - ID of the class it changed from.
* [output:Post-Modification_Config_ID] (Config ID) - ID of the class it changed to.

# Usage
Use this node to listen to player's class change.
This can occur from [node:change_player_class].
This node must be mounted on the player or on the class as player node graph.

This node is very similar in function as [node:when_player_class_is_removed].
The difference is that if it is mounted on the class as player node graph,
this node only triggers when the player is changing to this class from another.
See notes for detail.

# Example
In this example, we get the name of the post-modification class from a dictionary
and set it to a custom variable of the player.
[image:when_player_class_changes_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* If [node:change_player_class] is called
  where the changed class is the same as the previous class,
  then this node does not trigger.
  i.e. [output:Pre-Modification_Class_Config_ID] is always different from [output:Post-Modification_Config_ID].
* This node runs after the player's class has already switched.
  Querying player's class with [node:query_player_class] right after this node
  returns the post-modification class.
  Querying other values like class level or HP is also for post-modification class.
* The order in which the class removed and changed events are triggered appears to be fixed.
  They always occur in the following order:
  <ol>
    <li>[node:when_player_class_is_removed] runs on player node graph</li>
    <li>[node:when_player_class_is_removed] runs on class node graph for the previous class</li>
    <li>[node:when_player_class_changes] runs on player node graph</li>
    <li>[node:when_player_class_changes] runs on class node graph for the new class</li>
  </ol>

# Performance
This node took ~3 units to run on average.

# See Also
* [node:when_player_class_is_removed]
* [node:change_player_class]
* [node:query_player_class]

# Authors
* kokokokomi222