//Input: s = "Hello World"
let s = "Hello World"
let len1 = s.split(" ")
console.log(len1)
console.log("The lenght of last word of given statement is :" +len1[1].length)

//Input: s = " fly me to the moon "
let s1 = " fly me to the moon "
let final = s1.trim().split(" ")   
console.log(final)
console.log("The lenght of last word of given statement is :" +final[final.length-1].length)

//Write a function to check if two strings are anagrams
function isAnagram(a,b) {
    let word1 = a.trim().toLowerCase().split("").sort().join("");
    let word2 = b.trim().toLowerCase().split("").sort().join("");

    if (word1 == word2) {
        console.log("The given words "+a+"," +b+" are anagram")
    }
    else {
        console.log("The given words "+a+"," +b+ " are not anagram")
    }
}

let data1 = isAnagram("Silent","Listen")
let data2 = isAnagram("hello","world")