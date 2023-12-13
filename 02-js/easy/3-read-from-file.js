// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

const testMsg = "Hi this is test";


//This block the server while reading all the content in the file

const txt = fs.readFileSync('text.txt', 'utf-8');
console.log(txt);


//This will execute asynchronusly not blocking the server while reading the file

fs.readFile('text.txt', 'utf-8', (err,txt)=>{
    if(err){
        console.log("Some error occured");
    }else{
        console.log(txt);
    }
})

console.log(testMsg); //This will run at first on the .readFile method and at last on the .readFileSync method