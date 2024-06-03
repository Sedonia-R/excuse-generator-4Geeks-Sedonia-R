Code An Excuse Generator In JavaScript

This project is ideal for avoiding someone annoying; it takes no more than 20 lines of code, and it can save you for the rest of your life!

The Goal
We wanted a project that used very little JavaScript but still had a very fun application. The excuse generator takes 20 lines of code, is super simple to understand, and is the perfect first project for any beginner developer.

Instructions:
Please create a small website that generates an excuse each time you refresh the page, it has to look like this: See the demo here --> https://storage.googleapis.com/breathecode-asset-images/7b70ef9692c83a40b38d127a26c00d552d9f2b2ab976ced090d50412d9148d31.gif?raw=true

The idea is to generate each part of the sentence randomly to come up with great excuses!

Parts: 
1) Who is to blame
2) What they did
3) What you want to avoid
4) When

Example used: "Dog eat my homework yesterday"

Hints:
- Update your index.html with one excuse hard-coded, no JS, just one excuse in pure plain HTML.
- The excuse must be inside an HTML tag that has an id assigned, for example:

<p id="excuse">My dog ate my homework</p>

- Using JavaScript, create a function that generates and returns a random excuse with the following structure:

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

- To create a consistent excuse, you have to concatenate one item from each array in the proper order.

- Call the function onload and set the excuse into the innerHTML of the #excuse HTML element.

Technologies
- HTML, CSS3, JavaScript, Webpack.

Fundamentals
- This exercise covers the following fundamentals:
1. Using external JavaScript files in your project.
2. How to work with arrays.
3. Generating random numbers.
4. Concatenating strings.
5. Using functions (at least a bit).
6. Working with events (at least a bit).