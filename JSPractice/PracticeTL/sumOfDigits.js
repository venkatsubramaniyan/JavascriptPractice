function digitSum(num)
{
   let tot=0;
   
   let r;

  while(num>0)
    {
     

      r=num%10;

      tot=tot+r;

      num=Math.floor(num/10);

     
    }
   return tot;

}

function digitSumSingleDigit(num)
{
    let a= digitSum(num);

    while(a>9)
        {

           a= digitSum(a);

        }
  
    return a;
}



//let c= digitSum(1345);

//console.log(c);


let d= digitSumSingleDigit(0);
console.log(d);

