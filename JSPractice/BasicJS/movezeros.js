function moveZeros(nums)
{   
    let moveZeroNums=[];
    let zeroCount=0;

    for (let i=0; i<nums.length; i++)
    {
        if (nums[i]===0)
        {
            zeroCount=zeroCount+1;
        }
        else
        {
            moveZeroNums.push(nums[i]);

        }
          
    }

    for (let i=1; i<=zeroCount; i++)
    {
        moveZeroNums.push(0);

    }

    return moveZeroNums;

}

let nums = [0,1,0,3,0,12,0,11];

const l=moveZeros(nums);
console.log(l);


nums = [0];

const m=moveZeros(nums);

console.log(m);




