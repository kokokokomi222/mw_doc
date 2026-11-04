# Summary
Triggers when an entity initiates healing.

# Output Values
* [output:Event_Source_Entity] (Entity) - Entity that is doing the healing.
* [output:Event_Source_GUID] (GUID) - GUID of the above entity. `0` if it was dynamically created.
* [output:Recover_Target_Entity] (Entity) - Entity that was healed.
* [output:Recovery_Amount] (Floating Point Numbers) - Effective healing amount. See notes for detail.
* [output:Recover_Tag_List] (String List) - List of tags associated with this healing.

# Usage
Use this node to listen to the event when the entity heals a target.
This node must be mounted on the source of the healing.
This healing can come from

* [node:recover_hp]
* [node:recover_hp_directly]
* Client node "Recover Character's HP".
* Character skills/bursts/passives/constellations, weapon passives, or artifact set effects in classic mode.

# Example
In this example, whenever this entity heals,
we increment the custom variable `total_heal` by the amount of healing.
[image:when_initiating_hp_recovery_example]

# Notes
* [output:Event_Source_Entity] and [output:Event_Source_GUID] may not be the same as the self entity,
  if it was forwarded by [node:forwarding_event].
* If there was healing bonus or incoming healing bonus involved,
  [output:Recovery_Amount] reflects the value after the bonus.
* If a heal overflows (i.e. heals more than needed to reach max HP),
  [output:Recovery_Amount] only accounts for the HP that was increased.
  For instance, if the entity already had full HP,
  then [output:Recovery_Amount] is 0.
* If current HP of [output:Recover_Target_Entity] is queried
  with [node:get_object_attribute] in this event,
  it shows the HP after the healing.
* Node graph cannot be mounted to a character in classic mode.
  If you want to listen to this event on a character, there is a following hack:
  <ol>
    <li>
      Create an item node graph
      [image:char_combat_monitor_hack_step_1]
    </li>
    <li>
      Create a dummy item that mounts the item node graph.
      [image:char_combat_monitor_hack_step_2]
    </li>
    <li>
      Add an inventory component to the character and put the dummy item in the inventory.
      [image:char_combat_monitor_hack_step_3]
    </li>
  </ol>
  Then the item node graph should be able to listen to this node event for the character.

# Performance
This node took ~6 units to run on average.

# See Also
* [node:recover_hp]
* [node:recover_hp_directly]
* [node:when_hp_is_recovered]

# Authors
* kokokokomi222
