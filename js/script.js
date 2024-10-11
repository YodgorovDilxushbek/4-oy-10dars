//              Sodda misollar
// ##length
// 1-misol
// let arr =[1,2,3,4,5,7,6,56,7,8]
// let sum=arr.length;
// console.log(sum);
// 2-misol
// let arr =`Hello.World!`
// let sum=arr.length;
// console.log(sum);
// 3-misol
// let arr =[1,2,3,4,5,7,6,56,7,8]
// let sum=arr[arr.length -1];
// console.log(sum);

//                   ### 2. Concat
// 1-misol
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let res =arr1.concat(arr2)
// console.log(res);

// 2-misol
// let arr1 = [`salom hammaga`]
// let arr2 = [`nma gap`]

// let res =arr1.concat(arr2)
// console.log(res);

// 3-misol
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let res =arr1.concat(arr2)
// res.unshift( `salom`)
// console.log(res);

//                      ### 3. Includes
// 1-misol
// let arr =[1,2,3,4,5,7,6,56,7,8]
// let res = arr.includes(7)
// console.log(res);

// 2-misol
// let arr = "dasturlash juda qiziq!";
// let searchText = "qiziq";

// let res = arr.includes(searchText);
// console.log(res);

// 3-misol
// let arr =[1,2,30,4,5,7,6,6,10,7,8]
// let res = arr.some(function (arr) {
//     return arr > 10

// })
// console.log(res);

//                          ### 4. IndexOf, LastIndexOf

// 1-misol
// let arr =[1,2,3,4,5,7,6,56,7,8]
// let res=arr.indexOf(7)
// console.log(res);

// 2-misol
// let arr =[1,2,3,4,5,7,6,56,7,8]
// let res=arr.lastIndexOf(7)
// console.log(res);

// 3-misol
// let arr =`salom, hammaga`;
// let res=arr.indexOf(`a`);
// let sum=arr.lastIndexOf(`a`);
// console.log(`birinchi paydo bolish:`+res);
// console.log(`oxirgi paydo bolish:`+sum);

//                      ### 5. Sort
// 1-misol
// let arr =[9,8,6,7,5,4,2,3,1,10]
// arr.sort(function(a,b) {
//     return a - b;
//   });
// console.log(arr);

// 2-misol
// let fruits = ["olma", "banan", "anor", "o'rik"];
// fruits.sort();

// console.log(fruits);

// 3-misol
// let arr =[9,8,6,7,5,4,2,3,1,10]
// arr.sort(function(a,b) {
//     return b - a;
//   });
// console.log(arr);

//                      ### 6. Reverse
// 1-misol
// let arr =[1,22,3,7,54,6,7,8,9]
// arr.reverse();
// console.log(arr);

// 2-misol
// let arr =`salom, hammaga`;
// let res = arr.split('').reverse().join('');
// console.log(res);

// 3-misol
// let arr =[1,2,3,4,5]
// arr.reverse();
// console.log(arr);

//                       to string
//1-misol
// let arr =[1,2,3,4,5]
// let res =arr.toString()

// console.log(res);

// 2-misol
// let arr =[10,20,30,40,50]
// let res =arr.toString()
// console.log(res);

// 3-misol
// let arr =[10,20,30,40,50]
// ZZZZZZZZ
// console.log(res);

//

//                      ### 8. Join
// 1-misol
// let arr =[1,2,3,4,5]
// let res =arr.join(`_`)

// console.log(res);

// 2-misol
// let arr = ["JavaScript", "o'rganish", "juda", "qiziqarli"];
// let res = res.join(' ');
// console.log(res);

// 3-misol
// let arr = ["JavaScript", "o'rganish", "juda", "qiziqarli"];
// let res = arr.join(' |');
// console.log(res);

//                      Push shift
// 1-misol
// let arr =[1,2,3,4];
// arr.push(`salom`)
// console.log(arr);

// 2-misol
// let arr =[1,2,3,4];
// arr.shift()
// console.log(arr);

// 3-misol
// let arr =[1,2,3,4];
// arr.shift()
// arr.push(5)
// arr.push(`salom`)

// console.log(arr);

//                                          ### 10. Unshift, Pop

// 1-misol
// let arr =[1,2,3,4]
// arr.unshift(`salom`)
// console.log(arr);

// 2-misol
// let arr =[1,2,3,4]
// arr.pop()
// console.log(arr);

// 3-misol
// let arr = [10, 20, 30, 40];

// arr.push(50.12);
// arr.pop();

// arr.unshift(5,111);
// arr.shift();
// console.log(arr);

//  qiyin misollar
// 1-misol

// ???????????????????????????????????
// 2-misol
// let arr1 = [1, "hello", 3, true, 5];
// let arr2 = [2, "world", 4, false, 6];
// let res = arr1.concat(arr2)
// let number = res.filter(element => typeof element === 'number');
// console.log(number);

// 3-misol
// let arr = [1, 2, 3, 4, 5];
// let element = 3;

// let index = arr.indexOf(element);

// if (index !== -1) {
//     arr.splice(index, 1);
// } else {
//     arr.push(element);
// }
// console.log(arr);

// 4-misol
// let arr = [1, 2, 3, 4, 2, 5, 6, 2, 7];
// let element = 2;
// let Index1 = arr.indexOf(element);

// let Index2 = arr.lastIndexOf(element);

// let newArr = arr.slice(Index1, Index2 + 1);

// console.log(Index1);
// console.log(Index2);
// console.log(newArr);

// 5-miosl
// let arr = [1, 2, ,993, 4, 2, 5, 6, 2, 7];
// let element = 2;

// let Index1 = arr.indexOf(element);
// let Index2 = arr.lastIndexOf(element);

// if (Index1 !== -1 && Index2 !== -1 && Index1 < Index2) {
//   let newArr = arr.slice(Index1, Index2 + 1);
//   console.log(newArr);
//   console.log("Element topilmadi ");
// }

// 6-misol
// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr.map(num => num * 2);

// let sum = arr2.join(", ");

// console.log(sum);

// 7-misol
// let arr1 = ["hello", "world"];
// let arr2 = ["this", "is"];
// let arr3 = ["javascript", "code"];

// let suum = arr1.concat(arr2, arr3);

// let res = suum.join("-");

// res = res.toUpperCase();

// console.log(res);

// 8-misol

// let arr = ["apple", "banana", "cherry", "date", "elderberry"];

// arr.splice(0, 1);
// arr.splice(arr.length - 1, 1);

// let res = arr.join(":");

// console.log(res);

// 9-misol
// let arr = [5, 2, 8, 1, 4];

// arr.unshift(0);
// arr.push(10);

// console.log( arr);

// arr.sort((a, b) => a - b);

// console.log("Tartiblangan massiv:", arr);

// let res = arr.slice(-3);

// console.log("Oxirgi uch element:", res);



// 10-misol
// let arr = [5, 2, 8, 1, 4, 9, 6];

// arr.reverse();
// console.log("Teskari massiv:", arr); 

// arr.splice(0, 2); 
// arr.splice(arr.length - 3, 3); 

// console.log("O'chirilgan massiv:", arr); 
// arr.sort((a, b) => a - b);

// console.log("O'sish tartibidagi massiv:", arr); 
