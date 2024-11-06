document.write("<h2>Methods</h2>")

document.write("<h4>unshift Method</h4>")
let scores =[42,564,73,33,"Reddy"];

scores.unshift("Srinadh",12)
document.write(scores +"<br><br>")
document.write(scores.length)

document.write("<h4> concat Method</h4>")

let sco=[11,22,33,44,55];

let players=["srinadh","maruthi","hanuma"]
let newplayers=sco.concat(players)

document.write(newplayers +"<br><br>")
document.write(newplayers.length)

document.write("<h4> join Method</h4>")

var team=[10,30,50,60, "srinadh","hanuma","maruthi"]

var myteam=team.join("-")
document.write(myteam)

document.write("<h4>Slice & Splice Method</h4>")
document.write("<h5>Slice Method</h5>")

let students=["hanuma","balu","maruthi", 10,20,30,40,50,60]

let mystudents=students.slice(0,3)

document.write(mystudents)
console.log(students)

// --------Switch case--------------

document.write("<h3>switch-case</h3>")

switch(true){
     case 10>20:
        myanswer ="red color"
        break;
        case 10>20:
        myanswer ="green color"
        break;
        case 50<20:
        myanswer ="black color"
        break;
        case 100==200:
        myanswer ="orange color"
        break;
        default:
        myanswer ="None of the above "
        break;
}
document.write(myanswer)

let name=prompt("please enter yuor name")

let marks=prompt("enter your marks")
switch(true){
    case marks >90 && marks<=100:
        result="great you are the topper"
        break;
        case marks >65 && marks<=90:
            result="cngratulations you got first class"
            break;
            case marks >30:
                result="sorry you are Falied, Better next time"
                break;
                default:
                    result="please enter your marks"
                    break
}
document.write(" <br><br>Hello " + name+"<h4>" + result + "</h4>")

document.write("<h3>functions</h3>")
function srinadh(){
    document.write("Hello World!")
}
srinadh()
function reddy(){
    console.log("Test the code")
}
reddy()
function sri(){
    document.write("<br><br>Apple is red in color")
}
sri()
sri()
sri()
sri()
sri()

document.write("<h3>Scopes</h3>")
document.write("Global, Function,Block Scopes<br><br>")

var Apple="red";    
let orange="yellow";
const banana="green"

function fruit(){
    document.write(Apple)
    document.write(orange)
    document.write(banana)
}
fruit()

function red(){
    var x=100;
    let y=200;
    const z="Mahesh"
    
    document.write("<br><br>"+x)
    document.write(y)
    document.write(z)
}
red()

function sports(){
    if(10<20){
        document.write("<br><br>I like cricket")
    }
}
sports()

document.write("<h3>Return functions</h3>")

var a=function apple(){
    document.write("red in color")
}
a()

var b=function(){
    document.write("<br><br>This is Anonymous function")
}
b()
function score(a,b){
    return a + b +"<br><br>"
}
document.write( score(10, 20))
document.write(score(345, 6474))
document.write(score(1032, 2064))

function game(x,y){
    return document.write("I like " + x + " and " + y)
}
game("cricket","football")


document.write("<h3>Ternary operator</h3>")

document.write(
  2 + 3 ==5? "yes correct answer" :"no wrong answer"
)

var x =100;
var y =50;

x > y? document.write("<br><br>color is green"): document.write("red color")
