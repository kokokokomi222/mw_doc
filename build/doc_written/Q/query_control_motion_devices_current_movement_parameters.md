# Summary
[beyond_mode_only]

Gets the movement parameters of a control motion device.

# Input Parameters
* [input:Control_Motion_Device] (Entity) - Entity with a control motion device component

# Output Values
* [output:Forward_Acceleration] (Floating Point Numbers) - Amount of forward acceleration when forward button is held by the player. Unit is meter per second squared (m/s²).
* [output:Reverse_Acceleration] (Floating Point Numbers) - Amount of backward acceleration when backward button is held by the player. Unit is meter per second squared (m/s²).
* [output:Turn_Speed] (Floating Point Numbers) - Speed at which yaw angle changes. Unit is degree per second (°/s).
* [output:Base_Resistance] (Floating Point Numbers) - Amount of deceleration applied by default. Unit is meter per second squared (m/s²).
* [output:Resistance_Coefficient] (Floating Point Numbers) - Amount of additional deceleration to apply based on square value of the current speed, simulating drag force. Unit is 1 / meter (1/m).
* [output:Max_Forward_Speed] (Floating Point Numbers) - Maximum forward speed. Unit is meter per second (m/s).
* [output:Max_Reverse_Speed] (Floating Point Numbers) - Maximum backward speed. Unit is meter per second (m/s).

# Usage
Luna VIII introduced control motion devices.
An entity can have a control motion device component,
then this entity's movement can be controlled directly by players
instead of controlling Manekin/Manekina.
This feature can be used to create a vehicle that can be driven by players.

This node lets you query movement parameters of a control motion device entity.

# Example
**TO BE ADDED**

# Notes
* If the forward button is held, the overall acceleration can be calculated as `f - b - c*v^2`
  where `f` is [output:Forward_Acceleration],
  `b` is [output:Base_Resistance],
  `c` is [output:Resistance_Coefficient],
  and `v` is the current forward speed.
  If this acceleration is 0, then the speed is equal to `sqrt((f-b) / c)`
  given that `c` is positive.
  Thus, we cannot accelerate past this speed.
  This maximum speed is calculated and shown in the control motion device component
  under "Max Speed Preview (m/s)".
  In the example below, we got `13.09` for "Max Speed Preview (m/s)",
  because `sqrt((20.00 - 8.00) / 0.07)` is approximately `13.09`.
  [image:control_motion_device_max_speed_preview]
* In the control motion device component,
  "Resistance Deceleration" is incorrectly stated to be in "m/s",
  but it should be "m/s²".
* If the control motion device entity has a unit status with
  "Control Motion Device's Movement Parameters" effect,
  this node returns the modified parameters with the effect factored in.
  The unit status effect is additive on the base parameter
  (e.g. if "Max Forward Speed" is configured to 10 m/s in the component,
  and it is set to 5 m/s in the unit status effect,
  then the resulting max forward speed is 15 m/s
  and this node returns `15.0` for [output:Max_Forward_Speed]).

# Performance
This node took ~10 units to run on average.

# See Also
* [node:set_player_to_activate_control_motion_device]
* [node:query_players_currently_activated_control_motion_device_list]
* [node:add_unit_status]

# Authors
* kokokokomi222