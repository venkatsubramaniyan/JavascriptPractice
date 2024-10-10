function calculateGrade(score)
{
   switch (true) {
    case (score >=90 ):
        return "A";
        
    case (score >=81 && score <=90):
        return "B";
            
    case (score >=71 && score <=80):
        return "C";
   
    default:
        return "D";
   }

}

let grade= calculateGrade(60);

console.log(grade);