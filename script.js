const greetingElement = document.getElementById('greeting');

function greetUser(name) {
  greetingElement.textContent = `Hello, ${name}! Welcome to our website.`;
}

// Global scope
let userName = 'Guest';

function updateUserName() {
  console.log(userName);
  }

  updateUserName();  // Global access

  // Local scope
  function name() {
    let name = 'Alice';
    console.log(name);
  }

  name(); // Local access


  // Defining parameters

  function pickColor(color) {
    console.log(`You picked the color: ${color}`);
  }

  pickColor('blue'); // Passing argument
  pickColor('red');  // Passing another argument


  // Returning values in functions
  function multiply(a, b) {
    return a * b;
  }

  let result = multiply(5, 3);
  console.log(result);

  function getUserInfo() {
    return {name: 'Bob', age: 25};
  }

  let userInfo = getUserInfo();
  console.log(userInfo);
