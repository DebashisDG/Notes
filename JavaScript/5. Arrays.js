/* Adding Elements */
/*
const nums = [3, 4];
nums.push(5, 6);
nums.unshift(1, 2);
nums.splice(2, 0, 'a', 'b');
console.log(nums);
*/


/* Finding elements (primitives) */
/*
const nums = [1, 2, 3, 1, 4];
console.log(nums.indexOf(3));
console.log(nums.lastIndexOf(1));
console.log(nums.includes(1));
*/


/* Finding elements (reference) */
/*
const courses = [
    { id: 1, name: 'Python' },
    { id: 2, name: 'JavaScript' }
];
let result = courses.find(
    function (course) {
        return course.name === 'Python';
    }
);
let result2 = courses.findIndex(
    function (course) {
        return course.name === 'Python';
    }
);
console.log(result);
*/


/* Arrow function */
/*
const courses = [
    { id: 1, name: 'Python' },
    { id: 2, name: 'JavaScript' }
];
let result = courses.find(
    (course) => course.name === 'Python';
);
*/


/* Removing elements */
/*
const nums = [1, 2, 3, 4];
const last = nums.pop();
const first = nums.shift();
nums.splice(2, 1);
console.log(nums);
*/


/* Emptying an array */
/*
const nums = [1, 2, 3, 4];
// nums.length = 0;
// nums.splice(0, nums.length); 
console.log(nums);
*/


/* Combining arrays */
/*
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const slice = combined.slice(2, 4);
console.log(slice);
*/


/* The spread Operator */
/*
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
const combined2 = [...first, 'a', ...second];
const copy = [...combined];
console.log(combined2);
*/


/* Iterating an array */
/*
const nums = [1, 2, 3];
nums.forEach((number,index) => console.log(number, index));
for (let num of nums) {
    console.log(num);
}
*/


/* Joing Arrays */
/*
const nums = [1, 2, 3];
const joined = nums.join('-');
console.log(joined);
const msg = 'This is my first message';
const split = msg.split(' ');
console.log(split);
*/


/* Sorting Arrays */
/*
const nums = [4, 3, 2, 1];
nums.sort();
console.log(nums);
nums.reverse();
const courses = [
    { id: 1, name: 'Node js' },
    { id: 2, name: 'JavaScript' }
];
courses.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
})
console.log(courses);
*/


/* Testing the elements of an array */
/*
const nums = [1, 2, 3];
const allPositive = nums.every(value => value >= 0);
const least = nums.some(value => value >= 0);
console.log(least);
*/


/* Filtering an array */
/*
const nums = [1, -1, 2, 3, -5, 4];
const positive = nums.filter(value => value >= 0);
console.log(positive);
*/


/* Mapping an array */
/*
const nums = [1, -1, 2, 3, -5, 4];
const filtered = nums.filter(value => value >= 0);
//const items = filtered.map(value => `<li> ${value} </li>`);
const items = filtered.map(value => ({ number: value }));
console.log(items);
*/


/* Reducing an array */
/*
const nums = [1, -1, 2, 3, 4];
let sum = 0;
for (let n of nums) {
    sum += n;
}
let accumalator = 0;
let sum2 = nums.reduce((accumalator, currentVal) => accumalator + currentVal);
console.log(sum2);
*/

