function generateFibonaccci(numCount)
{

    let firstNum=0;

    let secondNum=1;

    console.log(firstNum);

    console.log(secondNum);

    let thirdNum;

    for (let i=1; i<numCount; i++)
    {
        

        thirdNum=firstNum+secondNum;

        console.log(thirdNum);

        firstNum=secondNum;
        secondNum=thirdNum;

    }

}

generateFibonaccci(10);