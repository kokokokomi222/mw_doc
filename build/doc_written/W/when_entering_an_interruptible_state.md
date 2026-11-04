# Summary

[beyond_mode_only]

Triggers when entity's poise breaks.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that had its poise broken and entered interruption-vulnerable state.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if it was dynamically created.
* [output:Attacker] (Entity) - Entity that dealt the attack that caused the poise break.

# Usage
Each character and creation entity has a bar for interruption
(known as "poise bar" in Genshin community),
which work similarly as HP bar, but for interruption.
Poise bar determines how much poise damage the entity can take
before the poise breaks and enters interrupt-vulnerable state for staggering.
[image:interrupt_demo]

Maximum interruption bar is `100` for characters
and typically ranges from `30` to `2000` for creations.
Object entity does not have a poise bar and cannot break poise.
Interrupt value (known as "poise damage" in Genshin community)
can be configured in the ability unit for objects,
or character skill client nodes for skills.
Interruption resistance can reduce the poise damage taken by the poise bar.
[image:interrupt_value_config]

When the poise break, it can stagger the entity.
The effect of stagger depends on the attack.
This effect can be configured under "On-hit performance" in ability unit component.
It can also interrupt when characters or creations are casting skills.
See [https://genshin-impact.fandom.com/wiki/Interruption_Resistance:Interruption Resistance]
for details on the poise mechanism.
[image:stagger_config]

Use this node to listen to the event when the entity is interrupted.
Use [node:get_creation_attribute] or [node:get_character_attribute] to
query values about interruption.

# Example
In this example, we play a special effect `86` (Yellow Hit Feedback) on the entity
when this entity is interrupted.
[image:when_entering_an_interruptible_state_example]

# Notes
* This node was renamed from "When Entering an Interruptible State"
  to "When Entering an Interrupt-Vulnerable State".
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* If "Current Interruption Status" of [output:Event_Source_Entity] is queried from
  [node:get_creation_attribute] or [node:get_character_attribute] during this event,
  it returns `Interrupt-Vulnerable State`.
* If the poise break was caused by a transformative reaction
  (e.g. overloaded, electro-charged),
  then [output:Attacker] is the entity that initiated the reaction.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:initiate_attack]

# Authors
* kokokokomi222