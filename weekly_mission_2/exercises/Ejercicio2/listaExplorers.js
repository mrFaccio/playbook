const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

console.log("Ejercicio 2.1");
explorers.forEach(explorer => {
    console.log(explorer.name);
});

console.log("Ejercicio 2.2");
explorers.forEach(explorer => {
   console.log(explorer.stack);
});

console.log("Ejercicio 2.3");
const explorersStacks = explorers.map(explorerStackList => explorerStackList.stack);
console.log(explorersStacks);

console.log("Ejercicio 2.4");
const explorersWithJS = explorers.filter(explorerInListJS => explorerInListJS.stack.includes("js"));
console.log(explorersWithJS);

console.log("Ejercicio 2.5");
const firstExplorerInCdmx = explorers.find(explorerInListCdmx => explorerInListCdmx.city === "CDMX");
console.log(firstExplorerInCdmx);

console.log("Ejercicio 2.6");
const allExercises = explorers.reduce((acc, explorerInList) => acc + explorerInList.exercises_completed, 0);
console.log(allExercises);

console.log("Ejercicio 2.7");
const exercisesFinished = (explorerFinished) => explorerFinished.missions.onboarding.exercisesFinished && explorerFinished.missions.frontend.exercisesFinished;
console.log(explorers.some(exercisesFinished));

console.log("Ejercicio 2.8");
const isFinished = (explorerIsFinished) => explorerIsFinished.missions.onboarding.isFinished && explorerIsFinished.missions.frontend.isFinished;
console.log(explorers.every(isFinished));