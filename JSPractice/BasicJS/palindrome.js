function isPalindrome(firstName)
{

    let firstNameArray= firstName.split("");

    let reverseStr="";

    for (let i=firstNameArray.length-1; i>=0; i--)
    {

        reverseStr=reverseStr+firstNameArray[i];


    }

    return (firstName==reverseStr)

}

let pal= isPalindrome("malayalam");

console.log(pal);