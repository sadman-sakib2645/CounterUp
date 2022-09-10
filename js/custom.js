// array 

// ES5
// let students = ["shawon","alif","arif","shohell","masum","sakib","siam","alif"]
// console.log(students[2])
// console.log(students[3])
// for(i=0; i < students.length; i++){
//     console.log(i)
//     console.log(students[i]);
// }
// function
// function sum(first,second = 0){
//     console.log(first + second)
// }
// sum(10 , 20);

// ES6
// arrow function
// let sakib = ()=>{
//     console.log(20 - 30)
// }
// sakib();
// // map
// students.for((item)=>{
//     console.log(item)
// })

// // foreach
// students.forEach((item)=>{
//     console.log(item)
// })

// array

// let {captain , cr , gangstar } = {
//     captain : "sakib",
//     cr : "sa",
//     gangstar:"afridi"
// };

// console.log(cr)

// ==================================== start  ============================================
// ==================================== CounterUp =========================================

let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter);

arr.map((item)=>{
    console.log(item.innerHTML)
    let count = item.innerHTML;
    item.innerHTML = "";
    let counterNumber = 0;

    function CounterUp() {
        
        item.innerHTML=counterNumber++
        if(counterNumber > count){
            clearInterval(stop);
        }
    }

    let stop = setInterval(()=>{
        CounterUp();
    }, item.dataset.speed / count);
});



// ==================================== End  ==============================================
// ==================================== CounterUp =========================================
