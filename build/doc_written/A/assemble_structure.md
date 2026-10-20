# Summary
Creates a structure instance from field values.

# Input Parameters
Input parameters are the field values, which depend on the structure.

# Output Values
* [output:Structure_Name_Here] (Structure) - Assembled structure from the field values.

# Usage
Structure is a data container of fields, which are variables with a name and a type.
For example, you could define a structure representing a wave of enemies, and the fields could be "name" with string type, "music" with integer type, "deploy_group" with integer type, etc.
It is similar to struct in programming languages like C.
Miliastra structures do not have methods, just fields.
It can be defined in the "Advanced Data Management" under the main menu.
[image:advanced_data_management]

Structures are also used for save files in Miliastra.
Save data structures can be defined in "Advanced Data Management" under "In-Game Save Data Structure".
Then, in the "Manage In-Game Save" under the main menu, save template can be defined.
This defines save custom variables for players, which can be read and written with
[node:get_custom_variable] and [node:set_custom_variable].

This node lets you create an instance of a structure by providing the values of the structure fields.

# Example
In this example, we save our state to the player save custom variable.
Player level, skill, and character location is queried
and then put together into a structure
and then saved to the player.
[image:assemble_structure_example]

# Notes
* You must hit "Apply All" button in "Advanced Data Management"
  in order to see the new/modified structure in the node graph editor.
* If any of the field values are left empty,
  this node uses the default value of the type to create the structure,
  instead of using the default values of the structure
  as defined in "Advanced Data Management".

# Performance
The performance of this node varies heavily depending on the structure and the field values.
Profile it for your use case.

# See Also
* [node:modify_structure]
* [node:split_structure]

# Authors
* kokokokomi222