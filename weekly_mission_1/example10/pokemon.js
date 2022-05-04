export default class MyPokemon {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hi, I'm ${this.name}!`);
    }
    sayMessage(message) {
        console.log(`${this.name} says: ${message}`);
    }
}