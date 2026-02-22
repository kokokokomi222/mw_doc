# Summary
Iterates through a list.

# Input Parameters
* [input:Iteration_List] (Generic List) - List to iterate through

# Output Values
* [output:Iteration_Value] (Generic) - Value of the iterated list entry

# Usage
Use this node to go through each entry of the list one by one in order.

The execution of the node graph will continue along "Loop Complete" after the loop is completed.
See [node:break_loop] to see how to break the loop.

It may be fine to use this node plainly for very simple tasks with tiny lists.
However, this node is notoriously slow for various reasons.
If you are intending to do any nontrivial amount of work with this loop,
it is important to understand its exact behavior described in the "Notes" section below.

# Example
This example removes all entities with a specific prefab ID when the tab is selected.
A local variable is used to temporarily store the list of all relevant entities.
If the list was directly connected to the loop without using the local variable,
this node graph will not work as intended 
because the [node:get_entities_with_specified_prefab_on_the_field]
node will be evaluated every iteration and the list will change.
[image:set_local_variable_example]

# Notes
* Changing the type of [input:Iteration_List] or [output:Iteration_Value] will change the type of the other to match it.
* [input:Iteration_List] is evaluated before each iteration,
  and it is also evaluated every time [output:Iteration_Value] is used.
  This list can be modified while the loop is running,
  and this can even change [output:Iteration_Value] during the same iteration.
  While we cannot be absolutely certain,
  the behavior seems to be described by the following Python-like pseudocode:
  ```
  i:int = 0
  while True:
      iteration_list:list = get_iteration_list()
      if i >= len(iteration_list):
          break

      # it evaluates the list every time iteration value is used
      def get_iteration_value() -> generic:
          return get_iteration_list()[i]
      loop_body(get_iteration_value)

      i += 1
  ```
  Because of its behavior, following optimizations may be necessary for your loop to run better:
  <ul>
    <li>
      In most cases, you will want to copy the input list into a local variable first.
      This will make sure that [input:Iteration_List] does not get evaluated every iteration, improving performance.
    </li>
    <li>
      If [output:Iteration_Value] is used multiple times, you will want to store it into a local variable first.
      This will make sure that [input:Iteration_List] does not get evaluated every time the output is used, improving performance.
    </li>
    <li>
      If you have a performance critical loop, you may want to use [node:finite_loop] instead and compare its performance.
    </li>
    <li>
      You may be interested to use [https://act.hoyoverse.com/ys/prod/ugc/component-store/index.html#/item/1996190637174599680:Better List Iteration v2] composite nodes from the Resource Center,
      which deals with the local variables for input and output.
    </li>
  </ul>

# Performance
This node is unusually slow in load testing. 
This is maybe because the debugger stores and/or serializes all the values it iterated through,
but we are unsure how much faster it runs in release.
Looping through a list of 10 integers took ~200 units on average. 
Looping through a list of 1000 integers took ~4000 units on average.

# See Also
* [node:break_loop]
* [node:finite_loop]

# Authors
* kokokokomi222