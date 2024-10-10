function findMaximum(num)
{

   let max;

   let l= num.length;

   if(l>1)
    {
        max=num[0];

        for (let i=0; i<num.length; i++)
            {

                if(max<num[i])
                    {

                        max=num[i];
                    }
        
                    
        
            }


    

    }

    return max;

   

}

let num=[3,2,11,44,6,7]

let m= findMaximum(num);

console.log(m);
