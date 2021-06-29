/*
Loop are used to execute a block of code a number of times or until logical condition is false

ex. 
for (let i =0; i<10;i++){
    body
}
} 
*/ 
for(let counter = 0; counter <10; counter ++){
    if (counter %2 !== 0 ){
        continue; //อะไรไม่เท่ากับ 0 ก็กลับไปทำใหม่  1 3 5 7 9 ไม่เท่ากับ 0 ก็จะไม่ไปทำงานที่ console.log
    }
    console.log(counter)

}

console.log(1%2)