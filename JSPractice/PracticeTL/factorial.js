function fact(num)
{
  let f=1;
  for (let i=num; i>=1; i--)
    {

        f=f*i;

    }

 return f;

}


let g= fact(7);

console.log(g);