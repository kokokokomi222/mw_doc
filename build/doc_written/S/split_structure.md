# Summary
Gets all fields of the structure.

# Input Parameters
* [input:Structure_Name_Here] (Structure) - Structure to read the field values from.

# Output Values
Output values are the field values, which depend on the structure.

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

This node lets you read the values of the fields of a structure.

# Example
We have a node graph mounted on the player.
When the player is created,
we read the saved player level, skill, and character location,
then set the player level, skill, and location.
[image:split_structure_example]

# Notes
* You must hit "Apply All" button in "Advanced Data Management"
  in order to see the new/modified structure in the node graph editor.
* If the input structure is left empty,
  the output is the default values of the fields
  as defined in "Advanced Data Management".

# Performance
The performance of this node varies heavily depending on the structure and the field values.
Profile it for your use case.

# See Also
* [node:modify_structure]
* [node:assemble_structure]

# Authors
* kokokokomi222