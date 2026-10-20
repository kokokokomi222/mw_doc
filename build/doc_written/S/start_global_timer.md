# Summary
Starts a global timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to start the global timer at.
* [input:Timer_Name] (String) - Name of the timer as specified in Timer Management.

# Usage
First, it's important to distinguish the difference between **timers** and **global timers**.
They may seem similar, but they are completely separate systems with different purposes.
**Global timers** only fire once, but it can count up or down.
**Global timer** is primarily used to be displayed in UI by being mounted on the stage or a player.
**Global timer** can also be used to precisely measure a span of time.
State of a **Global timer** can be queried by [node:get_current_global_timer_time].

On the other hand, **timer** can fire multiple times at specified moments, and it can also repeat on loop.
State of a **timer** cannot be queried from a node graph.

Global timers are often mounted on the stage entity or player entities,
because those global timers can then be shown from UI.
But global timers can also be displayed through nameplate.

[image:nameplate_showing_global_timer]

Global timers do not need node graphs to function.
It can be configured in Timer Management
and then added to the global timer component.
This will start the global timer when the entity is created.

[image:timer_management_menu]
[image:timer_management_window]
[image:global_timer_component]

Instead of adding to the global timer component,
one can use this node to start a global timer from a node graph.

# Example
We set up a global timer named `Round Timer` in the Timer Management
as seen above in the usage section.
Then, a global timer component is added to the entity,
but it is kept empty without attaching any global timers.
[image:global_timer_component_empty]

Lastly, we start the global timer when `Round Start` signal is received.
This will start a timer that can be viewed from UI or a nameplate.
[image:start_global_timer_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and continues execution.
* If [input:Target_Entity] does not have the global timer component,
  this node raises "Entity component does not exist" error and continues execution.
* If [input:Timer_Name] is not the name of a global timer defined in Timer Management,
  this node is no-op.
* If there is a global timer named [input:Timer_Name] already running on the entity, this node is no-op.
* If the entity is destroyed and re-created using [node:create_entity],
  the entity does not retain its global timer state from before.
  If it has a global timer in the component,
  it will start ticking from the beginning again.
* If the global timer is queried with [node:get_current_global_timer_time]
  right after this node in the same node graph,
  it returns a time close to the starting value of the global timer instead of `0`.

# Performance
This node took ~7 units to run on average.

# See Also
* [node:when_global_timer_is_triggered]
* [node:stop_global_timer]
* [node:pause_global_timer]
* [node:recover_global_timer]
* [node:increase_global_timer_value]
* [node:get_current_global_timer_time]
* [node:start_timer]

# Authors
* kokokokomi222
