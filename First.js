const profile={
    name: "shradhakhapra",
    isfollow: false,
    posts: 195,
    followers:569000,
    following:4,
    bio:"Apna College , Ex- Microsoft, DRDO",
};


profile["posts"]= 200;
profile["name"]="Anshul";

console.log(profile.isfollow);

const Anshul ={
    name:"anshul",
    course:"b-tech(cse)",
    age:18,
};
console.log(Anshul);
console.log(Anshul["name"]);

Anshul.age=19;
console.log(Anshul.age);

let a= 5;
let b = 9;


console.log( "a+b =",a+b);
console.log("a-b=" , a-b);
console.log("a*b=" , a*b);
console.log("a/b=" , a/b);
console.log("a%b=" , a%b);
console.log("a**b=" , a**b);
console.log("a++=", ++a);



console.log(a += 10); 

console.log(a *= 10);

console.log("a*10=" , a *= 10);
 
console.log("a % 10=" , a %= 10);


console.log("a-10=" , a -= 10);


//--------------------------------------------------//

let c= 10;
let d = 11;

console.log(c+d);
console.log(c)

c +=10;
console.log(c);


//--------------------------------------------------//


console.log( "5" !== 5);
console.log( 5 <= 5);
console.log(7 !== 8)



// -------------------------------------------------//

console.log(4==4 && 4<2);
console.log( 5>=4 || 4==6);
console.log( !(4<=6));


//--------------------------------------------------//


console.log( 2>1 && 7<6);
console.log(  2>1 || 7<6);
console.log(  !(2>1));


//--------------------------------------------------//

let age= 11;

if (age>18) {
    console.log("Vote");
} else {
    console.log("Can't vote");
}


//--------------------------------------------------//


let mode = "dark";

if ( mode === "dark"){
    console.log("dark");
} else {
    console.log("light");
}


//--------------------------------------------------//

let marks= 81;


if ( marks > 90){
    console.log("Excellent");
} else if ( marks >85){
    console.log("V.Good");
}else if (marks > 80){
    console.log("good");
} else if ( marks > 70){
    console.log("need improvement");
} else if(marks >= 33){
    console.log("just pass");
} else {
    console.log ("better luck next time");
}

//--------------------------------------------------//


marks > 80 ? console.log("Excellent") : console.log("need improvement"); // Compact version of if else statement //


//--------------------------------------------------//


let Number = prompt ("Enter a number");

if ( Number%5 === 0){
    console.log("Is the number you entered a multiple of 5 : yes");
} else{
    console.log("Is the number you entered a multiple of 5 :no");
}

//--------------------------------------------------//


let grades = prompt ( "Enter your marks");


if ( grades === 100){
    console.log(" YOUR GRADE IS - A");
} else if ( grades >= 90){
    console.log("YOUR GRADE IS - A");
}else if (grades ===89){
    console.log("YOUR GRADE IS - B");
}else if ( grades >= 70){
    console.log("YOUR GRADE IS - B");
} else if ( grades === 69){
    console.log("YOUR GRADE IS - C");
}else if ( grades >=60){
    console.log("YOUR GRADE IS - C");
}else if (grades=== 59){
    console.log("YOUR GRADE IS - D");
}else if (grades >= 50){
    console.log("YOUR GRADE IS - D");
}else {
    console.log("YOUR GRADE IS - F");
}



//--------------------------------------------------//


for ( let i = 1 ; i <= 5 ; i++){
    console.log("i =", i);
}
//--------------------------------------------------//

let sum = 0;

for ( let j = 1 ; j <=100; j++){
    sum = sum + j;
}

console.log("sum = ", sum);

//--------------------------------------------------//

name="Anshul"
for ( let i = 1 ; i <=100; i++){
    console.log(name);
}


//--------------------------------------------------//

let i=1;
while ( i <=10 ){
    console.log( "i = ", i);
    i++
}

//--------------------------------------------------//

let add = 0;

let j = 1;

while (j <=100){
    add = add +j;
    j++;
}

console.log("add =", add)

//--------------------------------------------------//


let x= 1;

do {
    console.log("Anshul");
    x++
}while(x <=100);


//--------------------------------------------------//


for ( let i = 1 ; i <= 10 ; i++){
    console.log("I AM ", i);
}


//--------------------------------------------------//

let f  = 1;

while (f<=10){
    console.log(f);
    f++
}


//--------------------------------------------------//


let e  = 1;

do{
    console.log("JS");
    e++
} while (e <=10);


//--------------------------------------------------//

let college = "BBD"

for ( let i of college){
    console.log(i);
    console.log("anshul");
}

//--------------------------------------------------//

let oddsum = 0;

for ( let i = 1 ; i<=10 ; i = i+2){
    console.log("anshul");
    oddsum = oddsum + i;

}

console.log(oddsum);

//--------------------------------------------------//

let evensum=0;
let t = 0
while (t <= 10){
    evensum=evensum+t;
    t=t+2

}
console.log(evensum);
//--------------------------------------------------//


let y= 1;
do{
    console.log("anshul");
    y++;
}while(y<=100);

//--------------------------------------------------//
let fullname="anshul"

for (let i  of fullname){
   
    console.log("i =",i);
}


//--------------------------------------------------//

const schoolinfo ={
    name :"cis",
    affiliation : "till 10+2",
    fees:4000,
}

for (let i in schoolinfo){
    console.log(i,"=", schoolinfo[i]);

}


//--------------------------------------------------//


for (let i=0 ; i<=100; i=i+2){
    console.log(i);
}


//--------------------------------------------------//


for (let i in schoolinfo){
    console.log(i , "=", schoolinfo[i]);
}


//--------------------------------------------------//


let gamenum=69;

let guessnum=prompt("GUESS THE NUMBER");

while( gamenum != guessnum ){
    guessnum=prompt("GUESS AGAIN");
}

console.log("CONGRAT'S YOU GUESSED IT RIGHT");


//--------------------------------------------------//


let NAME = "     AnshAnshAnshul          ";
let TITLE="Gupta";

console.log( NAME.toLowerCase());
console.log(NAME.trim());
console.log(NAME.slice("0" , "8"));
console.log(NAME.charAt("8"));
console.log(NAME+TITLE);
console.log(NAME.replaceAll("Ansh" , "A"));
console.log(TITLE.slice("1", "4"));
console.log(NAME.length);

let abc = `hello there i am learing js right now ${ 1+ 1+2+3} now let's try this ${schoolinfo["name"]}`;
console.log(abc);


console.log(`ANSHUL\tGUPTA`)

//--------------------------------------------------//



let userid= prompt("ENTER YOUR NAME");
let xyz = `@${userid}${userid.length}`;
console.log(xyz);



//--------------------------------------------------//


let score = [85 , 97, 44,37,76,60];

let ttl=0;

for (let i of score){
    ttl=ttl+i;

}


let avg = ttl/score.length;
console.log(avg);


//--------------------------------------------------//



let items=[250,645,300,900,50];



for (let i=0 ; i<=4; i++){
    items[i]=items[i]-items[i]/100 * 10;
  
}
console.log(items);
console.log(`The Discounnted Price Of Items = ${items}`);


//--------------------------------------------------//

let heroes = ["iron man", " spider man" , "hulk" , "flying jutt" , "bat man"];

heroes.push("thor");
heroes.pop();
console.log(heroes);
heroes.toString();
console.log(typeof heroes);

console.log(heroes.slice( 0 , 4));
heroes.unshift("shaktiman");
heroes.shift();
console.log(heroes);

heroes.splice(2 , 1 , "thor" , "krish");
console.log(heroes);



//--------------------------------------------------//



let companies = ["bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];

console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1 , 1 , "Ola");
console.log(companies);


companies.push("Amazon");
console.log(companies);


//--------------------------------------------------//



function calc(a , b) {
    console.log(a+b);
}

console.log(calc(11199830893777 , 329847973284827347));


function abcd(a ,b ,c ,d){
    let s=a+b+c+d;
    return s;
}


console.log(abcd(1,2,3,4));

const fx = (a , b)=>{
    console.log(a*b);
}


let power = (a , b)=>{
    console.log(a**b);
}

//--------------------------------------------------//    


function vowel(msg){
   let count = msg;
   let totalNumber = "" ;

   for (let i of count){
     if( i == "a"){
        totalNumber +=  i;
     }else if( i =="e"){
        totalNumber += i;
     }else if( i == "i"){
        totalNumber += i;
     }else if( i == "o"){
        totalNumber +=  i;
     }else if( i =="u"){
        totalNumber +=   i;
     }else if( i =="A"){
        totalNumber +=   i;
     }else if( i =="E"){
        totalNumber +=   i;
     }else if( i =="I"){
        totalNumber +=   i;
     }else if( i =="O"){
        totalNumber +=   i;
     }else if( i =="U"){
        totalNumber +=   i;
     }
   }
   
   console.log(`TOTAL NUMBER OF VOWELS IN THIS STRING = ${totalNumber.length}`);
}

//--------------------------------------------------//


const countVowel = (str)=>{
    let storage = str;
    let result = 0;
    for (let i of storage){
        if ( i == "a" || i == "e" || i == "i" || i == "o" || i == "u" ||
             i == "A" || i == "E" || i == "I" || i == "O" || i == "U") {

                result++;

             }
         
    }
    console.log(`THE NUMBER OF VOWELS IN THIS STRING IS = ${result}`);
}



//--------------------------------------------------//

let  array =[1 ,2 ,3 ,4];

array.forEach((i , idx ,arr) =>{
    console.log(i , idx ,arr);
})

//--------------------------------------------------//


const number =[1 ,2 , 3 ,4 ,5 ,6 ,7 , 8 , 9, 10];


 let call = (i) =>{
    console.log(`THE SQUARE OF THE NUMBER = ${i **=2}`);
 }
number.forEach(call);

//--------------------------------------------------//


let combo = [1 , "abc" , 4, 74 , "xyz"];

combo.forEach((i) => {
    console.log(i);
})

let box1 =combo.map((i) => {
    return i;
})

let box2 = combo.filter((i) => {
    return i >3;
})


let box3 = combo.reduce((result , current) => {
    return result+current;
})



//--------------------------------------------------//



const studentMarks =[58 , 80,94,72,84, 99,91,74,96,33,95,29,10,66];

let result =studentMarks.filter((i) => {
    return i>90;
})


//--------------------------------------------------//

let input = [prompt("ENTER ANY NUMBER PLEASE")];

let count =[];

for( let i = 1 ; i <=input ;  i++){
  count.push(i); 
}

let totalSum= count.reduce((result , current) => {
    return result+current;
})

console.log(`THE SUM = ${totalSum} `);



let product =count.reduce((result , current) => {
    return result*current;
})


console.log(`THE PRODUCT = ${product}`);



//--------------------------------------------------//


let addLine = document.querySelector("#head");


addLine.innerText = addLine.innerText + " From Anshul";


//--------------------------------------------------//

let divs = document.querySelectorAll(".box");

// divs[0].innerText = "Naruto";
// divs[1].innerText = "Kakashi";
// divs[2].innerText = "Itachi";


for (let i = 0 ;i < 3 ;i++){
    divs[i].innerText = `Unique Text ${i}`;
}


//--------------------------------------------------//


let container = document.querySelector(".box");

console.log(container.getAttribute("class"));

container.setAttribute("class" , "box 1");

//--------------------------------------------------//

let container2 =document.querySelector(".box");

container2.style.color = "red";

container2.style.height = "100px";

container2.style.backgroundColor = "pink";

//--------------------------------------------------//


let create = document.createElement("p");

create.innerText = "Hello!";

let box = document.querySelector(".box");

box.prepend(create);

create.style.fontSize = "20px";

create.remove();


//--------------------------------------------------//

let btn = document.createElement("button");

btn.innerText = "Click me!";

btn.style.backgroundColor = "red";

btn.style.color = "white";

let body = document.querySelector("body");

body.prepend(btn);

//--------------------------------------------------//

let para = document.querySelector(".para");

para.classList.add("newpara"); 


//--------------------------------------------------//


let head = document.querySelector("#head");

head.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}


//--------------------------------------------------//

let modeChanger = document.querySelector("#btn");

let bodyMain = document.querySelector("body");


let color1 = () => {
     if (bodyMain.style.backgroundColor == "white"){
        bodyMain.style.backgroundColor = "rgb(42,42,42)";
        
     } else {
        bodyMain.style.backgroundColor = "white";
    
     }
 }
 
 modeChanger.addEventListener( "click" , color1 );



//--------------------------------------------------//


let obj = {
    Name : "Anshul",
    Age: 18,
}

let sample = {

    work() {
        console.log("do your work");
    },

    Branch : "CS",
}


obj.__proto__ = sample;



//--------------------------------------------------//



class myClass {

    constructor() {
        console.log("anshul");
    }
    
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }


}


let car = new myClass();


class toyotaCar {

    constructor(abc) {
      
        console.log(abc);
    }

    model(abc) {
        console.log("fortuner");
        console.log(abc);
        this.Brand = abc;
    }


}



let toyotaFortuner = new toyotaCar("CAR CREATED");





//--------------------------------------------------//



class User {
    constructor(Name , Email){
        this.name = Name;
        this.email = Email;
        console.log("OBJECT IS CREATED");
    }

    viewData(){
        console.log("Website Data");
    }
}

let user1 = new User("ANSHUL" , "anshul@gamil.com");


let user2 = new User("ANSH" , "ansh@gamil.com");

let user3 = new User("SIDD" , "sidd@gamil.com");


class Admin extends User{
   constructor(name , eamil){
    super(name , eamil);
   }

   editData(){
    console.log("EDIT WEBSITE DATA");
   } 
}


let admin = new Admin("admin1" , "admin1@gamil.com");