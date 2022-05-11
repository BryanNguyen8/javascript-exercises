const findTheOldest = function(people) {
    /* let's write some pseudocode
        i get an array of objects (people) with keys (name, birthdate, deathdate)
        i want to find who the oldest person is in the array by calculating their age

        first i need to create two empty variables to store the oldestAge (number) and oldestPerson (string)
        the function needs to loop through each object
            it needs to pull that object's birthDate and deathDate
                one thing i need to check for is if they have a deathdate. if they don't, i need to use the currentdate to calculate their age
            it needs to calculate the age of the person
            if the age is older than the oldestAge, store the age in oldestAge and store the oldestPerson
        
        the function will return the string value for the name stored in oldestPerson
    */
   let oldestAge = 0;
   let oldestPerson = {};
   for (let person of people) {
       let personsAge = 0;
       if (person.yearOfDeath == undefined) {
           personsAge = (new Date().getFullYear()) - person.yearOfBirth;
       } else {
           personsAge = person.yearOfDeath - person.yearOfBirth;
       }
       if (personsAge > oldestAge) {
           oldestAge = personsAge;
           oldestPerson = person;
       }
   }
   return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
