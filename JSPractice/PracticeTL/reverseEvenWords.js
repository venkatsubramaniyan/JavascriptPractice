function getReverse(firstName)
{    
    let rev="";

    let firstNameArray= firstName.split("");

    for (let i=firstNameArray.length-1; i>=0; i--)
        {
            rev=rev+firstNameArray[i];
        }

    return rev;
}


function reverseEvenWord(word)
{
    reverseWord="";
    let wordArray= word.split(" ");



    for (let i=0; i<wordArray.length; i++)
    {
      if (i%2!=0)
        {
            reverseWord=reverseWord+getReverse(wordArray[i])+ " ";

        }

        else
        {

            reverseWord=reverseWord+wordArray[i]+ " ";
        }
      

    }

    return reverseWord;

}

let rv= reverseEvenWord("I am a Software Tester");

console.log(rv);
