# Summary
Gets the current time.

# Output Values
* [output:Timestamp] (Integer) - [https://en.wikipedia.org/wiki/Unix_time:Unix time], number of seconds since 00:00:00 UTC+0 on January 1, 1970.

# Usage
This node allows us to know what year / month / day / hour / minute / second it is right now
by using it with [node:calculate_formatted_time_from_timestamp].

If you want to measure the duration of a span of time within a game,
it is more precise to use [node:get_current_global_timer_time],
as it outputs the time in seconds as float.

You also may want to use [node:query_game_time_elapsed] instead
if you just want to know how long the game has been running.

# Example
This example gets the current Unix time and print what day it is.
[image:query_timestamp_utc0_example]

# Notes
* The returned time is in UTC+0, so it will be incorrect for your server's timezone.
  Add correction by using [node:query_server_time_zone].
* It will overflow on January 19, 2038!

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:calculate_formatted_time_from_timestamp]
* [node:calculate_day_of_the_week_from_timestamp]
* [node:query_game_time_elapsed]

# Authors
* kokokokomi222