# Summary
Loops through an integer range.

# Input Parameters
* [input:Loop_Start_Value] (Integer) - Starting integer value for iteration
* [input:Loop_End_Value] (Integer) - Integer value at which the iteration ends

# Output Values
* [output:Current_Loop_Value] (Integer) - Current integer value for iteration

# Usage
Use this node to loop through an integer range.
The iteration range is **inclusive of both ends**.
For example, if the [input:Loop_Start_Value] is 3 and [input:Loop_End_Value] is 7,
then [output:Current_Loop_Value] will iterate through 3, 4, 5, 6, and 7.

The execution of the node graph will continue along "Loop Complete" after the loop is completed.
See [node:break_loop] to see how to break the loop.

It may be fine to use this node plainly for very simple tasks with a small range.
However, this node is notoriously slow for various reasons.
If you are intending to do any nontrivial amount of work with this loop,
it is important to understand its exact behavior described in the "Notes" section below.

# Example
This node graph prints numbers from 0 to 9 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9), 
and then prints "Loop completed!".
[image:finite_loop_example]

# Notes
* [input:Loop_Start_Value] and [input:Loop_End_Value] are evaluated before each iteration,
  and [input:Loop_Start_Value] is evaluated every time [input:Current_Loop_value] is used.
  These values can be modified while the loop is running,
  and that can change [input:Current_Loop_value] during the same iteration.
  While we cannot be absolutely certain,
  the behavior seems to be described by the following Python-like pseudocode:
  ```
  i:int = 0
  while True:
      loop_start_value  :int = get_loop_start_value()
      loop_end_value    :int = get_loop_end_value()
      current_loop_value:int = loop_start_value + i
      if current_loop_value > loop_end_value:
          break
      
      # it evaluates the start value every time iteration value is used
      def get_current_loop_value() -> int:
          return get_loop_start_value() + i
      loop_body(get_current_loop_value)
      
      i += 1
  ```
  Because of its behavior, following optimizations may be necessary for your loop to run better:
  <ul>
    <li>
      Stick to literal values for [input:Loop_Start_Value] and [input:Loop_End_Value] whenever possible.      
    </li>
    <li>
      If you must dynamically set [input:Loop_Start_Value] and [input:Loop_End_Value],
      then store it into a local variable first.
      This will make sure that they do not get evaluated every time the output is used, improving performance.
    </li>
    <li>
      If [output:Current_Loop_Value] is used multiple times, you will want to store it into a local variable first.
      This will make sure that [input:Loop_Start_Value] does not get evaluated every time the output is used, improving performance.
    </li>
    <li>
      If you have a performance critical loop and the range is small,
      consider unrolling the loop by setting the content of the loop body as a composite node
      and placing multiple instances of the node.
      [image:finite_loop_unrolled_loop]
    </li>
  </ul>

# Performance
This node is unusually slow in load testing.
Looping through 10 values took ~200 units to run on average.
Looping through 1000 values took ~3000 units to run on average.

# See Also
* [node:break_loop]
* [node:list_iteration_loop]

# Authors
* kokokokomi222