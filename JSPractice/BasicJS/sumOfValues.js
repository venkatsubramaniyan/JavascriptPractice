function getTotalSum()
{

    let totalSum=0;

    for (let i=1; i<=11; i++)
    {

        totalSum=totalSum+i;
    }
    
    return totalSum;

}


let total=getTotalSum();

console.log(total);