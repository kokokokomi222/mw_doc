# Summary
Sends a signal.

# Input Parameters
Selecting **Signal Name** shows the parameters of the signal as input parameters of the node.

# Usage
Signals are custom events you can trigger.
It is globally broadcasted to all entities,
so any entity can listen to it using [node:monitor_signal]
when a signal is sent with this node.
Signals can be defined in the node graph editor by opening Server Signal Explorer
(from the bottom menu bar, or top menu &gt; Window &gt; Server Signal Explorer).
The name of the signal and its parameters can be set here.
[image:server_signal_explorer]

Custom variable change could be used in place of signals
using [node:when_custom_variable_changes]
A signal is probably better to use if multiple node graphs may want to listen to it,
or if it passes multiple parameters.
But if you just want to pass in one parameter to one node graph,
this method may be easier to reason with,
because it is limited to just the node graphs held by the entity.
Also, there is a limit of 99 signals per stage.

# Example
In this example, a signal named `Round Finished` is being sent
when a character enters collision trigger of this entity.
[image:send_signal_example]

# Notes
* **Signal Name** does not have an input pin,
  so it must be set statically.
* **Signal Name** can be selected by clicking on the magnifier icon on the right.
* A stage can have up to 99 signals.
* A signal can have up to 50 parameters.
* If **Signal Name** is not selected, the verification of the stage fails and the stage cannot be played.

# Performance
This node took ~11 units to run on average.

# See Also
* [node:monitor_signal]
* [node:when_custom_variable_changes]

# Authors
* kokokokomi222