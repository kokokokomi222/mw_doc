# Summary
Starts a timer.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to start the timer at.
* [input:Timer_Name] (String) - Name of the timer. This name is outputted to [output:Timer_Name] for [node:when_timer_is_triggered].
* [input:Loop] (Boolean) - If `Yes`, loops the timer.
* [input:Timer_Sequence] (Floating Point Number List) - List of times after the start when the timer event should trigger. Unit of the entries of the list is seconds. All entries must be positive and strictly increasing.

# Usage
First, it's important to distinguish the difference between **timers** and **global timers**.
They may seem similar, but they are completely separate systems with different purposes.
**Global timers** only fire once, but it can count up or down.
**Global timer** is primarily used to be displayed in UI by being mounted on the stage or a player.
**Global timer** can also be used to precisely measure a span of time.
On the other hand, **timer** can fire multiple times at specified times, and it can also repeat on loop.

Timer can be used to control when certain events occur in your game.
Timer can also be used to space out computation when there's a lot of it.

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

# Notes
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error and continues execution.
* If a timer with the name [input:Timer_Name] is already running on the entity,
  this node is no-op.
  A timer is considered to be running if it started
  and has not ended by [node:stop_timer] or by finishing all timer sequence without looping.
  A timer paused with [node:pause_timer] counts as running for this purpose.
* If any entry of [input:Timer_Sequence] is not positive, this node is no-op.
  In particular, if the first entry is 0, this node is no-op.
  Despite the fact that the official documentation states that
  the list is invalid if it "contains negatives",
  0 is also not allowed.
* If [input:Timer_Sequence] is not strictly increasing
  (i.e. each entry of the list is greater than the previous entry), this node is no-op.
  In particular, if there are repeating values, this node is no-op.
* If [input:Timer_Sequence] is the empty list, this node is no-op.
* If [input:Timer_Sequence] has more than 100 entries, this node is no-op.

# Performance
With [input:Timer_Sequence] of length 5, this node took ~6 units on average.

# See Also
* [node:stop_timer]
* [node:pause_timer]
* [node:resume_timer]
* [node:when_timer_is_triggered]

# Authors
* kokokokomi222