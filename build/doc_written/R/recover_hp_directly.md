# Summary
Heals without ability unit.

# Input Parameters
* [input:Recover_Initiator_Entity] (Entity) - Define initiating entity for this HP recovery. This is passed to [node:when_hp_is_recovered] and [node:when_initiating_hp_recovery]. Default is the entity that mounts this node graph.
* [input:Recover_Target_Entity] (Entity) - Target entity to recover HP for.
* [input:Recovery_Amount] (Floating Point Numbers) - Amount of HP to recover. The final healing amount may change from healing bonus and incoming healing bonus. See notes below.
* [input:Ignore_Recovery_Amount_Adjustment] (Boolean) - If `Yes`, healing bonus and incoming healing bonus are ignored.
* [input:Aggro_Generation_Multiplier] (Floating Point Numbers) - Multiplier value for custom aggro.
* [input:Aggro_Generation_Increment] (Floating Point Numbers) - Additive value for custom aggro.
* [input:Healing_Tag_List] (String List) - Tags associated with this healing. This is passed to [node:when_hp_is_recovered] and [node:when_initiating_hp_recovery].

# Usage
This node lets you heal entities without using [node:recover_hp],
which requires configuring a recover HP ability unit.
This node is more expressive since it can specify all parameters in the runtime,
and it can be mounted on any entity.

# Example
In this example, this entity heals the character of the player that selects the tab.
It will heal 500 HP, assuming there is no healing bonus or incoming healing bonus involved.
[image:recover_hp_directly_example]

# Notes
* If [input:Recover_Initiator_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Recover_Initiator_Entity] is a stage or player entity,
  this node raises "Entity does not exist" error (which can be misleading).
* If [input:Recover_Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Recover_Target_Entity] is a stage or player entity,
  this node raises "Entity does not exist" error (which can be misleading).
* If [input:Recover_Target_Entity] has
  "Special Status: Cannot recover HP" unit status effect,
  this node is no-op.
* If [input:Recovery_Amount] is negative, it is clamped to `0`.
  [node:when_hp_is_recovered] and [node:when_initiating_hp_recovery] still triggers in this case.
* Documentation regarding aggro will be updated later.
* A green effect is played on [input:Recover_Target_Entity]
  and displays the effective healing amount in green text
  if this node successfully runs with more than `0` recovered HP.
  [image:recover_hp_effect]
  The displayed healing amount is rounded down to an integer
  (this rounding behavior differs from damage text).
  If the healing amount gets rounded down to `0`, it will show `1` instead.
* The healing formula is:
  ```
  healing_adjustment = healing_bonus_of_healer + incoming_healing_bonus_of_target
  final_healing_amount = recovery_amount * (1 + healing_adjustment)
  ```
  For example, if [input:Recovery_Amount] is `1000`,
  the healing bonus of the healer is 85.9%,
  and the incoming healing bonus of the target is 52%,
  the effective healing amount is `1000*(1+0.859+0.52) = 2379`.
  Note that healing bonus is a separate stat from incoming healing bonus.
  Healing bonus is available as unit status effect as "Healing Effect Adjustment Rate",
  and incoming healing bonus as "Healing Received Adjustment Rate".
  In classic mode, healing bonus and incoming healing bonus from
  ascension passives, talents, constellations, weapon passives, and artifact set effects
  all apply for this node.
  If the ability unit is configured so that "Ignore Recovery Adjustment" is set to `No`,
  then the final healing amount is just simply [input:Recovery_Amount] without any adjustment,
  ignoring healing bonus and incoming healing bonus.
  See [https://genshin-impact.fandom.com/wiki/Healing:Healing] for detail.

# Performance
This node took ~16 units to run on average.

# See Also
* [node:recover_hp]
* [node:when_hp_is_recovered]
* [node:when_initiating_hp_recovery]

# Authors
* kokokokomi222
