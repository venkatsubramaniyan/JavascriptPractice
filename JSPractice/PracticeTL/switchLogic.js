function performArithmetic(a,b, operation)
{


    switch (operation) {
        case "add":
            return a+b;            
            

        case "subtract": 
            return a-b;          
            

        case "multiply":  
            return a*b;          
            
        case "division":
            return a/b;            
           
    
        default:
            console.log("Please choose the right operation");
            break;
    }


}

let c=performArithmetic(4,50, "addd");

console.log(c);