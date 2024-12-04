class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

let p1 = new Person("sonu",45);
p1.talk();