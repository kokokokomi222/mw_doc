# Summary
Gets the server's timezone.

# Output Values
* [output:Time_Zone] (Integer) - It appears to be [https://en.wikipedia.org/wiki/Coordinated_Universal_Time:UTC] (Coordinated Universal Time) offset, but the official documentation does not clarify what this value really is.

# Usage
This node can be used to determine what timezone the server is in.
On 2026-02-02, the value was:

* America: `-5` (Eastern Standard Time)
* Europe: `1` (Central European Time)
* Asia: `8` (China Standard Time)
* TW,HK,MO: `8` (China Standard Time)

But we do not yet know how this value handles daylight saving time.

# Example
This example prints the server time zone output.
[image:query_server_time_zone_example]

# Performance
This node took ~1 unit to run on average.

# Authors
* kokokokomi222