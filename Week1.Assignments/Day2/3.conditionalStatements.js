function launchBrowser(browserName) {
    if (browserName.toLowerCase() == "chrome"){
        console.log("launch Chrome Browser")
    }
    else {
        console.log("launch other browser")
    }
}

function runTests(testType){
   switch (testType.toLowerCase()) {
    case "smoke":
     console.log("Perform smoke Test");
        break;
    case "sanity":
     console.log("Perform Sanity Test");
        break;
    case "regression":
     console.log("Perform Regression Test");
        break;
    default:
     console.log("Perform Smoke Test");
   } 
}

launchBrowser("CHRome");
runTests("SaNiTy");