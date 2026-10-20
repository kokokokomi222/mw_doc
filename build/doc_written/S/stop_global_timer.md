# Summary
Stops a global timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to stop the global timer from.
* [input:Timer_Name] (String) - Name of the timer as specified in Timer Management.

# Usage
This node stops a global timer.
This removes the global timer completely from the entity:
the time value held by the global timer will be lost,
and any UI or nameplate showing the timer will disappear.

Use [node:pause_global_timer] instead if you just want to stop ticking the timer,
but keep the time value and display the timer.

# Example
In this example, we stop the global timer named `Round Timer`
when `Round Finish` signal is received.
[image:stop_global_timer_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and continues execution.
* If [input:Target_Entity] does not have the global timer component,
  this node raises "Entity component does not exist" error and continues execution.
* If [input:Timer_Name] is not the name of a global timer defined in Timer Management,
  this node is no-op.
* If there is no global timer named [input:Timer_Name] running on the entity, this node is no-op.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:start_global_timer]
* [node:pause_global_timer]
* [node:recover_global_timer]
* [node:when_global_timer_is_triggered]

# Authors
* kokokokomi222