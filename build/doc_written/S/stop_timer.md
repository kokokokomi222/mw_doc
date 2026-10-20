# Summary
Stops a timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to stop the timer for.
* [input:Timer_Name] (String) - Name of the timer.

# Usage
This node stops the timer started by [node:start_timer].
Once the timer is stopped, all state associated with the timer is lost,
so it cannot resume from where you stopped.
Use [node:pause_timer] instead in order to pause the timer and resume later.

# Example
In this example, we stop the timer named `hunger_tick` if the character dies.
[image:stop_timer_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and continues execution.
* If there is no timer with name [input:Timer_Name] on the entity,
  this node is no-op.
* This node works on a timer that is paused by [node:pause_timer].

# Performance
This node took ~2 units to run on average.

# See Also
* [node:start_timer]
* [node:pause_timer]
* [node:resume_timer]
* [node:when_timer_is_triggered]

# Authors
* kokokokomi222
