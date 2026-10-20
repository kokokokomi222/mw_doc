# Summary
Triggers when a signal is sent.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that has this node graph mounted.
* [output:Event_Source_GUID] (GUID) - GUID of above Entity. 0 if the entity was created dynamically.
* [output:Signal_Source_Entity] (Entity) - Entity that sent the signal.

Selecting **Signal Name** shows the parameters of the signal as output values of the node.

# Usage
Signals are custom events you can trigger.
It is globally broadcasted to all entities,
so any entity can listen to it using this node
when a signal is sent with [node:send_signal].
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
In this example, we listen to a signal named `Round Finished`.
[image:monitor_signal_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* **Signal Name** does not have an input pin,
  so it must be set statically.
* **Signal Name** can be selected by clicking on the magnifier icon on the right.
* If **Signal Name** is not selected, the verification of the stage fails and the stage cannot be played.

# Performance
This node took ~3 units to run on average.

# See Also
* [node:send_signal]
* [node:when_custom_variable_changes]

# Authors
* kokokokomi222