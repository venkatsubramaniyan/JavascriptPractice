function digitLength(num)
{
    let count=0;
    while (num>0)

    {
        num=Math.floor(num/10);
        count=count+1;

    }

    return count;

}

function isArmstrong(num)
{
   let r=0;

   let orgNum=num;

   console.log(orgNum);

   let tot=0;
   while(num>0)
    { 
       r=num%10;

       tot= tot+ Math.pow(r,digitLength(orgNum));

       num=Math.floor(num/10);
        
    }

    console.log(tot);

    return (orgNum===tot);

}


let a= isArmstrong(8208);

console.log(a);