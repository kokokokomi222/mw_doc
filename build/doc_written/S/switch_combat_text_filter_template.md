# Summary

[early_info]

Switches combat text filter template.

# Input Parameters
* [input:Player_Entity] (Entity) - Player entity to switch the combat text filter template for.
* [input:Combat_Text_Template_ID] (Integer) - ID for the combat text filter template, as defined in the component. e.g. `1`

# Usage
v7.2 introduced combat text filter,
giving craftpeople ability to hide or adjust the size of combat texts.
[image:combat_text_filter_example]

Combat text filter can be configured in Combat Text Prompt Filter component for players.
[image:combat_text_prompt_config]

Use this node to switch player's combat text filter to a different template.

Note that even though this node is available in classic mode,
Combat Text Prompt Filter component does not exist on classic mode.
Thus, it cannot perform any meaningful function in classic mode.

# Example
In this example, we have two combat text filter template configured:
`1` being normal and `2` being smaller text.
We change the combat text filter template to `2` for the player that selects the tab.
[image:switch_combat_text_filter_template_example]

# Notes
* If [input:Player_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Player_Entity] does not have a Combat Text Prompt Filter component,
  this node raises "Entity component does not exist" error.
* If [input:Combat_Text_Template_ID] is `0`,
  the player gets its combat text prompt filter disabled,
  reverting to the default text size and display.
  If [input:Combat_Text_Template_ID] is not an ID for a combat text template and is not `0`,
  this node is no-op.

# Performance
This node took ~1 unit to run on average.

# See Also
* **TO BE ADDED**

# Authors
* kokokokomi222