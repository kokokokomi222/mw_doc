# Summary
Gets the current environment time.

# Output Values
* [output:Current_Environment_Time] (Floating Point Numbers) - Hours since midnight. Unit is hours in in-game environment time (not real-life time). Greater or equal to 0 and less than 24 (i.e. 0 ≤ time &lt; 24).
* [output:Current_Loop_Day] (Integer) - Number of days elapsed in the environment time. Starts counting from 0.

# Usage
The environment time affects the lighting condition of the stage.
For instance, if the environment time is set to `18.0` (6pm), the sun will be setting.
The environment time can be configured in the "Stage Settings".
[image:set_current_environment_time_configure]
This node returns the current state of the environment time.

If you want to measure how long the game has been running,
use [node:query_game_time_elapsed] or [node:get_current_global_timer_time] instead.
This node is unreliable for measuring time,
because the speed of the environment time can be modified with [node:set_environment_time_passage_speed] and even be paused.

# Example
In this example, we calculate the number of hours that have passed in the environment time,
assuming the stage started at 0:00 environment time.
The calculation is simply `24 * current_loop_day + current_environment_time` with some conversions between integer and float.
[image:query_current_environment_time_example]

# Notes
* **TO BE ADDED**

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:set_current_environment_time]
* [node:set_environment_time_passage_speed]

# Authors
* kokokokomi222