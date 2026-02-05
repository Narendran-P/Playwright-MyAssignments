//palindrome

function rev1(a) {
    console.log("The given word is :"+a)
    let data = a.toLowerCase().split("").join("")
        console.log("The updated given word is :"+data)
    let rev = ""
    for(i = data.length-1;i>=0;i--) {
        rev = rev+data[i]
         }
        console.log("The reverse of given word :" + rev);
        return rev; 
        }

function isPalindrome1(b,c) {
    if(b.toLowerCase() === c) {
        return true
    }
    else {
        return false
    }
}

let word = "MaDaM"
let reverseword = rev1(word)
let result = isPalindrome1(word,reverseword)
console.log("Given word is palindrome :" +result)