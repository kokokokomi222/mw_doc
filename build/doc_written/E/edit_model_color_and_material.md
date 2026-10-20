# Summary
Set custom color and material of the entity.

# Input Parameters
* [input:Target_Entity] (Entity) - Entity to set the custom color and material. Must be an object entity.
* [input:Overwrite_Color_Configurations] (Boolean) - `Yes` to apply new custom color configuration values, `No` otherwise
* [input:Enable_Custom_Color?] (Boolean) - `Yes` to enable the custom color, `No` otherwise
* [input:Fill_Color] (Integer) - The custom color to apply. `0xRRGGBB` where `RR` is the red, `GG` is the green, and `BB` is the blue component of the color in hexadecimal. e.g. `16776960` for yellow.
* [input:Color_Opacity] (Floating Point Number) - The opacity of the custom color. Between 0 and 100, inclusive.
* [input:Color_Blend_Mode] (Blend Mode Enum) - One of `Override` or `Multiply`
* [input:Overwrite_Material_Configurations] (Boolean) - `Yes` to apply new custom material configuration values, `No` otherwise
* [input:Enable_Custom_Material?] (Boolean) - `Yes` to enable the custom material, `No` otherwise
* [input:Fill_Material_Type] (Material Enum) - One of `Freeze` or `Petrification`

# Usage
Luna VIII introduced custom color and material for entities.
With this feature, models can be put into different colors.
[image:model_color_material_config]
This node lets you set these custom color and material values in the node graph.

# Example
In this example, we set the custom color of the entity.
Because [input:Overwrite_Color_Configurations] is `Yes`,
the color configurations ([input:Enable_Custom_Color?], [input:Fill_Color], [input:Color_Opacity], and [input:Color_Blend_Mode]) are applied to the entity.
However, [input:Overwrite_Material_Configurations] is `No`,
so the material configurations ([input:Enable_Custom_Material?] and [input:Fill_Material_Type]) are ignored.
As a result, custom color gets enabled with 100% opacity blue with multiply blend mode.
[image:edit_model_color_and_material_example]

# Notes
* [input:Target_Entity] must be an object entity.
  If [input:Target_Entity] is a stage, character, player, or creation entity,
  this node raises "Entity does not exist" error
  (can be misleading, because the non-object entity may exist).
* [input:Fill_Color] can be copied from the entity detail panel.
  [image:color_code_copy]
* If [input:Fill_Color] is at least `2^24`, the lower 24 bits are used for the color.
  For example, if [input:Fill_Color] is `16777216 = 2^24`,
  the lower 24 bits are all 0, so the color is set to black.
* If [input:Fill_Color] is negative,
  the lower 24 bits of the binary representation is used for the color.
  Miliastra uses [https://en.wikipedia.org/wiki/Two%27s_complement:two's complement]
  to represent negative integers in binary.
  For example, if [input:Fill_Color] is `-256`,
  the binary representation of this number is `11111111111111111111111100000000`,
  so the color is set to yellow.
* If [input:Color_Opacity] is not between 0 and 100,
  this input is ignored and the original opacity value is kept.
* When [output:Color_Blend_Mode] is `Override`,
  it appears to use the following blending written in pseudo-shader code:
  `output.rgb = original.rgb * (1.0-opacity/100.0) + custom_color.rgb * opacity/100.0`.
  If the opacity is full at `100.0`, the model appears to be painted uniformly by the custom color.
  Below is an example of a model painted blue at full opacity with `Override` blend mode.
  [image:model_color_override]
* When [output:Color_Blend_Mode] is `Multiply`,
  it appears to use the following blending written in pseudo-shader code:
  `output.rgb = original.rgb * (1.0-opacity/100.0) + original.rgb * custom_color.rgb * opacity/100.0)`.  
  If the opacity is full at `100.0`, the model appears to be in custom color with the original.
  Below is an example of a model painted blue at full opacity with `Multiply` blend mode.
  [image:model_color_multiply]
* Material seems to be applied after the custom color is applied.
* Models with `Freeze` and `Petrification` custom material appears like the below example.
  [image_small:model_custom_material]
* Custom color and material on decorations cannot be accessed or modified by node graphs.

# Performance
This node took ~5 units to run on average.

# See Also
* [node:get_model_color_and_material]

# Authors
* kokokokomi222
