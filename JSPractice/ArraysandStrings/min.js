function findMinimum(num)
{

   let min;

   let l= num.length;

   if(l>1)
    {
        min=num[0];

        for (let i=0; i<num.length; i++)
            {

                if(min>num[i])
                    {

                        min=num[i];
                    }
        
                    
        
            }


    

    }

    return min;

   

}

let num=[3,2,-11,44,6,7]

let m= findMinimum(num);

console.log(m);
