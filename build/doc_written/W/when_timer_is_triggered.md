# Summary
Triggers when the timer reaches specified time.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that has the timer.
* [output:Event_Source_GUID] (GUID) - GUID of above Entity. `0` if the entity was created dynamically.
* [output:Timer_Name] (String) - Name of the timer.
* [output:Timer_Sequence_ID] (Integer) - Index of the time that was specified by the timer. 0-indexed.
* [output:Number_of_Loops] (Integer) - The number of times that a loop has been completed. Note that this value is already incremented on the last timer sequence if it is looping. See the example below for details.

# Usage
First, it's important to distinguish the difference between **timers** and **global timers**.
They may seem similar, but they are completely separate systems with different purposes.
**Global timers** only fire once, but it can count up or down.
**Global timer** is primarily used to be displayed in UI by being mounted on the stage or a player.
**Global timer** can also be used to precisely measure a span of time.
State of a **Global timer** can be queried by [node:get_current_global_timer_time].

On the other hand, **timer** can fire multiple times at specified moments, and it can also repeat on loop.
State of a **timer** cannot be queried from a node graph.

Timer can be used to control when certain events occur in your game.
Timer can also be used to space out computation when there's a lot of it.
Use [node:start_timer] to start a timer
and then this node to listen to when the timer is triggered.

The way the value [output:Number_of_Loops] works is not intuitive at all.
See the example for detail.

# Example
In this example, we start a timer named `test_timer` when a character selects the tab.
The list `[1, 3, 7]` is passed as [input:Timer_Sequence],
which means it will fire the timer event at 1 second, 3 seconds, and 7 seconds after the timer starts.
We also have a [node:when_timer_is_triggered] which listens to the event,
and print the output of [output:Timer_Sequence_ID] and [output:Number_of_Loops].
Because [input:Loop] is set to `Yes`, this sequence of events will repeat as follows:
<table><tbody>
<tr>
    <th>Time after timer started</th>
    <th>Timer Sequence ID output</th>
    <th>Number of Loops output</th>
</tr>
<tr>
    <td>1 second</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>3 seconds</td>
    <td>1</td>
    <td>0</td>
</tr>
<tr>
    <td>7 seconds</td>
    <td>2</td>
    <td>1</td>
</tr>
<tr>
    <td>8 seconds</td>
    <td>0</td>
    <td>1</td>
</tr>
<tr>
    <td>10 seconds</td>
    <td>1</td>
    <td>1</td>
</tr>
<tr>
    <td>14 seconds</td>
    <td>2</td>
    <td>2</td>
</tr>
<tr>
    <td>15 seconds</td>
    <td>0</td>
    <td>2</td>
</tr>
<tr>
    <td>17 seconds</td>
    <td>1</td>
    <td>2</td>
</tr>
<tr>
    <td>21 seconds</td>
    <td>2</td>
    <td>3</td>
</tr>
</tbody></table>
and so on.

[image:start_timer_example]

If [input:Loop] was set to `No`, the behavior differs.
[output:Number_of_Loops] is now always `0` even on the last timer sequence:
<table><tbody>
<tr>
    <th>Time after timer started</th>
    <th>Timer Sequence ID output</th>
    <th>Number of Loops output</th>
</tr>
<tr>
    <td>1 second</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>3 seconds</td>
    <td>1</td>
    <td>0</td>
</tr>
<tr>
    <td>7 seconds</td>
    <td>2</td>
    <td>0</td>
</tr>
</tbody></table>

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* The output [output:Number_of_Loops] increments on the event
  when the last timer sequence is triggered and if it is looping.
  See the above example for detail.
* For maintenance of the node graph,
  it is recommended that [output:Timer_Name] is always put
  into [node:multiple_branches] or [node:equal]
  so it does not unexpectedly trigger on other timers.

# Performance
This node took ~6 units to run on average.

# See Also
* [node:start_timer]
* [node:stop_timer]
* [node:pause_timer]
* [node:resume_timer]

# Authors
* kokokokomi222