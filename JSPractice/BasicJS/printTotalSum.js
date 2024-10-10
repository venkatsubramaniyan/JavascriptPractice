function getOddNumberTotal()
{
    let total=0;

    for (let i=1; i<=11; i++)
    {
       if(i%2===1)
       {
        total=total+i;
       }

    }

    return total;

}
let tot=getOddNumberTotal();
console.log(tot);

//1 3 5 7 9 11