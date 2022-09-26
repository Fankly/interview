class Person {
    #name;
    #age;
    static sex;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
        this._name = name;
        this._age = age;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        this.#age = age;
    }

    static eat() {
        console.log(this.#name + "吃东西");
    }
}

let p1 = new Person("张三", 18);
console.log(p1.name);
Person.sex = "男";
console.log(Person.sex);
