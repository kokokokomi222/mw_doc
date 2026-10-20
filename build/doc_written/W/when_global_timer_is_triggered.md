# Summary
Triggers when countdown global timer reaches zero.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that has the global timer.
* [output:Event_Source_GUID] (GUID) - GUID of above Entity. `0` if the entity was created dynamically.
* [output:Timer_Name] (String) - Name of the timer as specified in Timer Management.

# Usage
Use this node to listen to the event when a countdown global timer reaches zero.
This node does not trigger for stopwatch global timers.

# Example
In this example, we listen to when the global timer named `Round Timer` reaches zero,
and print `"Round is finished!"`.
[image:when_global_timer_is_triggered_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* For maintenance of the node graph,
  it is recommended that [output:Timer_Name] is always put
  into [node:multiple_branches] or [node:equal]
  so it does not unexpectedly trigger on other global timers.
* In this event, the global timer is considered to be stopped.
  So getting the time on the global timer using [node:get_current_global_timer_time] will yield `0`.
  Starting the global timer again with [node:start_global_timer] will also work
  because the global timer does not exist and is not running.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:start_global_timer]
* [node:stop_global_timer]
* [node:increase_global_timer_value]
* [node:get_current_global_timer_time]

# Authors
* kokokokomi222