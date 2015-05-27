//make a function that makes a new object

var makePerson = function(name, age, weight) {
    return {
        name: name,
        age: age,
        weight: weight,
    }
}

var me = makePerson("Tyler", 25, 180);

me['name'];

// only run function once (and make a new object)

var sayName = function() {
    if(sayName.alreadyCalled === true) {
        alert('You already called this');
        return;
    }
    sayName.alreadyCalled = true;
    return {
        name: 'Tyler',
        age: 25
    }
};


//Driving instructions (object)

var instructions = {};
var counter = 0;

var addInstruction = function(instruction) {
        instructions[counter] = instruction;
        ++counter;
};

addInstruction('Get on I 15');


// function called reverse, which takes in a string and returns that string after it's been reversed.

var reverse = function(str) {
    return str.split('').reverse().join('');
}

reverse('This is my string');


//Make and array called friends that contains:
    //Jake
    //Tyler
    //Ryan
    //Jason
//Then loop through, and remove 'Ryan'
var friends = ['Jake', 'Tyler', 'Ryan', 'Jason'];
for (var i = 0; i < friends.length; i++) {
    if (friends[i] === 'Ryan') {
        friends.splice(i, 1);
    }
}

//'this' practice

var person = function(name, age) {
    return {
        name: name,
        age: age,
        sayMyName: sayName
        }
};

//creates one function instead of one per instance
var sayName = function() {
    alert(this.name);
}

var me = person('Shawn', 27);
var tyler = person('Tyler', 25);
var dan = person('Dan', 45);

me.sayMyName();
tyler.sayMyName();
dan.sayMyName();


var welcome = function() {
    //alert(this.name);
};
welcome('Shawn');

var person = function(name, age) {
    return {
        name: name,
        age: age,
        myFn: function() {
            alert(this.name);
        },
        mother: {
            name: 'Cheryl',
            sayName: function() {
                alert(this.name);
            }
        }
    }
};
//me.mother.sayName(); will alert 'Cheryl'

//explicit binding
var colt = {
    name: 'Colt'
    //no sayName method
}
//use .call

//sayName.call(colt); **colt becomes the 'this' keyword

var sayName = function(welcomeMsg) {
    alert(welcomeMsg + this.name);
};

//sayName.call(colt, 'Welcome, ');
//sayName.apply(colt, [1, 2, 3,4]);
//var boundFn = sayName.bind(colt) **returns function with 'this' bound to colt

//default binding
var sayName = function() {
    console.log(this);
}
//sayName(); **will log window global object
