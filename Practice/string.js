//Find the number of vowels in a string.
// let str = "hello world"
// let count=0
// for(let i=0;i< str.length; i++)
// {
//   if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i)=== 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u')
//     count ++;
// }
// console.log(count);



//Reverse a given string.
// let str = "hello world"
// str = str.split(" ").reverse().join(" ")
// console.log(str);



//Check if a string is a palindrome.
// let str = "anna"
// let a = str.split(" ").reverse().join(" ")
// if(a === str)
//     console.log("yes");
// else
//     console.log("no");


//Replace all spaces in a string with underscores.
// let str = "ascgfgh shjkhjkhk absjhgj"
// let newstr = str.replaceAll(" ", '_')
// console.log(newstr);


//Count how many times a particular character appears in a string.
// let str = "hjgguih fgjhbmn vhgjghkjl"
// let target = 'g'
// let count = 0
// for(let i of str)
// {
//     if (i === target)
//         count++;
// }
// console.log(count);


//Capitalize the first letter of each word in a sentence.
let str = "hgjhgug ghjgghjmn vghtsrtdu"
let a = str.split(" ")
console.log('>>>', a)
for(let i in a)
    {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
        // console.log(a[i])
    } 
    console.log(a.join(" "));

//Check if a string contains another substring.
// let s= "hello world"
// console.log(s.includes("hello"));