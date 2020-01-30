// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship.js')
let CrewMember = require('./CrewMember.js')


let crewNames = ['Emily', 'Cam', 'Murph', 'Matt']

let ourShip = new Spaceship('Quantum')

let trainCrew = (names) => {
  	return names.map(name => {
      let crewMember = new CrewMember(name);
      crewMember.trained = true;
      return crewMember;
    });
}
crewNames = trainCrew(crewNames)

let launchpad = (ship, crew) => {
  console.log(`Counting the moments til ${ship.name}\'s takeoff-countdown!`);
}

launchpad(ourShip, crewNames);
console.log(crewNames)
