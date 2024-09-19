let jsondata='{"fact":"The claws on the cat\u2019s back paws aren\u2019t as sharp as the claws on the front paws because the claws in the back don\u2019t retract and, consequently, become worn.","length":155}'
console.log(jsondata);
let validres=JSON.parse (jsondata);
console.log(validres);
console.log(validres.length);
console.log(validres.fact);

let student={
    name:"sonu kumar",
    age:20,
    roll:5
}
let std=JSON.stringify(student);
console.log(std);