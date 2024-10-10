function reverseString(firstName)
{

    let firstNameArray= firstName.split("");

    let reverseStr="";

    for (let i=firstNameArray.length-1; i>=0; i--)
    {

        reverseStr=reverseStr+firstNameArray[i];


    }

    return reverseStr;

}

let c= reverseString("venkat");

console.log(c);