# Summary
Sorts a list.

# Input Parameters
* [input:List] (Generic List) - List to sort. Must be a list of integers or floats. This list will be modified.
* [input:Sort_By] (Sorting Rules Enum) - Ascending or Descending

# Usage
Use this node to sort a list of numbers.

# Example
This node graph sorts a list of integers: `[100, 3, 99, 0, -5]`.
The resulting list is: `[-5, 0, 3, 99, 100]`.
[image:list_sorting_example]

# Notes
* If you do not select [input:Sort_By] enum, this node is a no-op.
  It will silently do nothing and continue execution.

# Performance
For random integer list of length 10, it took ~4 units to run on average.

For random integer list of length 1000, it took ~50 units to run on average.

This node runs faster on pre-sorted list, or almost sorted list.

# Authors
* kokokokomi222