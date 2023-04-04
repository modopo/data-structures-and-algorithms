# Reversing An Array #

## Whiteboard Process ##

***

### Problem Domain ###

Write a funciton that takes an array and a number value. Return the array with the number value added at the middle index if the array length is even, or one after the middle index if the array length is odd.

Input: an array of numbers and a number

Output: return the array withg the number in the middle if the array length is even, or one after the middle if the array length is odd.

### Visualization ###

Even length array:\
arr: [2, 4, 6, -8] number: 5
middle index: 3/2 rounded down = 1

front = [2, 4, 5]\
back = [6, -8]\
result = [...front, ...back]

Odd length array:\
arr: [2, 3, 6], number: 4\
middle index: 2/2 = 1

front = [2, 3, 4]\
back = [6]\
result = [...front, ...back]

### Algorithm ###

- Find the middle index - 1 with Math.floor to accomodate even length array
- Create empty front and back array 
- Front
  - Loop up to middle index and assign the value at the index of the array into front
- Assign number to front at index middle + 1
- Back
  - Loop from middle index to arr.length and assign the value at the index of the array into back
- Spread operater front and back into an array
- Return array

### Psuedo Code ###

function reverseArray (some arr with elements)

front = [], back = []

middleIdx = arr.length / 2, but rounded down with Math.floor

for(let i = 0, i <= middleIdx, i++)\
front[i] = arr[i]

front[middleIdx + 1] = number

for(let i = middleIdx + 1, middleIdx < arr.length; i++)
back[i] = arr[i]

return [...front, ...back]


## Approach & Efficiency ##

***

Time complexity should be O(n) since the algorithm interates through the array halfway twice, the front half and latter half.

Space complexity should be also O(n), because the solution created 2 new arrays which is not constant anymore (2n).


## Solution ##
![insert-shift.js](./insert-shift.js)

## Testing ##
![insert-shift.test.js](./insert-shift.test.js)