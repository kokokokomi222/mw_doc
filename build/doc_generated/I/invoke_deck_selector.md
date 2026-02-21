# Summary
 Open the pre-made Deck Selector for the Target Player

# Input Parameters
* [input:Target_Player] (Entity) - Specify the runtime Player to invoke the Deck Selector
* [input:Deck_Selector_ID] (Integer) - Referenced UI Control Group ID
* [input:Select_Duration] (Floating Point Numbers) - If empty, uses the Deck Selector's default configuration; otherwise, this time value is used as the effective durationUnit in seconds
* [input:Select_Result_Corresponding_List] (Integer List) - One-to-one with display items: the Deck Selector returns the result value corresponding to each display itemRecommended configuration: 1 to X
* [input:Select_Display_Corresponding_List] (Integer List) - Deck Library Configuration Reference
* [input:Select_Minimum_Quantity] (Integer) - The minimum number of cards that must be selected for a valid interaction
* [input:Select_Maximum_Quantity] (Integer) - The maximum number of cards that can be selected for a valid interaction
* [input:Refresh_Mode] (Enumeration) - No RefreshThe minimum and maximum refresh count parameters are invalid, and the selection interface has no Refresh button
* [input:Refresh_Minimum_Quantity] (Integer) - The minimum number of cards that must be selected for a valid refresh interaction.
* [input:Refresh_Maximum_Quantity] (Integer) - The maximum number of cards that can be selected for a valid refresh interaction
* [input:Default_Return_Selection] (Integer List) - If the Deck Selector times out, has no interaction, or closes abnormally, force-assign this configured resultThe length of this Result List must match the valid card selection count

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
