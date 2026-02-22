# Summary
Outputs a string to the log.

# Input Parameters
* [input:String] (String) - String to be printed

# Usage
This is **not** visible to players and is only used for print debugging while testing.
Use a [hoyo:mhnltrr3g966:text box UI control] to show a string to players.

To see the output, click Window &gt; Log menu from the top of the Miliastra Sandbox window.
Print output will be visible in the log window when testing.
[image:print_string_open_log_window]

In order to print numbers, integers and floats can be converted into strings with [node:data_type_conversion].

# Example
Below example prints "Entity Created!" to the log when the entity is created.
[image:print_string_example]
This is how it appears in the log.
[image:print_string_result]

# Notes
* This node still prints the string even when the node graph is not selected in the log.
* Long strings are trimmed in the output,
  only showing the first part of the string that fits in the log window.
  You may be able to resize the log window to see more.
* If an empty string is passed, it will still print "print:".
* The maximum length of a string is 1000.

# Performance
For a string of length 10, it took ~3 units to run on average.

For a string of length 1000, it took ~5 units to run on average.

# Authors
* kokokokomi222