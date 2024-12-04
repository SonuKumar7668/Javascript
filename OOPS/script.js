function createperson(name,age){
    const person ={
        name: name,
        age: age,
        talk(){
            console.log("Hello, I am " + this.name + " and I am " + this.age);
        },
        speak(){
            console.log("Hello " + this.name);
        }

    }
    return person;
}

console.log(createperson("sonu",20));
let p1 = createperson("Sonu",1);
p1.talk();
p1.speak();