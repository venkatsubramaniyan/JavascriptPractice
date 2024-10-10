function checkNumberType(num)
{

    if (num>0)
    {

        return "Positive";
    }

    else if (num<0)
    {
        return "Negative";
    }

    else
    {
       return "zero";

    }
}

let numType=checkNumberType(0);
console.log(numType);