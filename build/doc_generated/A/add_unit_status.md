# Summary
 Add a specified Stack Count of Unit Status to the Target Entity

# Input Parameters
* [input:Applier_Entity] (Entity) - Determines the Applier Entity for this action. Defaults to the Entity associated with this Node Graph
* [input:Application_Target_Entity] (Entity) - The Entity that actually receives this Unit Status
* [input:Unit_Status_Config_ID] (Config ID) - Identifier for this Unit Status
* [input:Applied_Stacks] (Integer) - The Stack Count for this Unit Status
* [input:Unit_Status_Parameter_Dictionary] (Dictionary) - You can carry a set of parameters to override the configuration values in the unit's state.

# Output Values
* [output:Application_Result] (Enumeration) - Failed, other exceptionsFailed: Yielded to another status. A yielding relationship exists between the Target's current Unit Status and the one being appliedFailed: Maximum coexistence limit reached. The specified Unit Status on the Target Entity has reached its Coexistence LimitFailed: Unable to add additional stack. Stack addition failedSuccess: New status applied. Successfully applied new Unit StatusSuccess: Slot stacking. Target already has this Unit Status, stacking applied
* [output:Slot_ID] (Integer) - If application succeeds, returns the Unit Status Slot ID containing the instance

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
