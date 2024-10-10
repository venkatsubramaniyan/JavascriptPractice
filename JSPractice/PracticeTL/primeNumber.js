function isPrime(num)
{

  let flag=true;

  for (let i=2; i<num; i++)
    {

        if(num%i==0)
        {

            flag=false;
            break;

        }


   }

   return flag;

}

let p=isPrime(103);

console.log(p);