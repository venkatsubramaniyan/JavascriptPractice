function minAndMax(nums)
{
   let maxElement=nums[0];

   let minElement=nums[0];
   
   let minIndex;

   let maxIndex;

   for (let i=0; i<nums.length; i++)
   {

     if (maxElement<nums[i])
     {
        maxElement= nums[i];

        maxIndex=i;
     }

     if (minElement > nums[i])
    {
        minElement=nums[i];

        minIndex=i;

    }

   }


return `Maximum Element: ${maxElement}, Index: ${maxIndex} \nMinimum Element: ${minElement}, Index: ${minIndex}`;

}

let nums = [34,3, 8, 21, 89, 54, 10, 93, 67]


let c= minAndMax(nums);

console.log(c);