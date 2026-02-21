# Summary
Breaks out of a loop.

# Usage
Use this node if you want to stop [node:finite_loop] or [node:list_iteration_loop] in the middle.

# Example
In the following example, we are looping from 0 to 99 and printing the value.
But we will break out of the loop if the iteration value is no longer less than 10.
As a result, this node graph will only print numbers from 0 to 9.
[image:break_loop_example]

# Notes
* If you have a loop in a composite node, or the break loop node is in a composite node, 
  it will fail verification with the error "Execution flow loop detected in node graph"
  and the stage will not run.
  So the loop node and the break loop node must be in the same node graph,
  i.e. cannot be split into composite nodes.

# Performance
This node took less than 1 unit to run on average.

# See Also
* [node:finite_loop]
* [node:list_iteration_loop]

# Authors
* kokokokomi222