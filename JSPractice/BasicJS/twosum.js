function twoSum(nums,target)
{
    let targetArray=[];

   for (let i=0; i<nums.length; i++)
   {

    for (let j=i+1; j<nums.length; j++)
    {
         if (nums[i]+nums[j]==target)
         {
            targetArray.push(nums[i],nums[j]);

         }

    }
   }

   return targetArray;

}

let nums=[2,4,7,8,11,14];

let targetArr=twoSum(nums ,18);

console.log(targetArr);