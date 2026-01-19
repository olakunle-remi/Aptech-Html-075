function externalfun(){
    document.getElementById("demo3").innerHTML =
     "This is from external file";
    document.getElementById("demo3").style.color = "red";
    document.getElementById("demo3").style.fontSize = "30px";
    document.getElementById("demo3").style.fontFamily = "Arial";
    document.getElementById("demo3").style.backgroundColor = "yellow";
    document.getElementById("demo3").style.border = "2px solid black";
    document.getElementById("demo3").style.padding = "10px";
    document.getElementById("demo3").style.textAlign = "center";
    
}

alert("Welcome to JavaScript External File");

 let x = 5;
 let y = 10;
 let z = x + y;
 console.log("The sum of x and y is: " + z);


 let days = 5;
switch(days){
    case 1:
console.log("monday");
            break;
        case 2:
            console.log("tuesday");
            break;
        case 3:
             console.log("wednessday");
            break;
        case 4: 
            console.log("thursday");
            break;
        case 5: 
            console.log("Friday");
            break;
        case 6:
            console.log("saturday");
            break;
        case 7:
            console.log("sunday");
            break;
            default : console.log("invalid");
}