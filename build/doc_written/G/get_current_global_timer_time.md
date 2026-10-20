# Summary
Gets the time of a global timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to pause the global timer from.
* [input:Timer_Name] (String) - Name of the timer as specified in Timer Management.

# Output Values
* [output:Current_Time] (Floating Point Numbers) - Number of seconds on the global timer.

# Usage
Use this node to get the time from a global timer.

# Example
In this example, we compute a score for the player that selected the tab,
giving 100 points for every second left in the global timer named `Round Timer`.
[image:get_current_global_timer_time_example]

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and returns `0`.
* If [input:Target_Entity] does not have the global timer component,
  this node raises "Entity component does not exist" error and returns `0`.
* If [input:Timer_Name] is not the name of a global timer defined in Timer Management,
  this node returns `0`.
* If the global timer is not running, this node returns `0`.
* This node works for paused global timer, getting the time value when the global timer was paused.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:start_global_timer]
* [node:increase_global_timer_value]

# Authors
* kokokokomi222