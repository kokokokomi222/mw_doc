# Summary
Sets the environment time.

# Input Parameters
* [input:Environment_Time] (Floating Point Numbers) - Hours since midnight. Unit is hours in in-game environment time (not real-life time). Must be greater or equal to 0 and less than 24 (i.e. 0 ≤ time &lt; 24).

# Usage
The environment time affects the lighting condition of the stage.
For instance, if the environment time is set to `18.0` (6pm), the sun will be setting.
The environment time can be configured in the "Stage Settings".
[image:set_current_environment_time_configure]

This node lets us set the environment time in a node graph.
The environment time will immediately change to the specified value.

# Example
In this example, we listen to a signal named `Set Environment Time`.
We query the dictionary with the signal parameter `time` to get a float,
and set the environment time to that value.
For instance, if `time` was `"sunrise"`, then the environment time will be set to `6.0`.
[image:set_current_environment_time_example]

# Notes
* If [input:Environment_Time] is out of range (less than 0 **OR** greater or equal to 24),
  this node raises "Environment time exceeds the allowed range" error,
  but executes this node as if `0.0` was passed into [input:Environment_Time].
* If [input:Environment_Time] is strictly earlier than the current environment time,
  it loops over to the next day.
  So the environment time is always going forward.
  This is relevant, because [node:query_current_environment_time] returns the number of days elapsed.
  If [input:Environment_Time] is equal to the current environment time,
  the time does not move forward from this node and the number of elapsed days stay the same.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:set_environment_time_passage_speed]
* [node:query_current_environment_time]

# Authors
* kokokokomi222