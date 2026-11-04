# Summary
Heals using ability unit.

# Input Parameters
* [input:Target_Entity] (Entity) - Target entity to recover HP for.
* [input:Recovery_Amount] (Floating Point Numbers) - Amount of HP to recover. The final healing amount may change from healing bonus and incoming healing bonus. See notes below.
* [input:Ability_Unit] (String) - Ability unit to use for recovering HP, configured in the entity that mounts this node graph.
* [input:Overwrite_Ability_Unit_Config] (Boolean) - If `Yes`, use [input:Recovery_Amount] value. If `No`, ignore this value and use the value in the ability unit configuration.
* [input:Recover_Initiator_Entity] (Entity) - Define initiator entity for this HP recovery. This is passed to [node:when_hp_is_recovered] and [node:when_initiating_hp_recovery]. This parameter does not need to have a "Recover HP" ability unit. Default is the entity that mounts this node graph.

# Usage
Object entities can have ability units, which are used to deal damage or heal entities.
[image:ability_unit_menu]
This node uses "Recover HP" ability unit.
For "Hitbox Attack" or "Direct Attack" ability unit, use [node:initiate_attack] instead.
Also consider using [node:recover_hp_directly],
which can heal without configuring an ability unit and is more expressive.

# Example
In this example, we have a recover HP ability unit configured on an entity.
[image:ability_unit_recover_config]
This entity heals the character of the player that selects the tab.
Because the ability unit config was overwritten,
it will heal 500 HP, not 1000 HP,
assuming there is no healing bonus or incoming healing bonus involved.
[image:recover_hp_example]

# Notes
* If [input:Target_Entity] does not exist, this node is no-op.
* If [input:Target_Entity] is a stage or player entity, this node is no-op.
* If [input:Target_Entity] has
  "Special Status: Cannot recover HP" unit status effect,
  this node is no-op.
* If [input:Recovery_Amount] is negative, it is clamped to `0`.
  [node:when_hp_is_recovered] and [node:when_initiating_hp_recovery] still triggers in this case.
* If [input:Ability_Unit] is not a name of an ability unit the entity that mounts this node graph,
  this node is no-op.
  [input:Recover_Initiator_Entity] does not have to have an ability unit.
* If [input:Ability_Unit] is a name of "Hitbox Attack" or "Direct Attack" ability unit,
  this node is no-op.
* If [input:Recover_Initiator_Entity] is left blank,
  it defaults to the entity that mounts this node graph.
* If [input:Recover_Initiator_Entity] is a stage or a player entity,
  this node is no-op.
* A green effect is played on [input:Target_Entity]
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
This node took ~25 units to run on average.

# See Also
* [node:recover_hp_directly]
* [node:when_hp_is_recovered]
* [node:when_initiating_hp_recovery]

# Authors
* kokokokomi222