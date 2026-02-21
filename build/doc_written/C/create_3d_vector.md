# Summary
Creates a 3D vector.

# Input Parameters
* [input:X-Component] (Floating Point Numbers) - X-component of the new 3D vector.
* [input:Y-Component] (Floating Point Numbers) - Y-component of the new 3D vector.
* [input:Z-Component] (Floating Point Numbers) - Z-component of the new 3D vector.

# Output Values
* [output:3D_Vector] (3D Vector) - Created 3D vector.

# Usage
Use this node to create a 3D vector.

# Example
In this example, a prefab is created when the tab is selected.
The location of the new prefab is randomly picked so that
the x-component is between `-20` and `20`,
the y-component is always 1,
and the z-component is between `-20` and `20`.
[image:create_3d_vector_example]

# Notes
* If you leave any of the input empty, it defaults to `0.0`.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:split_3d_vector]

# Authors
* kokokokomi222