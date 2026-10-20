# Summary
Pauses a global timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to pause the global timer from.
* [input:Timer_Name] (String) - Name of the timer as specified in Timer Management.

# Usage
This node pauses a global timer.
It can be resumed with [node:recover_global_timer]

# Example
In this example, we pause the global timer named `Round Timer`
when `Round Pause` signal is received.
[image:pause_global_timer_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and continues execution.
* If [input:Target_Entity] does not have the global timer component,
  this node raises "Entity component does not exist" error and continues execution.
* If [input:Timer_Name] is not the name of a global timer defined in Timer Management,
  this node is no-op.
* If there is no global timer named [input:Timer_Name] running on the entity, this node is no-op.
* If the specified global timer is already paused, this node is no-op.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:start_global_timer]
* [node:stop_global_timer]
* [node:recover_global_timer]

# Authors
* kokokokomi222
