//Operators
// task 1
const a = 13;
const b = 113; 
let result;
if (a % 2 == 0) {
    	result = a * b;
    } else {
result = a+b;
}
console.log(result);

//task 2
const x = -0.3;
const y = 3;
if(x > 0 && y > 0)
{
alert('I quarter')
}
else if (x < 0 && y > 0)
{
alert('II quarter')
}
else if (x < 0 && y < 0)
{
alert('III quarter')
}
else if  (x > 0 && y < 0)
{
alert('IIII quarter')
}
else if (x != 0 && y == 0)
{
alert('axis Х');
}
else if (x == 0 && y != 0)
{
alert('axis У')
}
else if (x== 0 && y == 0)
{
alert('Coordinate center')
}
else alert('Pls enter a number')

//task 3 
const c = -3;
const d = 3;
const e = 5;
const SummofThree = c+d+e; 
    switch (SummofThree) {
        case (c => 0, d => 0, e => 0):
            console.log(c+d+e);
        break;
        case (c < 0, d => 0, e => 0):
            console.log(d+e);
        break;
        case (c => 0, d < 0, e => 0):
            console.log(c+e);
        break;
        case (c => 0, d => 0, e < 0):
            console.log(c+d);
        break;
    default: console.log('Pls enter a number')
}

//task 5 
const rating >= 0 && rating <= 100;
switch (rating) {
    case (rating >= 0 && rating < 20):
        console.log('Your grade is F');
    break;
    case (rating >= 20 && rating <= 39 ):
        console.log('Your grade is E'); 
    break; 
    case (rating >= 40 && rating <= 59 ):
    console.log('Your grade is D'); 
    break; 
    case (rating >= 60 && rating <= 74 ):
    console.log('Your grade is C'); 
    break; 
    case (rating >= 75 && rating <= 89 ):
    console.log('Your grade is B'); 
    break; 
    case (rating >= 90 && rating <= 100 ):
    console.log('Your grade is A'); 
    break; 
}
//cycles
//task 1

//task 2
let num = 53;
let flag = true;
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false;
		break; 
	}
}
console.log(flag);
if (flag == true){alert('число простое')} 
else {alert('число имеет больше одного делителя')}

//е
