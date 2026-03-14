
/**********************************************************************
 * 1️⃣ FACTORY FUNCTION
 * A function that returns an object without using `new`
 *********************************************************************/

function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hi, I'm ${this.name}`);
        }
    };
}

const user1 = createUser("Amruth", 21);
const user2 = createUser("Arun", 25);

user1.greet();
user2.greet();


/**********************************************************************
 * 2️⃣ CLOSURE (Private Variables)
 * Inner function remembers outer function variables
 *********************************************************************/

function user(name) {
    let score = 0; // private variable

    return {
        getName() { return name; },
        getScore() { return score; },
        addScore(point) { score += point; }
    };
}

const amruth = user("Amruth");

console.log(amruth.getName());
console.log(amruth.getScore());
amruth.addScore(10);
console.log(amruth.getScore());


/**********************************************************************
 * 3️⃣ MEMOIZATION (Caching Previous Results)
 *********************************************************************/

function memoization() {
    let cached = {};

    return function(n) {
        if (cached.hasOwnProperty(n)) {
            console.log("Fetching from cached version");
            return cached[n];
        }

        console.log("Result calculated");
        let result = n * n;
        cached[n] = result;
        return result;
    };
}

const memoSquare = memoization();
all 
console.log(memoSquare(3));
console.log(memoSquare(3));


/**********************************************************************
 * 4️⃣ call / apply / bind (Controlling `this`)
 *********************************************************************/

const person1 = {
    name: "Amruth",
    greet: function(greeting, age) {
        console.log(`${greeting}, my name is ${this.name} and I am ${age} years old`);
    }
};

const person2 = { name: "Siva" };

// call → arguments separated by comma
person1.greet.call(person2, "Hello", 22);

// apply → arguments passed as array
person1.greet.apply(person2, ["Hi", 25]);

// bind → returns new function (does not execute immediately)
const boundFunction = person1.greet.bind(person2, "Hey", 30);
boundFunction();


/**********************************************************************
 * 5️⃣ PROMISE & Promise.all
 * If any promise rejects → Promise.all rejects immediately
 *********************************************************************/

function promiseSample1() {
    return new Promise((resolve) => {
        resolve("Hello From 1");
    });
}

function promiseSample2() {
    return new Promise((resolve) => {
        resolve("Hello From 2");
    });
}

function promiseSample3() {
    return new Promise((resolve, reject) => {
        reject("Hello From 3 (Rejected)");
    });
}

Promise.all([
    promiseSample1(),
    promiseSample2(),
    promiseSample3()
])
.then((data) => {
    console.log("All resolved:", data);
})
.catch((err) => {
    console.log("Promise rejected:", err);
});


/**********************************************************************
 * 6️⃣ GENERATOR FUNCTION
 * Can pause and resume execution using `yield`
 *********************************************************************/

function* generatorFunc(i) {
    yield i;
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        const generator = generatorFunc(i);
        console.log("Generator value:", generator.next().value);
    }, i * 1000);
}


/**********************************************************************
 * 7️⃣ setTimeout with let (Block Scope Example)
 * `let` prevents closure issue in loops
 *********************************************************************/

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("setTimeout value:", i);
    }, i * 500);
}





const user = {
    name: "Amruth",
    age: 21
};

const userProxy = new Proxy(user, {

    // GET trap
    get(target, prop) {
        if (!(prop in target)) {
            return "Property does not exist";
        }

        console.log(`Accessing ${prop}`);
        return target[prop];
    },

    // SET trap
    set(target, prop, value) {
        if (prop === "age" && value < 18) {
            console.log("Age must be 18 or above");
            return false;
        }

        console.log(`Updating ${prop} to ${value}`);
        target[prop] = value;
        return true;
    }

});












function addBy2(n){
    return n + 2;
}

function square(n){
    return n * n;
}

function calculate(n){
   return addBy2(square(n))
}

console.log(calculate(5));






function one(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(one(1)(2)(3));


