# Summary
 Adjust the time of a running Global Timer via the Node Graph If the timer is paused first and then modified to reduce the time, the modified time will be at least 0 seconds. For countdown timers, pausing followed by modifying the time to 0s will trigger the \[When the Global Timer Is Triggered\] event upon resuming the timer. If the timer is paused first, then modified to 0s, followed by modifying the time to increase it, and finally resumed, the \[When the Global Timer Is Triggered\] event will not be triggered.

# Input Parameters
* [input:Target_Entity] (Entity) - Active Entity
* [input:Timer_Name] (String) - Identifier for the Timer. Only Timer Names configured in Timer Management can be referenced
* [input:Increase_Value] (Floating Point Numbers) - For a Countdown Timer, a positive value increases the remaining time; a negative value decreases the remaining timeIf the timer is set to Stopwatch, a positive value increases the accumulated time, while a negative value decreases it

# Usage
**TO BE ADDED**

# Example
**TO BE ADDED**

# Notes
* **TO BE ADDED**

# Performance
**TO BE ADDED**

# See Also
* **TO BE ADDED**

# Authors
