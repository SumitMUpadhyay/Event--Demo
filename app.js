//select event
//addEventListner()
//what event, what to do

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// function changeColors() {
//   let hasClass = heading.classList.contains('red');
//   if (hasClass) {
//     heading.classList.remove('red');
//   } else {
//     heading.classList.add('red');
//   }
// console.log('hello');
// }

// btn.addEventListener('click', function () {
//   console.log('hey you clicked me');
//   heading.classList.add('red');
// });

// btn.addEventListener('click', changeColors);

// click - fires after full action occurs
// mousedown - button is pressed
// mousedown - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//   console.log('you clicked me');
// });

// btn.addEventListener('mousedown', function () {
//   console.log('down');
// });

// btn.addEventListener('mouseup', function () {
//   console.log('up');
// });

// heading.addEventListener('mouseenter', function () {
//   heading.classList.add('blue');
// });

// heading.addEventListener('mouseleave', function () {
//   heading.classList.remove('blue');
// });

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function () {
//   console.log('you pressed a key');
// });

// nameInput.addEventListener('keydown', function () {
//   console.log('you pressed a key');
// });

// nameInput.addEventListener('keyup', function () {
// console.log('you pressed a key');
// console.dir(nameInput.value);
//   console.log(nameInput.value);
// });

// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault()- prevents default behaviour

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const link = document.getElementById('link');

// heading.addEventListener('click', function (event) {
// heading.addEventListener('click', (event) => {
// heading.classList.add('blue');
//   console.log(event.currentTarget);
//   console.log(this);
// });

// btn.addEventListener('click', function (event) {
// console.log(event.currentTarget);
//   event.currentTarget.classList.add('blue');
//   console.log(event.type);
// });

// function someFunc(e) {
//   e.preventDefault();
// }

// link.addEventListener('click', someFunc);

// currentTarget - always refers to the element to which the event handler has been attached to
//target - identifies the element on which the event occured

// const btns = document.querySelectorAll('.btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     // console.log(e.currentTarget);
//     // e.currentTarget.style.color = 'green';
//     console.log('target', e.target);
//     e.target.style.color = 'green';
//   });
// });

// allows select dynamic elements
// event propogation -order events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e) {
//   console.log('current target', e.currentTarget);
// console.log('target', e.target);
// if (e.target.classList.contains('link')) {
//   console.log('you clicked on the link');
// }
// }

// function stopPropgation(e) {
//   console.log('you clicked on list');
//   e.stopPropagation();
// }

// list.addEventListener('click', showBubbling, { capture: true });
// container.addEventListener('click', showBubbling, { capture: true });
// document.addEventListener('click', showBubbling, { capture: true });
// window.addEventListener('click', showBubbling, { capture: true });

// allows select dynamic elements
// event propogation -order the events are fired
// event bubbling - clicked element first then bubbles up --default

// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
// console.log(heading);

// function sayHello() {
//   console.log('hello there');
// }

// btn.addEventListener('click', function () {
//   const element = document.createElement('h1');
//   element.classList.add('heading');
//   element.textContent = `i'm inside the container`;
//   container.appendChild(element);
// });

// container.addEventListener('click', function (e) {
//   if (event.target.classList.contains('heading')) {
//     console.log('hello there');
//   }
// });
// heading.addEventListener('click', sayHello);

// submit event Listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('form submitted');
  console.log(name.value);
  console.log(password.value);
});

// Web storage API- provided by browser
// session storage , local storage
// setItem, getItem , removeItem, clear
// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

// localStorage.setItem('name', 'john');
// localStorage.setItem('friend', 'peter');
// localStorage.setItem('job', 'developer');
// localStorage.setItem('address', 'street 123');

// const name = localStorage.getItem('name');
// console.log(name);
// localStorage.removeItem('name');

// const anotherName = localStorage.getItem('name');
// console.log(anotherNmae);

// JSON.stringify(),JSON.parse()

const friends = ['john', 'peter', 'bob'];

localStorage.setItem('friends', JSON.stringify(friends));

const values = localStorage.getItem('friends');

console.log(values[0]);

let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}
console.log(fruits);
// fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', json.stringify(fruits));
