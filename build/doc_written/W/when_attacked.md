# Summary
Triggers when an entity is attacked.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that was attacked.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if it was dynamically created.
* [output:Attacker_Entity] (Entity) - Entity that initiated the attack.
* [output:Damage] (Floating Point Numbers) - Effective damage amount dealt. See notes for detail.
* [output:Attack_Tag_List] (String List) - List of tags associated with this attack.
* [output:Elemental_Type] (Enumeration) - One of `Pyro`, `Hydro`, `Anemo`, `Electro`, `Dendro`, `Cryo`, `Geo`, `None`.
* [output:Elemental_Attack_Potency] (Floating Point Numbers) - Elemental attack potency value of the attack. Unit is 1/25 gauge unit. See notes for detail.

# Usage
Use this node to listen to the event when the entity gets attacked.
This node must be mounted on the target of the attack.
This attack can come from

* [node:initiate_attack]
* Various character skill client nodes.
* Characters skills/bursts/passives/constellations,
  weapon passives, or artifact set passives in classic mode.
* Transformative elemental reactions (e.g. swirl, bloom).

# Example
In this example, we have a dictionary named `total_damage`
where key is attacker entity and the value is the total damage dealt to this entity.
When this entity is attacked, we update the dictionary by querying the current value,
adding the new damage, and writing the new total to the dictionary.
[image:when_attacked_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* If [output:Event_Source_Entity] is invincible,
  this event triggers with [output:Damage] equal to `0`.
* If [output:Event_Source_Entity] has "Special Status: Invincible",
  this event does not trigger.
* If [output:Event_Source_Entity] has "Special Status: HP Locked",
  this event triggers with [output:Damage] equal to `0`.
* If [output:Event_Source_Entity] has "Special Status: HP Cannot Drop Below Specified Value",
  this event triggers with the full damage, but the HP lost may be less or even 0.
* [output:Elemental_Attack_Potency] is the amount of elemental gauge applied by this attack.
  25 is 1 unit of gauge (1U), which is the unofficial unit that Genshin community uses.
  More gauge means the elemental aura will last longer.
  More gauge also means it will cancel out other elemental aura more if it reacts with that element.
  The precise gauge mechanism is very complex.
  See [https://genshin-impact.fandom.com/wiki/Elemental_Gauge_Theory:Elemental Gauge Theory]
  for detail.
* If current HP of [output:Event_Source_Entity] is queried
  with [node:get_object_attribute], [node:get_character_attribute],
  or [node:get_creation_attribute] in this event,
  it shows the HP after the damage is dealt.
* If an attack is fatal for [output:Event_Source_Entity],
  this node does not trigger.
* This node does not trigger with [node:hp_loss].
* For transformative reactions,
  [output:Attacker_Entity] is the entity that initiated the reaction.

# Performance
This node took ~10 units to run on average.

# See Also
* [node:initiate_attack]
* [node:when_attack_hits]

# Authors
* kokokokomi222