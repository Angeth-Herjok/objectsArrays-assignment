// Given an array of strings, use a function to reverse all the elements in the string in
//  ascending order and the specific elements in descending order

function reverseArray(arrays){
        arrays.reverse();
        arrays.sort();
        let elementDescendingIndex = [0, 2, 4]; 
        for (let index of elementDescendingIndex) {
          if (arrays[index]) {
            arrays[index] = arrays[index].split("").reverse().join("");
          }
        }
        return arrays;

}
console.log(reverseArray["hello","becky","school","akirachix","nairobi"]);
// Given an array of objects, each object representing a person with a name and age property,
// write a function that returns the sum of all people who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function eighteenAndLess(persons){
    let sum=0
  for(let i=0;i<persons.length;i++){
  if(persons[i].age<18){
    sum+=1
  }
  }
     return sum;
  }
  console.log(eighteenAndLess(people));
  

// Using JS functions and an array of numbers, return positive if an element within the 
// array is positive, negative if an element is negative, else zero

function arrayChecking(nums){
    let answer=0
    for(let i=0;i<nums.length;i++){
        
        if(nums[i]>0){
            answer=1
        }
        else if(nums[i]<0){
            answer=-1
        }
    }  
    return answer
}

console.log(arrayChecking([3,5,0,-7,-4]));


// Given an array of objects, where each object represents an employee with an id, name, 
// and salary property, write a function that returns a new array of employee objects 
// sorted by their salary in ascending order.
