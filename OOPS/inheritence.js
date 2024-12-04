class person{
    constructor(name,age){
        this.name=name;
        this.age=age
        console.log("person data submitted");
    }
    talk(){
        console.log(`hello ${this.name}`);
    }
}

class student extends person{
    constructor(name,age,rollno){
        super(name,age);
        this.rollno=rollno;
    }
    intro(){
        console.log(`hello my name is ${this.name} and my roll no is ${this.rollno}`);
    }
}

class teacher extends person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
    intro(){
        console.log(`hello my name is ${this.name} and my subject is ${this.subject}`);
    }
}
let std= new student("Naruto",20,113);
let tea= new teacher("ichigo",20,"Math");
std.talk();
std.intro();
tea.intro();