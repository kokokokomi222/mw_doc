# Summary
Performs boolean NOT.

# Input Parameters
* [input:Input] (Boolean) - Operand for NOT.

# Output Values
* [output:Result] (Boolean) - Result of boolean NOT of the input.

# Usage
The output of the node is `Yes`, if and only if the input is `No`.
<style>
    .y {
        font-weight: bold;
        color: green;
    }
    .n {
        font-weight: bold;
        color: red;
    }
</style>
<table><tbody>
    <tr>
        <th>Input</th>
        <th>Result</th>
    </tr>
    <tr>
        <td class="y">Yes</td>
        <td class="n">No</td>
    </tr>
    <tr>
        <td class="n">No</td>
        <td class="y">Yes</td>
    </tr>
</tbody></table>

# Example
In this example, we toggle the boolean node graph variable named `game_paused`.
If it was `Yes`, it becomes `No`.
If it was `No`, it becomes `Yes`.
[image:logical_not_operation_example]

# Notes
* If you leave the input empty, the input is considered to be `No` and this node returns `Yes`.

# Performance
This node took ~1 unit to run on average.

# See Also
* [node:logical_and_operation]
* [node:logical_or_operation]
* [node:logical_xor_operation]

# Authors
* kokokokomi222
