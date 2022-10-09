/* const obj = {
    name: "why",
    age: 20,
};

let { name: names = "why" } = { ...obj };
console.log(names); */

let [name, age] = ["神龙教主", 18];
console.log(name);
console.log(age);

let a = null;
let b = 1;
let c = 2
c = b??a;
console.log(c);
