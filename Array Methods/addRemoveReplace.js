// Pop

let arr = [10, 20, 30, 40, 50];

console.log(arr);

arr.pop();  // remove the last element from the array

// let poppedVal = arr.pop(); // it will return the removed element
// console.log(poppedVal);

console.log(arr);

//------------------------------------------------------------------------------------------------------------------------------------------------------

// Push

arr.push(60,70); // add the elements at the end of the array

console.log(arr);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Shift

arr.shift(); // remove the first element from the array

// let firstVal = arr.shift(); // it will return the removed element
// console.log(firstVal);

console.log(arr);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Unshift

arr.unshift(0, 10); // add the elements at the beginning of the array

console.log(arr);


//-------------------------------------------------------------------------------------------------------------------------------------------------


// Splice - it is used to add or remove or replace the elements in the array

// splice (start index, number of elements to be removed, elements to be added)

let newArr = [1,2,3,4,5,6,7];

// newArr.splice();                                  // it will not change anything
// newArr.splice(1);                                 // it will remove all the elements from index 1
// newArr.splice(1,2);                               // it will remove 2 elements from index 1
// newArr.splice(1,2, "nowfel", true, [10,20]);      // it will remove 2 elements from index 1 and add the elements at index 1
// newArr.splice(1,2, ("nowfel", true, [10,20]));    // it will remove 2 elements from index 1 and add the array as a single element at index 1
// newArr.splice(0, 0, -20, -10, 0);                 // it will add the elements at index 0 without removing any elements

newArr.splice(-1,0, 8,9);                            // it will add the elements at the last index without removing any elements

console.log(newArr);




