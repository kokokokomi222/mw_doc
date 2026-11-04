# Summary
Decreases HP of an entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Target entity that loses HP.
* [input:HP_Loss] (Floating Point Numbers) - Amount of HP to lose.
* [input:Lethal] (Boolean) - If `No`, this HP loss does not occur if it would bring the HP to `0` or less.
* [input:Can_be_blocked_by_invincible] (Boolean) - If `Yes`, this node has no effect if the target entity has "Special Status: Invincible" unit status effect.
* [input:Can_be_Blocked_by_Locked_HP] (Boolean) - If `Yes`, this node has no effect if the target entity has "Special Status: HP Locked" unit status effect.
* [input:Damage_Pop-Up_Type] (Enumeration) - One of `No Pop-Up`, `Regular Pop-Up`, or `CRIT Hit Pop-Up`

# Usage
Use this node to decrease HP of an entity.
If you would like the decrease to be an attack
that has initiator, does elemental reactions, and generates attack events,
use [node:initiate_attack] instead.

# Example
In this example, we decrease the HP of this entity by 100 every 3 seconds.
[image:hp_loss_example]

# Notes
* This node has been renamed from "HP Loss" to "Lose HP".
* If [input:Target_Entity] does not exist,
  this node raises "Entity does not exist" error.
* If [input:Target_Entity] is a stage or player entity,
  this node raises "Entity does not exist" error (which can be misleading).
* If [input:HP_Loss] is negative, this node is no-op.
* If [input:Lethal] is `No`
  and [input:HP_Loss] is greater or equal to the current HP of [input:Target_Entity],
  this node is no-op.
* If [input:Target_Entity] has "Special Status: Invincible" unit status effect
  and [input:Can_be_blocked_by_invincible] is `Yes`,
  this node is no-op.
  If [input:Target_Entity] has "Special Status: Invincible" unit status effect
  and [input:Can_be_blocked_by_invincible] is `No`,
  the hp loss occurs, but the text pop up does not show.
* If [input:Target_Entity] has "Special Status: HP Locked" unit status effect
  and [input:Can_be_Blocked_by_Locked_HP] is `Yes`,
  this node is no-op.
  If [input:Target_Entity] has "Special Status: HP Locked" unit status effect
  and [input:Can_be_Blocked_by_Locked_HP] is `No`,
  the hp loss occurs, but the text pop up does not show.
* If [input:Target_Entity] has "Special Status: HP Cannot Drop Below Specified Value" unit status effect,
  the HP loss will not bring it below the configured HP threshold.
  For example, if [input:Target_Entity] has 10000 max HP, 6000 current HP,
  HP threshold configured to 50%, and [input:HP_Loss] is 2000,
  then the resulting HP loss is 1000 because the entity cannot go below 5000 HP.
* If [input:Damage_Pop-Up_Type] is not `No Pop-Up`, the damage will appear as white text.
  [image:hp_loss_regular_popup]
  Text is bigger for `CRIT Hit Pop-Up`.
  The displayed HP loss amount is rounded up to an integer
  (this rounding behavior differs from healing text).

# Performance
This node took ~12 units to run on average.

# See Also
* [node:initiate_attack]

# Authors
* kokokokomi222