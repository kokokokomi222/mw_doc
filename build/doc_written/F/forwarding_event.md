# Summary
Forwards an event to another entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Target entity where the event is being forwarded to

# Usage
Forwarded event keeps the same event output values.
In particular, event source entity (which is present in many events) is the original entity,
not the entity it is forwarded to.
Typically, event source entity is same as the self entity from [node:get_self_entity].
But with forwarded event, event source entity may differ from the self entity.

# Example
A timer event is forwarded to another entity with a specific GUID in this example.
[image:forwarding_event_example]

# Notes
* A forwarded event can be forwarded again.
  If an event is forwarded back to an entity that forwarded that event (thus making a loop),
  it seems to be a no-op (so it does not crash in an infinite loop).
* A signal event should not be forwarded
  since it will be already be triggered by the original signal event on the target.

# Performance
For a timer event, this node took ~2 units to run on average.

# Authors
* kokokokomi222