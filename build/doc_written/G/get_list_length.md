# Summary
Returns the length of the list.

# Input Parameters
* [input:List] (Generic) - List to get the length of.

# Output Values
* [output:Length] (Integer) - Length of the list.

# Usage
Use this node to get the length of the list, i.e. number of entries of the list.

# Example
In this example, we have a list of 6 strings:
`["Xilonen", "Ororon", "Kinich", "Mualani", "Iansan", "Chasca"]`.
We get the length of that list (which is 6), convert it to string, and print it.
[image:get_list_length_example]

# Notes
* If the type of [input:List] is not selected and left as generic, verification fails with "Node parameter settings error".
* If [input:List] is left empty without any input connected, this node returns 0 for [output:Length].

# Performance
For string list of length 10, this node took ~1 unit to run on average.

For integer list of length 1000, this node took ~6 unit to run on average.
This is maybe because the debugger stores and/or serializes the list,
but we are unsure how much faster it runs in release.

# Authors
* kokokokomi222
