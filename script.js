let button = document.getElementById("search");
let input = document.getElementById("wordInput");
let div = document.getElementById("Result");

let dictionary = {
    "yes":{
        partOfSpeech:"noun",
        definitions:["Used to give an affirmative response.",
        "Used as a response to someone addressing one or otherwise trying to attract one's attention."],
    },
    "panacea":{
        partOfSpeech: "noun",
        definitions: ["An answer or solution for all problems or difficulties."],
    },
    "concatenation":{
        partOfSpeech: "noun",
        definitions: ["A series of interconnected or interdependent things or events."],
    },
    "saw":{
        partOfSpeech: "verb",
        definitions: ["Cut (something) using a saw.",
        "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."],
    },
    "found":{
        partOfSpeech: "adjective",
        definitions: ["Having been discovered by chance or unexpectedly.",
        "(of a ship) Equipped; Supplied."],
    },
    "crane":{
        partOfSpeech: "verb",
        definitions: ["Stretch out one's body or neck in order to see something.",
        "Move (a heavy object) with a crane."],
    },
    "minute":{
        partOfSpeech: "noun",
        definitions: ["A period of time equal to sixty seconds or a sixtieth of an hour.",
        "A sixtieth of a degree of angular measurement (symbol: ʹ)"],
    },
    "grotesque":{
        partOfSpeech: "adjective",
        definitions: ["Comically or repulsively ugly or distorted."],
    },
    "label":{
        partOfSpeech: "noun",
        definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."],
    },
    "debacle":{
        partOfSpeech: "noun",
        definitions: ["A sudden and ignominious failure; a fiasco."],
    },
    "syntax":{
        partOfSpeech: "noun",
        definitions: ["The set of rules that define how JavaScript programs are constructed."],
    },
    "statements":{
        partOfSpeech: "noun",
        definitions: ["Individual instructions or steps in a JavaScript program that perform actions."],
    },
    "Expressions":{
        partOfSpeech: "noun",
        definitions: ["Any valid unit of code that resolves to a value in JavaScript."],
    },
    "Variables":{
        partOfSpeech: "noun",
        definitions: ["Named containers for storing data values in JavaScript."],
    },
    "data types":{
        partOfSpeech: "noun",
        definitions: ["Classifications of data that determine what kind of value a variable can hold in JavaScript."],
    },
    "integers":{
        partOfSpeech: "noun",
        definitions: ["Whole numbers without a fractional component, represented as a subset of the Number type in JavaScript."],
    },
    "doubles":{
        partOfSpeech: "noun",
        definitions: ["Floating-point numbers with decimal points, represented as part of the Number type in JavaScript."],
    },
    "const":{
        partOfSpeech: "noun",
        definitions: ["A keyword in JavaScript used to declare a constant variable whose value cannot be reassigned."],
    },
    "let":{
        partOfSpeech: "noun",
        definitions: ["A keyword in JavaScript used to declare a block-scoped variable that can be reassigned."],
    },
    "Booleans":{
        partOfSpeech: "noun",
        definitions: ["A data type in JavaScript that can have only two values: true or false."],
    },
}

button.addEventListener("click", wordSearch);

function wordSearch() {
    let inputText = input.value.toLowerCase();

    if(!dictionary.hasOwnProperty(inputText)){
        let falseElement = document.createElement('p');
        falseElement.classList.add ("pFalse")
        falseElement.innerText = inputText + " is not in the dictionary";
        div.appendChild(falseElement);
        return
    }

    
    if (dictionary.hasOwnProperty(inputText)){

        console.log(dictionary[inputText]);
        let posElement = document.createElement('pTrue');
        posElement.classList.add("pTrue");
        posElement.innerText = dictionary[inputText].partOfSpeech;
        div.appendChild(posElement);

        for (let i = 0; i < dictionary[inputText].definitions.length; i++){
            let dElement = document.createElement('p');
            dElement.classList.add("pTrue");
            dElement.innerText = (i + 1) + ". " + dictionary[inputText].definitions[i];
            div.appendChild(dElement);
        }
        
    }

    // else{
    //     dictionary.hasOwnProperty !== inputText 


    // }
}



