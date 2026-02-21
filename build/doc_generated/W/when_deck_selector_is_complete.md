# Summary
 This event is triggered on the Player's Node Graph when the Player completes the Deck Selector, or when it is forcibly closed due to time constraints The output parameters report the Deck Selector's result and the corresponding reason

# Output Values
* [output:Target_Player] (Entity) - Active Player Entity
* [output:Selection_Result_List] (Integer List) - When a selection interaction is triggered, validselection resultsare returned as this output parameter, and the completion reason isCompleted by PlayerWhen aFull Refreshpop-up selection is triggered, the completeselection result listis returned as this output parameter, and the completion reason isRefresh AllWhen aFixed-Quantity Refreshpop-up selection is triggered, validselection resultsare returned as this output parameter, and the completion reason isFixed-Quantity RefreshWhen the Deck Selector times out with no interaction,the default selection is returnedis returned as this output parameter, and the completion reason isTimeoutWhenAllow Discard Selection is enabledand the Deck Selector is closed by the player,the default selection is returnedas this output parameter, and the completion reason isClosedManuallyWhen the Deck Selector is closed via the Node Graph,the default selection is returnedas this output parameter, and the completion reason isClosed byNode Graph
* [output:Completion_Reason] (Enumeration) - Six reason enumerationsCompleted by Player,Refresh All,Fixed-Quantity Refresh,Timeout, Closed Manually, Closed by Node Graph
* [output:Deck_Selector_Index] (Integer) - Referenced Deck Selector ID

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
