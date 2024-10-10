const { syncBuiltinESMExports } = require("module");

function launchBrowser(browserName) {

    if (browserName==="chrome")
    {
        console.log("browser is  chrome");
    }

    else
    {
        console.log("browser is not chrome");

    }
      
}


function runTest(testType)
{
  
    switch (testType) {
        case "smoke":
            console.log("test type is smoke");
            break;
        case "sanity":
            console.log("test type is sanity");
            break;
        case "regression":
            console.log("test type is regression");
            break;
            
        default:
            console.log("test type is smoke");
            break;
    }
}


launchBrowser("chromee");

runTest("regressione");