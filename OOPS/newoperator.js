function Person(name,age){
        this.name = name,
        this.age = age
}
Person.prototype.talk=function(){
    console.log(`hello ${this.name} you are ${this.age} right ??`);
};
const p1 =new Person('John', 25);
const p2 =new Person('sonu',20);
console.log(p1.talk()===p2.talk());
p1.talk();