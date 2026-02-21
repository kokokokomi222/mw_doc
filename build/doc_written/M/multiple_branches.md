# Summary
Branches execution path based on a value.

# Input Parameters
* [input:Control_Expression] (Generic) - Value to branch with. Must be an integer or a string.

# Usage
Use this node to split execution path into multiple cases using a value.
If none of the specified value matches [input:Control_Expression], then
the execution continues along the "default" path.
This node would be called "switch" in most other programming languages.

# Example
In this example, we listen to `Game Ended` signal and branch on the `result` parameter of the signal.
Depending on the value of the parameter, very different actions are performed by this node graph.

* If the value is `"victory"`, set player settlement status to `Victory`.
* If the value is `"defeat"`, set player settlement status to `Failed`.
* If the value is `"timeout"`, send a signal named `Begin Sudden Death`.
* If the value is `"disconnect"`, set a custom variable named `message`.
* If the value is none of the above, print a string `"Error: Unknown game result!"`.

[image:multiple_branches_example]

# Notes
* This node unfortunately does not support enumeration.
* It can support up to 10 branches + 1 default branch.
* If you leave the type of [input:Control_Expression] as generic,
  verification fails with "Node settings error".
* If you have duplicate values, this node always takes the default branch.
  In the below example, if [output:Tab_ID] is 1, then this node graph only prints `"Default"`.
  Even if [output:Tab_ID] is 2, this node graph still only prints `"Default"`.
  [image:multiple_branches_duplicate_values]

# Performance
This node took ~4 units to run on average for 5 branches + 1 default branch
(for either integer or string).

# See Also
* [node:double_branch]

# Authors
* kokokokomi222