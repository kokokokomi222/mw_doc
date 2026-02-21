# Summary
Converts a value to a different type (e.g. integer `123` to string `"123"`).

# Input Parameters
* [input:Input] (Generic) - Input value. See usage section below for detail.

# Output Values
* [output:Output] (Generic) - Output value.

# Usage
Conversion is limited to the following pairs of types listed below:

* **Integer → Boolean** : `0` converts to `No`, otherwise converts to `Yes`.
* **Integer → Float** : e.g. `3` converts to `3.0`.
* **Integer → String** : e.g. `3` converts to `"3"`.
* **Entity → String** : Outputs entity ID as string. e.g. `"123"`
* **GUID → String** : e.g. `1012345678` converts to `"1012345678"`
* **Boolean → Integer** : `No` converts to `0`, `Yes` converts to `1`.
* **Boolean → String** : `No` converts to `"False"`, `Yes` converts to `"True"`.
* **Float → Integer** : Rounds to the integer. Use [node:round_to_integer_operation] instead.
* **Float → String** : Outputs the string, preserving up to 6 significant digits.
  e.g. `1.0` converts to `"1"`, `1.2` converts to `"1.2"`, `1.2345678` converts to `"1.23457"`.
  See "Notes" section below for more detail.
* **3D Vector → String** : e.g. `(1.0, 2.0, 3.0)` converts to `"{1.0, 2.0, 3.0}"`.
* **Faction → String** : Outputs faction ID as string. e.g. `"2"`

**Integer → Float** is the most important one.
**Integer → String** and **Float → String** is useful for printing to log with [node:print_string].
If you are showing the result of **Float → String** to players,
you may want more precise control over the formatting
and end up implementing your own composite node instead.

# Example
In this first example, we are looking at **Integer → Boolean** conversion.
`0` converted to boolean is `No`, so `"0 converted to No"` is printed.
`4` converted to boolean is `Yes`, so `"4 converted to Yes"` is printed.
[image:data_type_conversion_int_to_bool_example]

In this next example, we are looking at **Integer → Float** conversion.
We are looping from 0 to 4, converting the current iteration value to float to use it as x-coordinate,
and then create prefab at the location.
As a result, we get 5 prefabs created, equally spaced apart by 1 unit along x-axis.
[image:data_type_conversion_int_to_float_example]

In this last example, we are printing the number of players to the log.
In order to do so, the integer output from [node:query_game_mode_and_player_number]
is converted to a string to input into [node:print_string].
[image:data_type_conversion_int_to_string_example]

# Notes
* TODO: need to figure out the exact behavior of float → string.

# Performance
**TO BE ADDED**

# See Also
* [node:round_to_integer_operation]

# Authors
* kokokokomi222