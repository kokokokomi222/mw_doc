# Summary
Activate/disable a tab.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity with tab component
* [input:Tab_ID] (Integer) - ID of the tab. e.g. `1`
* [input:Activate] (Boolean) - If `yes`, activate the tab. If `no`, deactivate the tab.

# Usage
Tab component is used to give selectable options to players.
[image:tabs]
Use this node to activate or disable tabs from a node graph.

# Example
In this example, we show a text bubble when the tab is selected,
and then we disable that tab.
[image:activate_disable_tab_example]

# Notes
* If [input:Target_Entity] does not have the tab component,
  this node raises "Entity component does not exist" error.
* If the entity does not have a tab with [input:Tab_ID] as ID,
  this node is no-op.

# Performance
This node took ~4 units to run on average.

# See Also
* [node:when_tab_is_selected]

# Authors
* kokokokomi222