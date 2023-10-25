//write a program to give random number from 1 to 100;then ask user to give input, if he guesses the the right answer its win, else try again
let a= Math.random()*100;
a = Number.parseInt(a)
let inp;
let score =100;
while(inp!=a){
    score--;
    inp = prompt("inter your guess")
    if(inp == a){
        console.log("congradulations,you have intered the right guess")
        console.log(`score = ${score}`)
    }
    else if(inp < a && inp > 0){
        console.log("try greater number")
    }
    else if(inp > a && inp < 100){
        console.log("try smaller number")
    }
    else{
        console.log("inter number between 0 and 100")
    }
}