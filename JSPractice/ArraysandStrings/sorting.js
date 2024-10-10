function sorting(num)
{
  let temp;
  for (let i=0; i<num.length;i++)
    {


        for ( let j=i+1;j<num.length;j++)
            {

                if(num[i]>num[j])
                    {

                        temp=num[i];

                        num[i]=num[j];

                        num[j]=temp;


                    }



            }
    }


  return num;

}

let num=[3,2,11,4,6,7];

let a=sorting(num);

console.log(a);