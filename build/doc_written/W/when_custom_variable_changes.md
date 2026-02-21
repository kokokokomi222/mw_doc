# Summary
Triggers when a custom variable changes its value.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that holds the changed custom variable.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if the entity was created dynamically.
* [output:Variable_Name] (String) - Name of the changed custom variable.
* [output:Pre-Change_Value] (Generic) - The custom variable's old value before the change.
* [output:Post-Change_Value] (Generic) - The custom variable's new value after the change.

# Usage
Use this node to listen to event where a custom variable changes.
[input:Trigger_Event] must be set to `Yes` on [node:set_custom_variable] for this node to work.

This node could be used to organize node graphs, sort of treating the node as functions of a program,
by grouping logic that may be called multiple times.
Such "function" can be called from other entity's node graph as well.
However, these "functions" do not run on change right away in the middle of the node graph execution.
Instead, it goes into the event queue and runs later.

If you want to listen to changes to multiple custom variables,
you will want to use [node:multiple_branches] where [output:Variable_Name] is connected to [input:Control_Expression].
Even when you only listen to change of one custom variable,
it may be a good practice to use [node:multiple_branches] for future maintenance of the node graph.
This node only triggers if [output:Pre-Change_Value] and [output:Post-Change_Value] are
set to the same type as the custom variable.
Place this node for each type of custom variables you want to listen to.
See "Notes" section below for more detail.

Even though the official documentation states that this node does not work for "Vessel-type Custom Variables",
it works perfectly fine for container type variables as long as [node:set_custom_variable] was used to change the value.

# Example
In this example, we are listening to an event where a custom variable named `score` is changing.
In such event, we are creating a list of string `["Score increased by ", "???", " points"]`
and then setting the second entry (i.e. at index 1) to be the difference of the old score value and the new score value.
[image:when_custom_variable_changes_example]

# Notes
* If the previous value and the new value is the same, it still triggers this event.
* [input:Trigger_Event] must be set to `Yes` on [node:set_custom_variable] to trigger this event.
  If a custom variable is originally set to A,
  a [node:set_custom_variable] with [input:Trigger_Event] set to `No` changes the value to B,
  and then another with [input:Trigger_Event] set to `Yes` changes the value to C,
  only one event triggers this node with [output:Pre-Change_Value] B (not A) and [output:Post-Change_Value] C.
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* Changing the type of [output:Pre-Change_Value] or [output:Post-Change_Value]
  will change the type of the other to match it.
* If the type of the [output:Pre-Change_Value] and [output:Post-Change_Value] are not selected and left as generic,
  verification fails with "Node parameter settings error".
  Note that this behavior differs from [node:when_node_graph_variable_changes].
* If the type of the [output:Pre-Change_Value] and [output:Post-Change_Value]
  does not match the type of the custom variable that changed, it does not trigger the node.
  If you want to listen to changes to multiple custom variables with differing types, place this node for each type.
* If the type of the [output:Pre-Change_Value] and [output:Post-Change_Value] is a dictionary,
  it will trigger for change of any dictionary custom variable, 
  but it will only return [output:Pre-Change_Value] and [output:Post-Change_Value]
  if the key and value types match.
  For dictionaries with mismatching key/value type, it will return an empty dictionary for both outputs.
  We recommend that you do not use this node for dictionaries.
  If you really want to listen to changes to multiple custom variables with differing dictionary types,
  place this node for each dictionary type
  and use [node:multiple_branches] to filter out custom variables with other dictionary types.
* This node works for lists and dictionaries,
  but only if [node:set_custom_variable] was used to set the entire value.
  Modifying a custom variable list with nodes like [node:set_list_value]
  or a custom variable dictionary with nodes like [node:set_or_add_key_value_pairs_to_dictionary]
  does not trigger this node.
* This node also works for structures, providing the correct [output:Pre-Change_Value] and [output:Post-Change_Value].
  Like list and dictionary type, this node only triggers when [node:set_custom_variable] is used.
* If a value of the custom variable was changed multiple times during an execution of a node graph,
  each change triggers a separate event.
  All events are polled in order after the execution of the node graph.
* If [node:set_custom_variable] creates a new custom variable that did not exist,
  then this node successfully triggers
  with [output:Pre-Change_Value] set to the default value of the type.

# Performance
Listening to changing an integer variable took ~3 units to run on average.

Listening to changing a list of 1000 integers took ~15 units to run on average.

[node:set_custom_variable] runs slightly faster if [input:Trigger_Event] is set to `No`.
See [node:set_custom_variable] for detail.

# See Also
* [node:set_custom_variable]
* [node:when_node_graph_variable_changes]

# Authors
* kokokokomi222