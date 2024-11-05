/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
    let ans;
    if (numbers.length%2 !== 0) return true;
    else return false;
    
}
 isArrayLengthOdd([1, 2, 3]);
 isArrayLengthOdd([1, 2, 3, 4]);

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
    let ans;
    if (numbers.length%2 === 0) return true;
    else return false;
}
 isArrayLengthEven([1, 2, 3]); 
 isArrayLengthEven([1, 2, 3, 4]);

 /**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  instructors.push("Laila");
  console.log(`${instructors}`);
  return instructors;
}
addLailaToArray(["Mshary", "Hasan"]);
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
lastTeam=teams.pop();
console.log(`${lastTeam}`);
return lastTeam;
}
 eliminateTeam(["Brazil", "Germany", "Italy"]);

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
    let ans =[];
    if (fruits.length%2 === 0){
        let midPoint= fruits.length/2;
        halfFruits=fruits.slice(midPoint);
        console.log(`${halfFruits}`);
        return halfFruits;
    } 
    else {
        console.log(ans)
    }
}
 secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
 secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]);

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  // Your code here
 let exclamation = shout.indexOf("!");
 let res = shout;
//  console.log(`${exclamation}`);
exclamation===-1? res=shout:res = shout.slice(0,exclamation+1);
 console.log(`${res}`);
 return res;
}
 youGottaCalmDown("HI!!!!!!!!!!");
 youGottaCalmDown("Taylor Schwift!!!!!!!!!!!");
 youGottaCalmDown("Hellooooo");