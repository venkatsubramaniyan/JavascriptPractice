function firstDup(nums) 

{
    let dupNum;

    for (let i=0; i<nums.length-1; i++)
    {


        for (let j=i+1; j<nums.length-1; j++)
        {

            if(nums[i]==nums[j])

            {

                dupNum=nums[i];
                break;
            }
        }
    }


    return dupNum;
}

const nums=[2,4,5,4,2,1];
let dup=firstDup(nums) 
console.log(dup)
