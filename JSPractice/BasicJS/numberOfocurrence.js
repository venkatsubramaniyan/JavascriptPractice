function noOfOcurrence(nums,k)
{
     let count=0;
     for (let i=0; i<nums.length; i++)
     {
       if (nums[i]==k)
       {
          count=count+1;

       }

     }

    return count;

}

let nums=[2,4,1,5,2,1,2];

let totalOcc=noOfOcurrence(nums,1);

console.log(totalOcc);
