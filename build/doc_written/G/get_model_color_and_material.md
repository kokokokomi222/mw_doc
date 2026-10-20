# Summary
Get custom color and material of the entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to get the custom color and material from. Must be an object entity.

# Output Values
* [output:Enable_Custom_Color?] (Boolean) - `Yes` if the custom color is enabled, `No` otherwise
* [output:Color_Blend_Mode] (Blend Mode Enum) - One of `Override` or `Multiply`
* [output:Color] (Integer) - The custom color. `0xRRGGBB` where `RR` is the red, `GG` is the green, and `BB` is the blue component of the color in hexadecimal. e.g. `16776960` for yellow.
* [output:Color_Opacity] (Floating Point Number) - The opacity of the custom color. Between 0 and 100, inclusive.
* [output:Enable_Custom_Material?] (Boolean) - `Yes` if the custom material is enabled, `No` otherwise
* [output:Material] (Material Enum) - One of `Freeze` or `Petrification`

# Usage
Luna VIII introduced custom color and material for entities.
With this feature, models can be put into different colors.
[image:model_color_material_config]
This node lets you get these custom color and material values in the node graph.

# Example
In this example, we get the custom color of the entity
and print the red, green, and blue component of the color.
Highest byte (bit 16 to 23) encodes red component of the color,
next byte (bit 8 to 15) encodes green,
and last byte (bit 0 to 7) encodes blue.
[image:get_model_color_and_material_example]

# Notes
* [input:Target_Entity] must be an object entity.
  If [input:Target_Entity] is a stage, character, player, or creation entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-player entity may exist).
* If [output:Enable_Custom_Color?] is `No`,
  the values of [output:Color_Blend_Mode], [output:Color], [output:Color_Opacity] are not meaningful.
* If [output:Enable_Custom_Material?] is `No`,
  the value of [output:Material] is not meaningful.
* If custom color is set to a color code that is out or range
  (negative, or at least `2^24`) by [node:edit_model_color_and_material],
  this node returns that out-of-range number.
  Thus, there is no guarantee that [output:Color] is between `0` and `2^24-1`.
* When [output:Color_Blend_Mode] is `Override`,
  it appears to use the following blending written in pseudo-shader code:
  `output.rgb = original.rgb * (1.0-opacity/100.0) + custom_color.rgb * opacity/100.0`.
  If the opacity is full at `100.0`, the model appears to be painted uniformly by the custom color.
  Below is an example of a model painted blue at full opacity with `Override` blend mode.
  [image_small:model_color_override]
* When [output:Color_Blend_Mode] is `Multiply`,
  it appears to use the following blending written in pseudo-shader code:
  `output.rgb = original.rgb * (1.0-opacity/100.0) + original.rgb * custom_color.rgb * opacity/100.0`.  
  If the opacity is full at `100.0`, the model appears to be in custom color,
  but the darker parts of the original texture is kept dark.
  Below is an example of a model painted blue at full opacity with `Multiply` blend mode.
  [image_small:model_color_multiply]
* Material seems to be applied after the custom color is applied.
* Models with `Freeze` and `Petrification` custom material appears like the below example.
  [image_small:model_custom_material]
* Custom color and material on decorations cannot be accessed or modified by node graphs.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:edit_model_color_and_material]

# Authors
* kokokokomi222
