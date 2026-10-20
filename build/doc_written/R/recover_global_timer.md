# Summary
Resumes a paused global timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to resume the global timer from.
* [input:Timer_Name] (String) - Name of the timer as specified in Timer Management.

# Usage
This node resumes a global timer that was paused by [node:pause_global_timer]

# Example
In this example, we resume the global timer named `Round Timer`
when `Round Resume` signal is received.
[image:recover_global_timer_example]

# Notes
* The word "recover" is used in the name of the node,
  which seems inconsistent with [node:resume_timer].
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and continues execution.
* If [input:Target_Entity] does not have the global timer component,
  this node raises "Entity component does not exist" error and continues execution.
* If [input:Timer_Name] is not the name of a global timer defined in Timer Management,
  this node is no-op.
* If there is no global timer named [input:Timer_Name] paused on the entity, this node is no-op.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:start_global_timer]
* [node:stop_global_timer]
* [node:pause_global_timer]

# Authors
* kokokokomi222