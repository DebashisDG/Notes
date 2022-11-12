/* If...else */
/*
let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log('Good Morning!');
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon!');
} else {
    console.log('Good evening!');
}
*/


/* Switch Case */
/*
let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}
*/


/* For loop */
/*
for (let i = 0; i < 5; i++) {
    console.log('Hello', i);
}
*/


/* While loop */
/*
let i = 0;
while (i <= 5) {
    if (i % 2 != 0) console.log(i);
    i++;
}
*/


/* Do while loop */
/*
let i = 7;
do {
    if (i % 2 != 0) console.log(i);
    i++;
} while (i <= 5);
*/


/* For...in loop */
/*
const person = {
    name: 'Debashis',
    age: 22
};
for (let key in person) {
    console.log(person[key]);
}
const colors = ['red', 'green', 'blue'];
for (let i in colors) {
    console.log(colors[i]);
}
*/


/* For...of loop */
/*
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}
*/


/* Break and continue */
/*
let i = 0;
while (i <= 10) {
    // if(i ===5) break;
    if (i % 2 == 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
*/