# Summary
Attacks using ability unit.

# Input Parameters
* [input:Target_Entity] (Entity) - Target entity to attack.
* [input:Damage_Coefficient] (Floating Point Numbers) - Multiplier value for the damage. See notes for detail.
* [input:Damage_Increment] (Floating Point Numbers) - Additive value for the damage. See notes for detail.
* [input:Location_Offset] (3D Vector) - Offset for the attack. Used for transforming hitbox and on-hit special effects. This is relative to the entity coordinate space.
* [input:Rotation_Offset] (3D Vector) - Rotation for the attack. Used for transforming hitbox and on-hit special effects. This is relative to the entity coordinate space.
* [input:Ability_Unit] (String) - Ability unit to use for the attack, configured in the entity that mounts this node graph.
* [input:Overwrite_Ability_Unit_Config] (Boolean) - If `Yes`, use [input:Damage_Coefficient], [input:Damage_Increment], [input:Location_Offset], and [input:Rotation_Offset] values. If `No`, ignore these values and use the values in the ability unit configuration.
* [input:Initiator_Entity] (Entity) - Define initiating entity for this attack. This entity is used for the attacker stats and passed to [node:when_attack_hits] and [node:when_attacked]. Default is ?????
* [input:Ability_Unit_Parent_Entity] (Entity) - Entity that holds the ability unit for the attack.

# Usage
Object entities can have ability units, which are used to deal damage or heal entities.
[image:ability_unit_menu]
This node uses "Hitbox Attack" or "Direct Attack" ability unit.
For "Recover HP" ability unit, use [node:recover_hp] instead.

If you would like to cause HP decrease without having an initiator
and not generating attack events, use [node:hp_loss] instead.

# Example
First, we have a Pyro Veneficus Mechanicus entity as attacker.
It has level `100` with ATK `1000`.
It has a hitbox attack ability unit named `pyro_hitbox`,
configured to apply pyro and have no damage variation.
[image:pyro_attack_config]

Next, we have a large electro slime as target.
It has the default configuration, except the level was modified to `60`.
The DEF of the creation will be `5*60+500 = 800` by default.

Lastly, we have a node graph mounted on the Pyro Veneficus Mechanicus entity.
When a tab is selected, this entity attacks the electro slime using the ability unit `pyro_hitbox`
but overriding [input:Damage_Coefficient] to `1.2` and [input:Damage_Increment] to `345`.
[image:initiate_attack_example]

The resulting damage is:
```
  (1.2 * 1000 + 345)               # multiplier is 1.2, ATK is 1000, additive damage is 345
* (1 - 800 / (800 + 5*100 + 500))  # electro slime's DEF is 800, attacker's level is 100
* (1 - 0.1)                        # electro slime has 10% pyro resistence by default
* 1                                # object's crit rate is 0 by default, so this attack will not crit
= 772.5
```

Because the electro slime has electro aura on it,
this pyro attack will trigger overloaded transformative reaction.
Level used for this reaction is the "level of stage environment" (not the level of the attacker)
which is configured in stage setting, and we have set it to 90 for this example.
Elemental mastery of the attacking entity is 0 by default.

The overloaded reaction damage is:
```
  2.75         # v5.2 changed overloaded multiplier from 2 to 2.75
* 1202.813736  # transformative reaction multiplier for level 90 environment
* 1            # EM is 0 and no reaction bonus
* (1 - 0.1)    # overloaded damage is affected by pyro RES, which is 10% for this slime
≈ 2976.96
```
[image:initiate_attack_result]

# Notes
* If [input:Target_Entity] does not exist, this node is no-op.
* If [input:Target_Entity] is a stage or player entity, this node is no-op.
* [input:Damage_Coefficient] can be negative.
* [input:Damage_Increment] can be negative.
* [input:Location_Offset] and [input:Rotation_Offset] are
  in the entity coordinate system of [input:Target_Entity].
  It takes affect after taking entity location and rotation into account,
  but entity zoom does not affect the attack location.
* If [input:Initiator_Entity] is left blank,
  it defaults to the entity mounting this node graph.
* If [input:Initiator_Entity] is the stage or player entity, this node is no-op.
* If [input:Ability_Unit_Parent_Entity] is left blank,
  it defaults to the entity mounting this node graph.
* If [input:Ability_Unit_Parent_Entity] does not have the ability unit named [input:Ability_Unit],
  this node raises "Entity component does not exist" error.
* If [input:Target_Entity] is an object entity and the ability unit is "Hitbox Attack",
  hurtbox must be configured on the target before it can receive damage from this node.
* The ability unit can filter its attack by faction and entity type.
  Target entity may not receive damage from this node if the target is filtered out.
* If [input:Target_Entity] is invincible,
  it will not receive damage, damage number does not show,
  and [node:when_attacked] triggers with zero damage.
* If [input:Target_Entity] has "Special Status: Invincible" unit status effect,
  it will not receive damage, damage number does not show,
  and [node:when_attacked] does not trigger.
* If [input:Target_Entity] has "Special Status: HP Locked" unit status effect,
  it will not receive damage, damage number does not show,
  and [node:when_attacked] triggers with zero damage.
* If [input:Target_Entity] has
  "Special Status: HP Cannot Drop Below Specified Value" unit status effect,
  it does receive damage, full damage number show,
  and [node:when_attacked] triggers with the full damage,
  but the HP will not drop below the configured value.
* The damage formula is:
  ```
  final_damage =   (damage_coefficient * ATK_of_attacker + damage_increment)
                 * (1 + total_damage_bonuses - total_damage_reductions)
                 * (1 - DEF_of_target / (DEF_of_target + 5 * level_of_attacker + 500))
                 * (1 - resistance)
                 * (1 + crit_dmg if critical hit, 1 otherwise)
  ```
  See the example section for an example.
  <p>
  Level used for transformative reaction (e.g. swirl) or catalyze damage (e.g. spread)
  is the "level of stage environment" configured in the stage setting,
  not the initiator's level.
  </p>
  <p>
  It would not be possible to describe the entire Genshin damage system in detail on this page,
  since it is very complex.
  See [https://genshin-impact.fandom.com/wiki/Damage:damage] for more detail.
  </p>
* Attack from this node can crit.
  Use "CRIT Hit Trigger Change Value" unit status effect for crit rate
  and "CRIT DMG Change Value" unit status effect for crit damage.

# Performance
This node took ~17 units to run on average.

# See Also
* [node:hp_loss]
* [node:when_attack_hits]
* [node:when_attacked]

# Authors
* kokokokomi222