# Summary
Modifies the time of a global timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to modify the global timer from.
* [input:Timer_Name] (String) - Name of the timer as specified in Timer Management.
* [input:Increase_Value] (Floating Point Numbers) - Number of seconds to increase the global timer by.

# Usage
Use this node to modify the time of a global timer.
For a countdown timer, positive [input:Increase_Value] means that the remaining time will increase.
For a stopwatch timer, positive [input:Increase_Value] means that the accumulated time will increase.
Use negative value to decrease the time instead.

# Example
In this example, we have an entity with collision trigger set only to collide with characters.
When the player collides with this entity,
we increase the global timer named `Round Timer` by 10 seconds
and then destroy this entity.
[image:increase_global_timer_value_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and continues execution.
* If [input:Target_Entity] does not have the global timer component,
  this node raises "Entity component does not exist" error and continues execution.
* If [input:Timer_Name] is not the name of a global timer defined in Timer Management,
  this node is no-op.
* If the resulting time is non-negative, the time is set to 0 on the global timer.
  This is true for paused global timers as well.
* If the global timer is a countdown timer and the resulting time is non-negative,
  The global timer is stopped and [node:when_global_timer_is_triggered] event is triggered.
  If it is paused, the stopping and the event happens
  when it is resumed with 0 time on the global timer.  

# Performance
This node took ~8 units to run on average.

# See Also
* [node:start_global_timer]
* [node:get_current_global_timer_time]

# Authors
* kokokokomi222