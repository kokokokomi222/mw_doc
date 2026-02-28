# Summary
Sets the environment time speed.

# Input Parameters
* [input:Environment_Time_Passage_Speed] (Floating Point Numbers) - Environment minute elapsed per real time second. Unit is (in-game environment minute) / (real life second). This value should be between `0.0` and `60.0`, inclusive.

# Usage
The environment time affects the lighting condition of the stage.
For instance, if the environment time is set to `18.0` (6pm), the sun will be setting.
The environment time can be configured in the "Stage Settings".
[image:set_current_environment_time_configure]

This node lets us set the speed at which environment time increases.
For example, if [input:Environment_Time_Passage_Speed] is set to `10.0`,
10 in-game environment minutes will pass every real life second.
So a day-night cycle will occur every `24*60/10 = 144` real life seconds.

# Example
In this example, we toggle the boolean node graph variable named `game_paused`.
If the toggled value is `Yes`, we set the environment time speed to `0`.
Otherwise, we set the environment time speed to `4.8`.
[image:set_environment_time_passage_speed_example]

# Notes
* If [input:Environment_Time_Passage_Speed] is out of range (less than 0 **OR** greater than 60),
  this node raises "Environment time passage speed exceeds the allowed range" error,
  but executes the node by clamping the value between `0.0` and `60.0`.
* At the maximum speed of `60.0`, a day-night cycle occurs every `24*60/60 = 24` real life seconds.
* In Teyvat, the environment time speed is `1.0`.
  One Teyvat minute passes every one real life second
  and a day-night cycle occurs every 24 real life minutes.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:set_current_environment_time]
* [node:query_current_environment_time]

# Authors
* kokokokomi222