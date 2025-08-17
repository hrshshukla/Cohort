// (#)-> Remove duplicate values from array 
// let arr  = [1,2,3,4,5,6,5,5,6,6,1,1,1,1,2,2,2]

// let finalArr = [...new Set(arr)]
// console.log(finalArr);

// ------------------------------------------------------------

// (#)-> find second largest number in array 
let arr = [1,2,7,8,8,5,6,3,4]
let filterArr = [...new Set(arr)] // Step 1 : remover duplicate values from array 
let sortedArr = filterArr.sort((a,b)=>b-a) // Step 2 : sort in descending order using (b-a) inside sort()
// console.log(newArr[1]);

// ==>  (One liner) Another way : let newArr = [...new Set(arr.sort((a,b)=>b-a))] 


// -------------------------------------------------------------------

// find the element with highest occurence in array  
let arrX = [3,4,5,6,6,3,3,3,4]
let obj = {}

arrX.forEach((value)=>{
    obj[value] ? obj[value]++ : obj[value] = 1  
})


//--------------------------------------------------------------------------

//-> (#) create a function that takes a function and runs is after 3sec  

function temp(fn) {
    setTimeout(() => {
        fn()
    }, 3000);
}

// temp(()=>{console.log('Im called')})

// ----------------------------------------------------------------------

// make your own map() and use it with arr.myMap()

let arrY = [1,2,3,4,5,6,7,8]

Array.prototype.myMap = function (fnc) {
    let result = []
    this.forEach((value)=>
        result.push(fnc(value))
    )
    return result
}

let newArr = arrY.myMap(x => x+2)
// console.log(newArr);

// console.log(Array.prototype);

// ----------------------------------------------------------------
// 

function throttle(fnc, delay) {
    let lastCall = 0;
    return function () {
        setInterval(() => {
            let currentTime = Date.now()
            if (currentTime - lastCall >= delay) {
                lastCall = currentTime
                fnc()
            }
            else{
                console.log(`wait ${currentTime-lastCall}`);
            }
        }, 1000);
    }
}

let ans = throttle(()=>{console.log("i am called")}, 3000)
ans()