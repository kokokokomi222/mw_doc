# Summary
Returns whether two enumerations are equal.

# Input Parameters
* [input:Enumeration_1] (Generic) - First value to compare
* [input:Enumeration_2] (Generic) - Second value to compare

# Output Values
* [output:Result] (Boolean) - Output `Yes` if equal, `No` if not equal.

# Usage
This is the only operation available for generic enumerations.
Sadly, [node:multiple_branches] do not support enumerations,
so this node with [node:double_branch] is the only way to change the execution flow with enumerations.

# Example
In this example, we are querying the gameplay mode, which is an enumeration that can have the value
`Test Play`, `Room Play`, and `Match Play`.
If the gameplay mode is equal to `Match Play`,
then we give an achievement to the player who selected this tab.
[image:enumerations_equal_example]

# Notes
* If you leave one of the input empty, [output:Result] is `No`.
  If you leave both of the inputs empty, [output:Result] is `Yes`.
* Changing the type of [input:Enumeration_1] or [input:Enumeration_2]
  will change the type of the other to match it.
* If you leave the type of the inputs as generic,
  verification fails with "Node parameter settings error".

# Performance
This node took ~2 units to run on average.

# See Also
* [node:equal]

# Authors
* kokokokomi222