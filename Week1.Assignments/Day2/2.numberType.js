function NumberType(num){
    console.log("Given Number :" +num)
        if (num>0){
            return console.log("This is Positive Number")
        }
        else if (num<0){
             return console.log("This is Negative Number")
        }  
        else {
            return console.log("This is Neutral Number - 0")
        }
}

let num1=NumberType(12)
let num2=NumberType(0)
let num3=NumberType(-12)