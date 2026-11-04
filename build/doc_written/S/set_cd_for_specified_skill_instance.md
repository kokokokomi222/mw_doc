# Summary

[early_info]

Sets cooldown for skill instance.

# Input Parameters
* [input:Target_Entity] (Entity) - Character entity that has the skill instance.
* [input:Skill_Instance_ID] (Integer) - ID of the skill instance. e.g. `10000001`
* [input:CD] (Floating Point Numbers) - Cooldown to set for the skill instance. Unit is seconds.
* [input:Limit_Maximum_CD_Time] (Boolean) - If `Yes`, the resulting cooldown is clamped to the cooldown of the skill.

# Usage
This node, introduced in v7.2,
allows us to set the cooldown for the specific skill instance.

To set the cooldown for the skill that is active on the skill slot,
use [node:set_character_skill_cd] instead.

# Example
In this example, we have an entity with two tabs.
If the first tab is selected,
we add a skill instance to the skill slot `Skill1: E`
and store the skill instance to a node variable.
If the second tab is selected,
we set the cooldown of that skill instance to `5`.
Thus, the player will be able to use the skill after waiting for 5 seconds.
[image:set_cd_for_specified_skill_instance_example]

# Notes
* If [input:Target_Entity] is not an existing entity,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] is not a character entity,
  this node raises "Entity component does not exist" error.
* If [input:Skill_Instance_ID] is not an ID for a skill instance,
  this node is no-op.
* If [input:CD] is negative, the cooldown is set to `0`,
  i.e. the skill is ready to use after this node runs.
* If [input:Limit_Maximum_CD_Time] is `Yes`
  and [input:CD] exceeds the skill cooldown configured in the skill,
  cooldown is set to the value configured in the skill.
  For example, if the skill is configured for 20 seconds as pictured below
  and `30` was passed in to [input:CD],
  the resulting cooldown after this node runs is `20`.
  [image:skill_cooldown_config]
* If the skill was in cooldown when this node runs,
  the cooldown button will retain the displayed maximum CD it was using.
  Below example shows a case where skill cooldown is `20` and [input:CD] is `5`.
  [image:skill_button_cooldown_example_1]
  If the skill was not in cooldown when this node runs,
  the cooldown button will set the displayed maximum CD as the new cooldown.
  Below example shows the same case as before.
  [image:skill_button_cooldown_example_2]

# Performance
This node took ~4 unit to run on average.

# See Also
* [node:increase_cd_for_specified_skill_instance]
* [node:set_character_skill_cd]
* [node:set_skill_cd_based_on_maximum_cd_percentage]

# Authors
* kokokokomi222