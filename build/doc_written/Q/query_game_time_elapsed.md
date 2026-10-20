# Summary
Gets elapsed time since game started.

# Output Values
* [output:Game_Time_Elapsed] (Integer) - Number of seconds since the game started. In the unit of seconds.

# Usage
Use this node to get how long the game has been running.

If you want to measure the duration of a span of time within a game,
it is more precise to use [node:get_current_global_timer_time],
as it outputs the time in seconds as float.

# Example
**TO BE ADDED**

# Notes
* If the game is paused by a deck selector or a floating interacting page in single player,
  this timer is also paused.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:query_timestamp_utc0]
* [node:get_current_global_timer_time]

# Authors
* kokokokomi222