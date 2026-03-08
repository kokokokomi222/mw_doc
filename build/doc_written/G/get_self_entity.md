# Summary
Returns the self entity.

# Output Values
* [output:Self_Entity] (Entity) - Self entity, the entity that is mounting the node graph that is currently executing.

# Usage
All node graphs must be mounted to an entity for it to run.
When a node graph runs, it runs in the context of an entity.
This node returns that entity.

Many event nodes provide [output:Event Source Entity],
which is typically the same as the self entity.
However, this node may still be of use for a few reasons:

* If you want two or more event nodes to share a logic, then this node can be used.
  See the "Example" section below for an example.
* If you forwarded an event with [node:forwarding_event],
  [output:Event Source Entity] can differ from the self entity.
* This node can help organize the node graph,
  because we don't have to rely on one [output:Event Source Entity] output pin
  to be connected to everything.
* This node is shorter as a name for input.
  [image:get_self_entity_is_shorter]

# Example
In this example, this node graph listens to tab selection and UI control group event,
forwarded from a player entity.
For both events, we want to hide the model of the entity,
which is achieved by using this node.
[image:get_self_entity_example]

# Notes
* **TO BE ADDED**

# Performance
This node took less than 1 unit to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222