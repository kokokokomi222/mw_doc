# Summary
Outputs components of a 3D vector.

# Input Parameters
* [input:3D_Vector] (3D Vector) - Input 3D vector

# Output Values
* [output:X-Component] (Floating Point Numbers) - X component of the input vector
* [output:Y-Component] (Floating Point Numbers) - Y component of the input vector
* [output:Z-Component] (Floating Point Numbers) - Z component of the input vector

# Usage
Use this node to get the components of a 3D vector.

# Example
In this example, we get the location of the character entity that selected the tab.
We get the y component of that entity location and print it.
[image:split_3d_vector_example]

# Performance
This node took ~2 units to run on average when only one of the output values were used.
If you use all 3 output values, it can take ~4 units on average.

# See Also
* [node:create_3d_vector]

# Authors
* kokokokomi222