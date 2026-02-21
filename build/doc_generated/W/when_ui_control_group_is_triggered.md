# Summary
 Only UI Controls of the Interactive Button and Item Display types trigger this event The Node Graph event "UI Control Group Triggered" is sent during Stage runtime when a UI Control Group created through an Interactive Button or an Item Display UI Control is interacted with. This event can only be received by the Node Graph of the Player who triggered the interaction

# Output Values
* [output:Event_Source_Entity] (Entity) - 
* [output:Event_Source_GUID] (GUID) - 
* [output:UI_Control_Group_Composite_Index] (Integer) - If the UI control that triggered this event forms a multi-control UI group with other controls, this output parameter returns the corresponding group value
* [output:UI_Control_Group_Index] (Integer) - If the triggering UI control is a single-control UI group, this value represents the ID of that UI control groupIf the triggering UI control is part of a multi-control UI group, this value represents the ID of the control within that group

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
