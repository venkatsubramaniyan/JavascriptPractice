function lastWordLength (s)
{

   let sArray=  s.trim().split(" ");
   
   let sArrayLastWord=sArray[sArray.length-1];

   let sArrayLastWordLength=sArrayLastWord.length;

   // console.log(sArrayLastWordLength);

   return `The last word is ${sArrayLastWord} with length ${sArrayLastWordLength}`;

 }
//let  s = "   fly me   to   the moon  "

let s = "Hello World"


 let g=lastWordLength(s);

 console.log(g);

