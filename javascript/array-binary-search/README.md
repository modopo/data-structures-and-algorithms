# Reversing An Array #

## Whiteboard Process ##

![image](./whiteboard_03.png)

## Approach & Efficiency ##

***

Time complexity should be O(log n) since the algorithm iterates through half of the numbers to search every single time the value is not found.

Space complexity should be also O(n), because the solution creates several variables that do not grow, but nth amount of variables was created (in this case 4);


## Solution ##
![insert-shift.js](./binary-search.js)

## Testing ##
![insert-shift.test.js](./binary-search.test.js)