let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed on', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function excuse(array) {
  let randomArrayIndex = array[Math.floor(Math.random() * 4)];
  return(randomArrayIndex);
}

document.write(excuse(who) + " " + excuse(action) + " " + excuse(what) + " " + excuse(when));

// const excuseElement = document.createElement('p');
// excuseElement.textContent = generateExcuse(who, action, what, when);
// document.body.appendChild(excuseElement);

// We "grab" the element by its id, there are many ways to "grab" html elements with js
// const excuseElement = document.getElementById("excuse");
// excuseElement.textContent = generateExcuse(who, action, what, when);
// excuseElement.appendChild(hello)


// function excuse(param1, param2, param3, param4) {
//   let who = param1[Math.floor(Math.random() * 4)];
//   let action = param2[Math.floor(Math.random() * 4)];
//   let what = param3[Math.floor(Math.random() * 3)];
//   let when = param4[Math.floor(Math.random() * 5)];
//   return who + " " + action + " " +  what + " " + when;
// }

// document.write(excuse(who, action, what, when));

