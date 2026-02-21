# Summary
 Make the specified Entity initiate an attack. The Entity that uses this node must have the corresponding Ability Unit configured. There are two usage modes: When the Ability Unit is \[Hitbox Attack\], it executes a hitbox attack centered on the Target Entity's Location When the Ability Unit is \[Direct Attack\], it directly attacks the Target Entity

# Input Parameters
* [input:Target_Entity] (Entity) - Depending on the Ability Unit, this can be treated either as the reference target for the Hitbox Location or as the attack target
* [input:Damage_Coefficient] (Floating Point Numbers) - The coefficient applied to the damage dealt by this attack
* [input:Damage_Increment] (Floating Point Numbers) - The incremental damage applied by this attack
* [input:Location_Offset] (3D Vector) - When using Hitbox Attack, determines the Hitbox offsetWhen using Direct Attack, determines the hit-detection location for the attack and thus where on-hit special effects are created
* [input:Rotation_Offset] (3D Vector) - When using Hitbox Attack, determines the Hitbox rotationWhen using Direct Attack, determines the hit-detection location for the attack and thus the rotation used for on-hit effects
* [input:Ability_Unit] (String) - Referenced Ability Unit. Must be configured on the entity associated with this Node Graph
* [input:Overwrite_Ability_Unit_Config] (Boolean) - When set to True, the four parameters — Damage Coefficient, Damage Increment, Location Offset, and Rotation Offset — overwrite parameters of the same name in the Ability Unit. When set to False, the Ability Unit's original configuration is used
* [input:Initiator_Entity] (Entity) - Determines the Initiator Entity for this attack. Defaults to the Entity associated with this Node Graph. Affects which attacker is identified in events such as On Hit and When Attacked

# Usage
**TO BE ADDED**

# Example
**TO BE ADDED**

# Notes
* **TO BE ADDED**

# Performance
**TO BE ADDED**

# See Also
* **TO BE ADDED**

# Authors
