# Summary
Returns `3.142`.

# Output Values
* [output:Pi_(π)] (Floating Point Numbers) - `3.142`

# Usage
This node returns `3.142`, an approximate value of π.
This is weird, because floats in Miliastra are 32-bit,
so we can have more precision (roughly 7 decimal digits).
You may want to define your own alternative composite node for this node
(e.g. [node:degrees_to_radians] of `180`, which returns `3.1415927`),
but in most cases the precision shouldn't matter too much (it's only off by ~0.013%).

You may want to use [node:degrees_to_radians] or [node:radians_to_degrees] instead
if you are working with angles.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:degrees_to_radians]
* [node:radians_to_degrees]

# Authors
* kokokokomi222