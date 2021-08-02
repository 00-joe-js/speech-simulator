const linesOfASpeech = [
    "I am Joe",
    "I have a dog named Penny",
    "She is pretty cute"
];

let i = 0;
setInterval(() => {
    console.log(linesOfASpeech[i]);
    i++;
}, 1000);