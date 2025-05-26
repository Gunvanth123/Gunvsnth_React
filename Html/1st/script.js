// alert("Hi");
// console.log("Hi i am G");


//-------- For of loop ----------
// let a="Gunavnth"
// let len=0
// for (let i of a){
//     console.log(i);
//     len++
// }
// console.log(len)


//-------- For in loop ----------
// s={
//     name:"Gunvanth",
//     age:25,
//     cgpa:9.2
// }

// for(let i in s){
//     console.log (i);
//     console.log("key is=",i ,"value is=", s[i]);
// }



// for (let i=0; i <=100; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }



// let number=54
// let guess=prompt("Guess the number:");
// while(guess != number){
//     guess = prompt("Guess again the number:");
// }
// alert("Congrats u have given right number");


// -----------------------------------------------------------------

// Strings
// let str="Gunvanth"
// console.log(str.length)
// console.log(str[2])


// String Literals

// obj= {
//     name : "Gunvanth",
//     age : 34,
//     no : 6767667
// }

// // normal way
// console.log("my name is ", obj.name ,"and age is ", obj.age,"and no is ", obj.no);

// // by using string interpolation--- // better way of implementing 
// console.log(`my name is ${obj.name} and age is ${obj.age} and no is ${obj.no}`);

// console.log(`the sum of first 3 nos is ${1+2+3}`)






// Exercise
// let name = prompt("Enter your name :")
// console.log(`User id is : @${name}${name.length}`)

// -----------------------------------------------------------------

// Arrays
// names = ["Guna","Abhi","Tarun"]
// marks = [86,75,86]

// for(let i=0; i< marks.length ;i++){
// console.log(`Marks of ${names[i]} is ${marks[i]}`);
// }


// marks=[56,75,87,45,87];
// let sum=0;
// for (let i of marks ){
//     sum=sum+i;
// }

// console.log("Avg=",sum/marks.length)




// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     console.log(`value after offer = ${items}`);
//     i++;
// }


// or

// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);



// Methods

// let items = [250, 645, 300, 900, 50];

// items.push(566)
// console.log(items);

// items.pop()
// console.log(items);

// names = ["Guna","Abhi","Tarun"]
// console.log(names.toString()); // Will not change in origin array ..


// names = ["Guna","Abhi","Tarun"]
// extra= ["Rahul","Krishna"]
// extra2=["Kiran"]
// console.log(names.concat(extra,extra2));

// names = ["Guna","Abhi","Tarun"]
// names.unshift("Kiran")
// console.log(names);

// names = ["Guna","Abhi","Tarun"]
// names.shift()
// console.log(names);

// names = ["Guna","Abhi","Tarun","Kiran","Rahul","Krishna"]
// console.log(names.slice(2,5));  // will not effect original array

// names = ["Guna","Abhi","Tarun","Kiran","Rahul","Krishna"]
// console.log(names.splice(2,2,"Hanok")); // will effect original array
// console.log(names);



// -----------------------------------------------------------------

// Functions

// function Addition(a,b){
//     let sum=a+b;
//     // console.log(sum);
//     return sum;
// }

// console.log(Addition(5,7));

// or

// Using Arrow functions

// const Add=(a,b) =>{
//     let sum =a+b;
//     return sum;
// };

// console.log(Add(686,6494));



// function Vowels(a){
//     for(let i in a ){
//         if (a[i] === "a" ||a[i] === "e" || a[i] ==="i" ||a[i] === "o" ||a[i] === "u"){
//             console.log(a[i]);
//         }
//     }
// }

// Vowels("Rahuli");


// const Vowels1=(a)=>{
//     let count=0
//     for(let i in a ){
//         if (a[i] === "a" ||a[i] === "e" || a[i] ==="i" ||a[i] === "o" ||a[i] === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(Vowels1("Rahuli"));



// ForEach loop

// let fruits = ["apple", "Banana", "chaeey", "Goa"];

// const printfruit = (a) => {
//     console.log(a);
// };

// fruits.forEach(printfruit);


// let fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach((fruit, index) => {
//   console.log(`Value: ${fruit}, Index: ${index}`);
// });


// let num=[1,2,3,4,5]

// num.forEach((number,index) => {
//     root = number * number;
//     console.log(`Square of ${number} is : ${root}`);
// });

// let num = [1, 4, 9, 16, 25];

// num.forEach((number, index) => {
//     let root = Math.sqrt(number);
//     console.log(`Square root of ${number} is: ${root}`);
// });


// Map Method for array

// arr=[3,5,7,9]

// let newArr = arr.map((val,index) => {
//     return val * 2
// });

// console.log(newArr)



// Filter method
// num=[2,4,5,6,7,8,9,66]

// let even = num.filter((val) => {
//     return val % 2 == 0; 
// })
// console.log(even)



// Reduce Method 
// num=[2,4,66]
// let sum=0
// sum = num.reduce((res,curr) =>{
//     return res+curr;
// })
// console.log(sum/num.length);


// num=[2,44,5,44,4]
// let sum=0
// sum = num.reduce((res,curr) =>{
//     return res > curr ? res : curr;
// })
// console.log(sum)




// exercise

// 1.
// let marks =[87,98,96,76,94]
// let outmarks=0
// outmarks=marks.filter((val)=>{
//     return val>90
// })
// console.log(outmarks)

// 2.
// let inp=prompt("Enter the number:")
// let start=[1]
// for(i=2;i<=inp;i++){
//     start.push(i);
// };
// console.log(start);
// let sum= start.reduce((pre,curr)=>{
//     return pre+curr;
// });
// console.log(sum);
// let product= start.reduce((pre,curr)=>{
//     return pre*curr;
// });
// console.log(product);


// -----------------------------------------------------------------
// DOM - (Document Object Model)
// let ele = document.getElementsByClassName("Heading");
// ele[0].innerText = "Hi bro"; // ✅ Updates the first element with class "Heading"

// let ele = document.querySelector(".Heading");
// ele.innerText = "Hi bro"; // ✅ Simpler and more flexible


// let div = document.querySelector(".card");
// console.log(div)

// Attributes
// let div = document.querySelector("div");
// console.log(div.getAttribute("class"))

// console.log(div.setAttribute("class","newclass"))


// let btn = document.createElement("button");
// btn.innerText="Click me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// let body=document.querySelector("body")
// body.prepend(btn)

// let p=document.querySelector(".para")
// console.log(p.getAttribute("class"))
// p.setAttribute("class","newpara");
// console.log(p.classList.add("para"))
// console.log(p)




// Mode change -------------------------------------------------------
// const modeButton = document.querySelector("button"); // First button found on page
// const body = document.body;

// modeButton.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");
//   body.classList.toggle("light-mode");

//   // Optional: Update button text
//   modeButton.textContent = body.classList.contains("dark-mode")
//     ? "Switch to Light Mode"
//     : "Switch to Dark Mode";
// });

// // Set default mode when page loads
// window.addEventListener("DOMContentLoaded", () => {
//   body.classList.add("light-mode");
// });

// -----------------------------------------------------------------





// -----------------------------------------------------------------
function toggleSearchBox() {
    const box = document.getElementById('searchBox');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }



// class Parent{
//     hello(){
//         console.log("Hi bro ");
//     }
// }

// class child extends Parent{
//     hello(){
//         super.hello();
//         console.log("Hello son");  
//     }
// }

// let obj = new child;

// obj.hello()


// class college{
//     constructor (name,email){
//         this.name=name ;
//         this.email= email ;
//     }
//     viewDetails () {
//         console.log(`hi`);
//     }
// }

// let guna =new college("guna","guna@gmail.com");


const url = "https://dummyjson.com/products"



const getdata = (async () => {
    let response =await fetch(url);
    let data = await response.json();
    console.log(`Name: ${data.products[0].title}`);
    console.log(`Price: ${data.products[0].price}`);
    console.log(`Rating: ${data.products[0].rating}`);

})()


