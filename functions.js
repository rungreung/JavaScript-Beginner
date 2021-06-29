/*
Functions are set of statements that perform specific tasks. 
They structure programs and reduce repetition
Ex.
function add(parament){
    body
} 
*/ 

function add(a,b){
    return a + b;
}
add(50,3)


function calculateVat(money,vat){
    return money * vat / 100
}
const totalVat  = calculateVat(6545648,7)
console.log(totalVat)
console.log(calculateVat(774,7))