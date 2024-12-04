class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    } // Added the missing closing brace here
}

let p1 = new person('John', 30);
let p2 = new person('Jane', 25);
p1.talk();
p2.talk();