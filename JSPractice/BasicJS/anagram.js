function isAnagram(s1, s2)
{

   let s1SortedArray= s1.split("").sort();

   let s2SortedArray = s2.split("").sort();

   return (s1SortedArray.toString() === s2SortedArray.toString());


}

let s= isAnagram('listen', 'silent');

let b= isAnagram('hello', 'world') 

console.log(s);

console.log(b);