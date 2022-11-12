/* Basics */
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};
circle.draw();
*/


/* Factory functions */
/*
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
circle1.draw();
console.log(circle1);
*/


/* Consructor function */
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circle = new Circle(1);
circle.draw();
*/


/* Dynamic nature of Objects */
/*
const circle = {
    radius: 1
};
circle.color = 'yellow';
circle.draw = function () { }
delete circle.color;
console.log(circle);
*/


/* Constructor Property */
/*
let x = {};
// let x = new Object();
*/


/* Functions are objects */
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// `);
// const another1 = new Circle1(1);

const another = new Circle(1);
console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);
another.draw();
*/


/* Value vs Reference type */
/*
// Primitives are copied by value
// Objects are copied by reference
let x = 10;
let y = x;
x = 20;
console.log('x:', x, 'y:', y);
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(a, b);

let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log(number);

let obj = { value: 10 };
function increase2(obj) {
    obj.value++;
}
increase2(obj);
console.log(obj);
*/


/* Enumerating Properties */
/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
for (let key in circle) {
    console.log(key, circle[key]);
}
for (let key of Object.keys(circle)) {
    console.log(key);
}
for (let entry of Object.entries(circle)) {
    console.log(entry);
}
if ('radius' in circle) console.log('yes');
*/


/* Cloning an object */
/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
// const another = {};
// for (let key in circle) {
//     another[key] = circle[key];
// }
// const another = Object.assign({}, circle)
const another = { ...circle };
console.log(another);
*/


/* Math */
/*
Math.random()
Math.round(1.9)
Math.max(1,2,3,4,5)
Math.min(4,5,2,1,6)
*/


/* String */
/*
const msg = 'Hello \'Good morning';
const another = new String('hi');
console.log(msg.length);
console.log(msg[1]);
console.log(msg.includes('my'));
console.log(msg.startsWith('Hello'));
console.log(msg.endsWith('k'));
console.log(msg.indexOf('Good'));
console.log(msg.replace('Good', 'Bad'));
console.log(msg.trim());
console.log(msg.trimStart);
console.log(msg.split(' '));
*/


/* Template literals */
/*
const msg = `Good Morning,
welcome abroad ${2 + 3}`;
*/


/* Date */
/*
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9, 0);
now.setFullYear(2017);
console.log(now);
*/