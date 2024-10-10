function isPalindrome(firstName)
{
    let rev="";

    let firstNameArray= firstName.split("");

    for (let i=firstNameArray.length-1; i>=0; i--)
        {
            rev=rev+firstNameArray[i];
        }

    return (rev===firstName);

}


let g =isPalindrome("malayalam");

console.log(g);

