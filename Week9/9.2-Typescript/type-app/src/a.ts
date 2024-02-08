//? 1. greet func

// function greet(firstName: string) {
//     console.log(`Hello ${firstName}`)
// }

// greet("Sanket")


//? 2. sum func

// function sum(a: number, b: number) : number {
//     return a + b
// }

// console.log(sum(2, 3))

//? 3. is age legal func

// function isLegal(age: number) : boolean {
//    return age >= 18 ? true : false
// }

// console.log(`age is ${isLegal(29)} `)


//? 4. func taking another func as an input

// function func1(fn : () => void) {
//     setTimeout(fn,1000)
// }


// function runAfter1s() {
//     console.log("Hello after 1s")
// }

// func1(runAfter1s)


//? interfaces

// interface User {
//     name: string,
//     age: number,
//     email ?: string  //optional
// }

// function isLegalToVote(user: User) {
//     return user.age >= 18 ? true : false;
// }
   
// function greeting(user: User) {
//     return console.log(`Hello ${user.name}`)
// }

// greeting({
//     name: "sanket",
//     age : 20
// })

// console.log(
//     isLegalToVote({
//     name: "sanket",
//     age: 20,
//     })
// )


//? Implementing Interfaces

// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const emp = new Employee("sanket", 21)
// emp.greet("Helloooooo")

// console.log(`I am ${emp.name} and my age is ${emp.age}`)


//? types in TS

// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

// //? union

// type StringOrNumber = string | number;   //? id of an user can be either number orn string

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101 //! number
// printId("202"); // ID: 202 //! string


//? intersection

// type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   type Manager = {
//     name: string;
//     department: string;
//   };
  
//   type TeamLead = Employee & Manager;    //? teamlead is intersefction of both employee and manager
  
//   const teamLead: TeamLead = {
//     name: "sanket",
//     startDate: new Date(),
//     department: "Software developer"
//   };
  
//   console.log(teamLead)


//? Arrays in TS

// function findMax(nums: number[]) {
//     let max = nums[0];
//     for (let i = 1; i < nums.length; i++){
//         if (nums[i] > max) {
//             max = nums[i]
//         }       
//     }
//     return max;
// }

// let num: number[] = [1, 2, 4, 5, 6];
// console.log(`Max element : ${findMax(num)}`)

// TODO :  filtering valid voters

interface Person {
    firstName: string, 
    lastName: string,
    age : number
}

function validVoters(persons : Person[]) {
    return persons.filter(x => x.age >= 18)
}

console.log(
    validVoters([{
        firstName: "sanket", 
        lastName: "jagdale",
        age : 17
    }, {
        firstName: "suyog", 
        lastName: "jagdale",
        age : 20
        }])
)