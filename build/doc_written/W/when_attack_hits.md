# Summary
Triggers when an entity initiates an attack.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that initiated the attack.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if it was dynamically created.
* [output:Hit_Target_Entity] (Entity) - Entity that was attacked.
* [output:Damage] (Floating Point Numbers) - Effective damage amount dealt. See notes for detail.
* [output:Attack_Tag_List] (String List) - List of tags associated with this attack.
* [output:Elemental_Type] (Enumeration) - One of `Pyro`, `Hydro`, `Anemo`, `Electro`, `Dendro`, `Cryo`, `Geo`, `None`.
* [output:Elemental_Attack_Potency] (Floating Point Numbers) - Elemental attack potency value of the attack. Unit is 1/25 gauge unit. See notes for detail.

# Usage
Use this node to listen to the event when the entity attacks another entity.
This node must be mounted on the source of the attack.
This attack can come from

* [node:initiate_attack]
* Various character skill client nodes.
* Characters skills/bursts/passives/constellations,
  weapon passives, or artifact set passives in classic mode.
* Transformative elemental reactions (e.g. swirl, bloom).

# Example
In this example, we show a text bubble on this entity
when it does more than 10000 damage to an entity.
[image:when_attack_hits_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
* If [output:Hit_Target_Entity] has "Special Status: Invincible",
  this event triggers with [output:Damage] equal to `0`.
* If [output:Hit_Target_Entity] has "Special Status: Invincible",
  this event does not trigger.
* If [output:Hit_Target_Entity] has "Special Status: HP Locked",
  this event triggers with [output:Damage] equal to `0`.
* If [output:Hit_Target_Entity] has "Special Status: HP Cannot Drop Below Specified Value",
  this event triggers with the full damage, but the HP lost may be less or even 0.
* [output:Elemental_Attack_Potency] is the amount of elemental gauge applied by this attack.
  25 is 1 unit of gauge (1U), which is the unofficial unit that Genshin community uses.
  More gauge means the elemental aura will last longer.
  More gauge also means it will cancel out other elemental aura more if it reacts with that element.
  The precise gauge mechanism is very complex.
  See [https://genshin-impact.fandom.com/wiki/Elemental_Gauge_Theory:Elemental Gauge Theory]
  for detail.
* If current HP of [output:Hit_Target_Entity] is queried
  with [node:get_object_attribute], [node:get_character_attribute],
  or [node:get_creation_attribute] in this event,
  it shows the HP after the damage is dealt.
  If the damage was fatal,
  the [output:Hit_Target_Entity] does not exist on the field
  and HP cannot be queried.
* This node does not trigger with [node:hp_loss].
* This event will trigger for transformative reaction,
  if [output:Event_Source_Entity] initiated the reaction.

# Performance
This node took ~10 units to run on average.

# See Also
* [node:initiate_attack]
* [node:when_attacked]

# Authors
* kokokokomi222
