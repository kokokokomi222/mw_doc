# Summary
 Start a Timer on the Target Entity The Timer is uniquely identified by its name A Timer consists of a looping or non-looping Timer Sequence. The Timer Sequence is a set of time points in seconds arranged in ascending order; when the Timer reaches these points, it triggers the \[On Timer Triggered\] event. The maximum length of a Timer Sequence is 100 For example, if you input the Timer Sequence \[1, 3, 5, 7\], the \[On Timer Triggered\] event fires at 1s, 3s, 5s, and 7s When Loop is set to "Yes," the Timer restarts from 0s after reaching the last time point. For \[1, 3, 5, 7\], it restarts from 0s after reaching 7s

# Input Parameters
* [input:Target_Entity] (Entity) - Active Entity
* [input:Timer_Name] (String) - Timer Identifier
* [input:Loop] (Boolean) - If set to True, the Timer Sequence executes in a loop
* [input:Timer_Sequence] (Floating Point Number List) - Provide a list sorted in ascending order. If the list is invalid (not strictly ascending, contains negatives, etc.), the Timer will not run

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
