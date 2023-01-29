// Rest and Spread
// Try and catch
// Promises and at the end a small MCQs games

// Spread and Rest

// function someone(x, y,z){
//     return x+y-z;
// }

// let arr =[7,8,2];
// console.log(someone(...arr)); // spread

// Rest

// function sum (...args){
   
//     let sum =0;
//      for (const x of args){
//         sum = sum+x;
//      }
//      return sum;
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,0));

// Try and catch

// syntax

// try{
//     let myname ="Azhar Ansari"
//     let sirname = "mohammed"
//     console.log(myname,);
//     console.log(sirname);
// }catch(err){
//     console.log("sir name variableis not defined");
// }finally{
//     console.log("I will write");
// }

// different types of error we have in javascript
// reference error
// syntax error
// type error

// promise
// Pending
// Fullfilled
// Rejected

// event loop

// const userone =()=>{
//     console.log("Hellow I'm User one");
// }

// const usertwo = ()=>{
//     setTimeout(() => {
//         console.log("It will take time");
//     },3000);
//   console.log("Hellow I'm user Two");
// }

// const userthree = ()=>{
//     console.log("Hellow I'm user Three");
// }

// userone()
// usertwo()
// userthree()


// promise

const one =()=>{
    return "Redirect to home page";
}

const two = ()=>{
    return new promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("creddential correct");
        }, 3000);
    });
}

const three = () => {
    return "redirect to next page"
}

const callme = async () => {
    let valone = one()
    console.log(valone);
}

const valtwo =await two()
console.log(valtwo);

const valthree = three()
console.log(valthree);



