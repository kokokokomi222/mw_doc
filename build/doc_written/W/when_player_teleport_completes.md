# Summary
Triggers when a player completes teleportation.

# Output Values
* [output:Player_Entity] (Entity) - Player entity that completed teleportation.
* [output:Player_GUID] (GUID) - GUID of the player entity.

# Usage
Use this node to listen to event when player teleports.
The event triggers after the teleport is finished.
Typically, this node should be added to a node graph that is mounted on a player entity.

The official documentation claims that this node triggers
"when a Player enters a Stage for the first time".
However, this does not seem to be true.
Use [node:when_entity_is_created] for the player entity to detect this event instead.

# Example
In this example, we listen to when the player completes teleportation
then we play a timed VFX at the character.
[image:when_player_teleport_completes_example]

# Notes
* When a player revives, the player teleports to a revive point and thus this node is triggered.
* This event can be forwarded by [node:forwarding_event],
  so this node could be on a node graph that is not mounted on a player entity.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:teleport_player]

# Authors
* kokokokomi222