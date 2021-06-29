/*Cobditions 
if else
== จะเช็คแค่ค่าไม่เช็ค Type
equal ===
Not equal !==
Greater Than >
Less than <
Greater than or equal >=
Less than or equal <=


And &&
Or ||  
Not !
*/

let password = 's';
if (password === ''){
    console.log('ทำไมไม่กรอก password')
}else if(password.length >= 8 && password.length <=12){
    console.log('password is valid');
}else{
    console.log('password is invalid')
}

