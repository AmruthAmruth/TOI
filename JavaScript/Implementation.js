/**********************************************************************
 * JAVASCRIPT IMPORTANT CONCEPTS (REVISION NOTES)
 *********************************************************************/


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
 * 2️⃣ CLOSURE (PRIVATE VARIABLES)
 * Inner function remembers outer function variables
 *********************************************************************/

function userFactory(name) {
    let score = 0; // private variable

    return {
        getName() {
            return name;
        },
        getScore() {
            return score;
        },
        addScore(point) {
            score += point;
        }
    };
}

const amruth = userFactory("Amruth");

console.log(amruth.getName());
console.log(amruth.getScore());
amruth.addScore(10);
console.log(amruth.getScore());


/**********************************************************************
 * 3️⃣ MEMOIZATION (CACHING RESULTS)
 *********************************************************************/

function memoization() {
    let cache = {};

    return function (n) {
        if (cache.hasOwnProperty(n)) {
            console.log("Fetching from cache");
            return cache[n];
        }

        console.log("Calculating result");
        let result = n * n;
        cache[n] = result;
        return result;
    };
}

const memoSquare = memoization();

console.log(memoSquare(3));
console.log(memoSquare(3));


/**********************************************************************
 * 4️⃣ call / apply / bind (THIS CONTROL)
 *********************************************************************/

const person1 = {
    name: "Amruth",
    greet: function (greeting, age) {
        console.log(`${greeting}, my name is ${this.name} and I am ${age}`);
    }
};

const person2 = { name: "Siva" };

// call → comma-separated arguments
person1.greet.call(person2, "Hello", 22);

// apply → array arguments
person1.greet.apply(person2, ["Hi", 25]);

// bind → returns new function
const boundFunc = person1.greet.bind(person2, "Hey", 30);
boundFunc();


/**********************************************************************
 * 5️⃣ PROMISE & Promise.all
 * If one fails → whole Promise.all fails
 *********************************************************************/

function promiseSample1() {
    return Promise.resolve("Hello From 1");
}

function promiseSample2() {
    return Promise.resolve("Hello From 2");
}

function promiseSample3() {
    return Promise.reject("Rejected From 3");
}

Promise.all([promiseSample1(), promiseSample2(), promiseSample3()])
    .then((data) => {
        console.log("All resolved:", data);
    })
    .catch((err) => {
        console.log("Promise rejected:", err);
    });


/**********************************************************************
 * 6️⃣ GENERATOR FUNCTION
 * Uses `yield` to pause and resume
 *********************************************************************/

function* generatorFunc(i) {
    yield i;
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        const gen = generatorFunc(i);
        console.log("Generator value:", gen.next().value);
    }, i * 1000);
}


/**********************************************************************
 * 7️⃣ setTimeout + let (BLOCK SCOPE)
 *********************************************************************/

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("setTimeout value:", i);
    }, i * 500);
}


/**********************************************************************
 * 8️⃣ PROXY (GET & SET TRAPS)
 *********************************************************************/

const userObj = {
    name: "Amruth",
    age: 21
};

const userProxy = new Proxy(userObj, {
    get(target, prop) {
        if (!(prop in target)) {
            return "Property does not exist";
        }
        console.log(`Accessing ${prop}`);
        return target[prop];
    },

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

// Testing Proxy
console.log(userProxy.name);
userProxy.age = 22;
console.log(userProxy.age);


/**********************************************************************
 * 9️⃣ FUNCTION COMPOSITION
 *********************************************************************/

function addBy2(n) {
    return n + 2;
}

function square(n) {
    return n * n;
}

function calculate(n) {
    return addBy2(square(n));
}

console.log(calculate(5));


/**********************************************************************
 * 🔟 CURRYING
 *********************************************************************/

function one(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(one(1)(2)(3));

/**********************************************************************
 * 🔹 PROMISE CHAINING
 * Executing multiple asynchronous operations step by step
 *********************************************************************/

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve(1);
        }, 1000);
    });
}

function step2(prev) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 completed, received:", prev);
            resolve(prev + 1);
        }, 1000);
    });
}

function step3(prev) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 completed, received:", prev);
            resolve(prev + 1);
        }, 1000);
    });
}

// Promise chaining
step1()
    .then((result1) => {
        return step2(result1);
    })
    .then((result2) => {
        return step3(result2);
    })
    .then((finalResult) => {
        console.log("Final Result:", finalResult);
    })
    .catch((err) => {
        console.log("Error:", err);
    });




    /**********************************************************************
 * GENERATOR: FIRST N PRIME NUMBERS
 *********************************************************************/

// Function to check prime
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}


// Generator function
function* primeGenerator() {
    let num = 2;

    while (true) {
        if (isPrime(num)) {
            yield num; // pause and return prime
        }
        num++;
    }
}


// Function to get first N primes
function getFirstNPrimes(n) {
    const gen = primeGenerator();
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(gen.next().value);
    }

    return result;
}


// Test
console.log(getFirstNPrimes(10));