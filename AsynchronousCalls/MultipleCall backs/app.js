//Simulation of call back hell prototype
const button = document.querySelector('button');
const output = document.querySelector('p');

//Callback function which in turn has nested call backs
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => { //Callback -2
      setTimeout(() => { //callback -3
        console.log(posData);
      }, 2000);
    },
    error => { //callback- 3a(if error in getting location)
      console.log(error);
    }
  );
  setTimeout(() => { //callback -4
    console.log('Timer done!');
  }, 0);
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);  //Callback -1

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
