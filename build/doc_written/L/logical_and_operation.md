# Summary
Performs boolean AND.

# Input Parameters
* [input:Input_1] (Boolean) - First operand.
* [input:Input_2] (Boolean) - Second operand.

# Output Values
* [output:Result] (Boolean) - Result of boolean AND of the two input values.

# Usage
The output of the node is `Yes`, if and only if both of the inputs are `Yes`.
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
        <th>Input 1</th>
        <th>Input 2</th>
        <th>Result</th>
    </tr>
    <tr>
        <td class="y">Yes</td>
        <td class="y">Yes</td>
        <td class="y">Yes</td>
    </tr>
    <tr>
        <td class="y">Yes</td>
        <td class="n">No</td>
        <td class="n">No</td>
    </tr>
    <tr>
        <td class="n">No</td>
        <td class="y">Yes</td>
        <td class="n">No</td>
    </tr>
    <tr>
        <td class="n">No</td>
        <td class="n">No</td>
        <td class="n">No</td>
    </tr>
</tbody></table>

# Example
**TO BE ADDED**

# Notes
* If you leave any of the inputs empty, the input is considered to be `No`.
* This node does not perform short-circuit evaluation.
  It will evaluate both [input:Input_1] and [input:Input_2]
  even if [input:Input_1] is `No`.

# Performance
This node took ~2 units to run on average.

# See Also
* [node:logical_or_operation]
* [node:logical_xor_operation]
* [node:logical_not_operation]

# Authors
* kokokokomi222, veri
