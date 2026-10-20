# Summary
Pauses a timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity that has the timer to pause.
* [input:Timer_Name] (String) - Name of the timer.

# Usage
This node pauses a timer that was started by [node:start_timer].
Paused timer does not trigger [node:when_timer_is_triggered] event anymore.
To resume the timer, use [node:resume_timer].

If you would like to completely delete all timer state and never resume it,
use [node:stop_timer] instead.

# Example
In this example, we pause a timer named `spawn_coin` while a menu UI is opened.
The timer is resumed when the menu UI is closed.
[image:pause_timer_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and continues execution.
* If there is no timer with name [input:Timer_Name] on the entity,
  this node is no-op.
* If the timer with name [input:Timer_Name] is already paused, this node is no-op.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:start_timer]
* [node:stop_timer]
* [node:resume_timer]
* [node:when_timer_is_triggered]

# Authors
* kokokokomi222
