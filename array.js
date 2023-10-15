let marks = [44,88,99,66,"Absent"]
console.log(marks)
console.log(marks.length)
for(let i = 0;i<marks.length;i++){
    console.log(`marks of 1st student = ${marks[i]} `)
}
console.log(typeof(marks))
marks[1]=54;
marks[3]=65;
for(let i = 0;i<marks.length;i++){
    console.log(`marks of 1st student = ${marks[i]} `)
}