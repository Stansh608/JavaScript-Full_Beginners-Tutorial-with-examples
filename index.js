             //Day 01

//First Js  code
console.log('Hae Js');

//changing the paragraph content
function Change(){
    var para1=document.getElementById("para1");
    para1.innerHTML="Hae there";
}

//changing the image on hover
function ChangeOnOver(){
var img=document.getElementById("img01");
img.src="ds_3.jpg";
}

//return image back to original
function ChangeOnOut(){
    var img_return=document.getElementById("img01");
    img_return.src="Classic_car1.PNG";

}

//validating inputs
//Enter a number between 1 and 9
function CheckInt(){
    var input_01=document.getElementById("input01").value;
    passtxt=document.getElementById("passtext");
    if(input_01<9 && input_01>0){
        passtxt.innerHTML="";
        alert("Value accepted ");
        
    
      
    }else{
        passtxt.innerHTML="The number must between 0 and 9";
        passtxt.style.color="red";
    }
    

}
//checking the variable types
document.write(typeof "John");

document.write("<br>"+5+" - "+typeof 5);

//js Objects
var person= {firstName:"Stan",secondName:"Munene", age:21};
var person=null;
document.write("<br>"+person);



                //Day 02
//Functions
//Js functions execute when "sth" invoke them.
function add(){
    var num1=parseInt(document.form_add.num1.value);
    var num2=parseInt(document.form_add.num2.value);
    var tot= (num1+num2).toFixed(2);
    document.form_add.res.value=tot;

}
function _Names(_firstName, _lastName){
   
    return this._firstName+" "+this._lastName;
}
var fullName;
document.writeln("<br>"+_Names("Stan","Munene"));

//html + Javascript events

// 1. onchange event
function checkLength(){
    var on_change=document.getElementById("onchange").value;
    var siz=on_change.length;
    if(siz <= 7){
        document.getElementById("onchange").style.border="2px solid red";
    }else{
        document.getElementById("onchange").style.border="2px solid green";
    

    }

}

// 2. onkeydown event
function checkLength2(){
    var on_change=document.getElementById("onchange1").value;
    var siz=on_change.length;
    if(siz <= 7){
        document.getElementById("onchange1").style.border="2px solid red";
    }else{
        document.getElementById("onchange1").style.border="2px solid green";
    

    }

}

// 3. onkeypress event
function checkLength3(){
    var on_change=document.getElementById("onchange2").value;
    var siz=on_change.length;
    if(siz <= 7){
        document.getElementById("onchange2").style.border="2px solid red";
    }else{
        document.getElementById("onchange2").style.border="2px solid green";
    }


}
/*

//locating the starting index of a text in a string
var str="I was shocked  that stan was not in";
var pstn=str.indexOf("stan");
alert(pstn);// index 20

//locating the index of the last repeated text in a string
var str1="I was shocked  that stan was not in stan";
var pstn1=str1.lastIndexOf("stan");
alert(pstn1);// index 36

//N:B both indexOf() and lastIndexOf() return -1 if the text isnt found

//using search() to locate a txt in a string
var str2="I was shocked  that stan was not in stan";
var pstn2=str2.search("stan");
alert(pstn2);// index 20

*/


/*N:B both search() and indexof() are equal. but search
can take a much powerful search values.
*/

/* Extracting String Parts:
1.slice(start,end)
2.substring(start,end)
3.substr(start,length)
*/

/*1. slice(starting_index,ending_index) starting index letter is usually included
slice() accept -ve indexes e.g slice(-6,-1)
*/
var str="My name is stan";
var extract=str.slice(1,5);
document.writeln("<br>"+extract);//rturns "y na"

/*2.substring(starting_index,ending_index) starting index letter is usually included
similar to slice() on that it does not accept -ve indexes
*/
var str="My name is stan";
var extract1=str.substring(1,5);
document.writeln("<br>"+extract1);//rturns "y na"

/*3.slice(starting_index,string_size) starting index
letter is usually included.
It's similar to slice() only that the second 
parameter is the length
*/
var str="My name is stan";
var extract2=str.substr(1,5);
document.writeln("<br>"+extract2);//rturns "y nam"

/*Replacing String content
use the replace() method
*/
str="here is what I like here";
var changed_text=str.replace("here", "Javascript");//replace the first encountered "here"
document.write("<br>"+changed_text);

//To replace any present "here" text,,,,use:
str="here is what I like here";
var changed_text1=str.replace(/here/g, "Javascript");
document.write("<br>"+changed_text1);

//converting to upperCase
str="this string will be converted to uppercase";
document.write("<br>"+str.toUpperCase());

//converting to lowerCase
str="THIS STRING WILL BE CONVERTED TO LOWER CASE";
document.write("<br>"+str.toLowerCase());

//The concat() to join two or more strings
var txt="Hae";
var txt1="there";
document.write("<br>"+ txt.concat(" ",txt1," ","Mr. Stan"));

/* Extracting String Characters
This can be done in two safe methods:
1. charAt(position) - returns the char at the specified pstn
2. charCodeAt(position)-returns the unicode of char at specified location

*/

// charAt()
str="What Is Your Pet?"
document.write("<br>"+str.charAt(5));//returns I

//charCodeAt()
str="What Is Your Pet?"
document.write("<br>"+str.charCodeAt(5));//returns 73

/* Accessing a String as an Array is Unsafe,,Reasons:
1. Does not work in all browsers
2. It makes strings look like an array

so if you want to access "like str[1]", first convert the string into array.
*/

//Converting strings into array is done using the split()

str="a,b,c,d,e";
arr1=str.split(",");
document.write("<br>"+arr1);
/*
//Javascript Numbers
//numbers can be written with or without decimals.
unlike many programming language does not define different types
of numbers like{ int,short,long,float,double}
Js Numbers are stored double precision floating point nummmbers
following the IEE754 standards.
*/
var x=34.00;
var y=34;
document.write("<br>with decimal: "+x+"<br>"+"Without decimal: "+y);

//Precision
//Integers are accurate upto 15digits;
x = 999999999999999;//this will remain the same
y = 9999999999999999;//returns 10000000000000000
document.write("<br>X: "+x+" Y: "+y);

//mxm number of decimals is 17
x= 0.2+0.4;//x=0.6000000000000001
document.write("<br>"+x);

//Hexadecimals
x= 0xFF;
document.write("<br>"+x);// returns 255

/*
By default javascript displays numbers as base 10 decimals
To display as base 16, 8 or 2 , we use: toString() method.
*/
x=125;
document.write("<br>"+x.toString(16));//returns 7d
document.write("<br>"+x.toString(8));//return 175
document.write("<br>"+x.toString(2));//return 1111101


//              Day 3

//Infinity or -infinity
//Js will return this if you calculate a number outside 
//the largest possible number
// example
var num1=4;
while(num1!=Infinity){
    num1=num1*num1;
    document.write("<br>"+num1);//return the last no as Infinity


}

// NaN - Not a Number : this indicate that a value is not a number
num1=5;
document.write("<br>"+num1/"stan");//returns NaN

//type of NaN
document.write(typeof NaN);//returns a number

/* Numbers can be Objects
Normally JS numbers are primitive values created from literals: var a=65;
Numbers can also be defined as objects as: var y=new Number(123)
*/
var x=123;
var y=new Number(123);
document.write("<br>Number: "+typeof x);
document.write("<br>Object: "+typeof y);
//using Number objects slows down execution speed. Avoid using

//when using == equality operator, equal numbers looks equal
//even with different type
document.write("<br>"+(x==y));//return true

//when using === equality operator: Expect equality in both type and value.
document.write("<br>"+(x===y));//return false

//You can't compare objects
var a=new Number(50);
var b=new Number(50);
document.write("<br>"+(a===b));//return false
document.write("<br>"+(a==b));//return false

/* Number Object Properties
MAX_VALUE   - returns largest possible number in JS
MIN_VALUE   - returns smallest possible number in JS
NEGATIVE_INFINITY - represents -ve infinity(returned on overflow)
NaN               - represent a "Not-a-Number" value
POSITIVE_INFINITY - represent infinity(returned on overflow)
*/
//Min Value
document.write("<br>" +Number.MIN_VALUE);

//Max Value
document.write("<br>" +Number.MAX_VALUE);

//Negative Infinity
document.write("<br>" +Number.NEGATIVE_INFINITY);

//NaN
document.write("<br>" +Number.NaN);

//Positive Infinity
document.write("<br>" +Number.POSITIVE_INFINITY);

//Javascript Number Methods
/*
    Global Methods
Number() - returns a number, converted from its arguement
parseFloat() - Parses its arguement & returns a floating point number
parseInt()   - parses its arguement and returns an integer

    Number Methods
toString() - returns a number as a string
toExponential() - returns a string,with a number rounded and written 
                  using exponential notation.
toFixed() - returns a string, with a number rounded and written with a
                  specified number of decimals
toPrecision() - returns a string, with a number written with a specified length
 valueOf()  -  returns a number as a number
 */

 //toString()
 x=40;
 document.write("<br>"+typeof x.toString());//return a string

 //toExponential() type will be string
 x=3.45684;
 document.write("<br>"+x.toExponential(2));//round into 2dp+exponential
 document.write("<br>"+typeof x.toExponential(4)+" "+x.toExponential(4));//round into 4dp+exponential //type - string
 document.write("<br>"+x.toExponential(8));//round into 8dp+exponential

 //toFixed();
 x=2.345752345;
 document.write("<br>"+x.toFixed(8));//round into 8dp
 document.write("<br>"+x.toFixed(2));//round into 2dp
 document.write("<br>"+x.toFixed(6));//round into 6dp

 //toPrecision() - number written to a specified length
 x=34.567654098;
 document.write("<br>"+x.toPrecision(1));//length 1
 document.write("<br>"+x.toPrecision(3));//rounded off and length 3
 document.write("<br>"+x.toPrecision(5));//rounded off and length 5

 /*Converting variables to Numbers:
 1. the Number() method
 2. the parseInt() method
 3. the parseFloat() method
The above aren't number methods but JS global methods
*/

// The Number() method
x=true;
document.write("<br>"+Number(x));//returns the no of milliseconds since 1.1.1970.
x=new Date();
document.write("<br>"+Number(x));//returns the date in form of a number

//the parseInt() method
document.write("<br>"+parseInt("129"));//returns 129
document.write("<br>"+parseInt("10 129"));//return 10
document.write("<br>"+parseInt("y29"));//return NaN
document.write("<br>"+parseInt("12.9"));//return 12


// the parseFloat() method 
document.write("<br>"+parseFloat("129"));//return 129
document.write("<br>"+parseFloat("129.33"));//return 129.33
document.write("<br>"+parseFloat("10.2 129"));//return 10.2
document.write("<br>"+parseFloat("k1y29"));//return NaN
document.write("<br>"+parseFloat("1y29"));//return 1
document.write("<br>"+parseFloat("55sdy29"));//return 55

// the valueOf() - return a number as a Number
var k=120;
document.write("<br>"+k.valueOf());//return 120
/* the valueOf()
this method is used internally  in javascript to convert number 
objects to primitive values.
There is no reason to use it in your code.
*/

// Math Object - allow you to perform mathematical tasks on numbers
        // Math Object Methods
//1. random() - returns a random number
document.write("<br>"+Math.random());//return random number

//2. min()
document.write("<br>"+Math.min(25,78,92));//return the min number

//3. max()
document.write("<br>"+Math.max(25,78,92));//return the min number

//4. round()
document.write("<br>"+Math.round(92.666));//return 93,,rounds to nearest integer

//5.ceil() - rounds -UP- to nearest integer
document.write("<br>"+Math.ceil(3.1));//returns 4

//6. floor() - rounds -DOWN- to nearest integer
document.write("<br>"+Math.floor(3.9));//returns 3

//7. abs(x)- returns absolute value of x: e.g -9==9
document.write("<br>"+Math.abs(-5)); //5

//8. cos(x) - return cos of x, (x is in radian)
document.write("<br>"+Math.cos(60)); //-0.9524...

//9. pow(x,y) - reutrns the value of x to power of y
document.write("<br>"+Math.pow(5,4)); //625

//10. sin(x) - returns sin of x, x is in radians.
document.write("<br>"+Math.sin(50)); //-0.2623..

//11. sqrt(x) - returns the square root of x
document.write("<br>"+Math.sqrt(25)); //5

//12. tan(x) - returns the tangent of anangle, x in radians
document.write("<br>"+Math.tan(50)); //5

/* Math Constants
i. Math.E - returns Euler's number
ii. Math.PI - returns PI
iii. Math.SQRT2 - returns the square root of 2
iv. Math.SQRT1_2 - returns the square root of 1/2
v. Math.LN2 - returns the natural log of 2
vi. Math.LN10 - returns the natural log of 10
vii. Math.LOG2E - returns base 2 logarithm of E
viii. Math.LOG10E - returns base 10 logarithm of E
*/

document.write("<br>"+Math.E);//returns Euler's number <e>
document.write("<br>"+Math.LN2);//returns ln2
document.write("<br>"+Math.LOG2E);//returns log2E
document.write("<br>"+Math.exp(2));//returns e^2
document.write("<br>"+Math.PI);//returns pie 3.141..
document.write("<br>"+Math.SQRT2);//returns sqrt of 2. only 2 is applicable
document.write("<br>"+Math.SQRT1_2);//returns sqrt of 1/2. reserved for 1/2 only.


//                                   Day 4          

/*  Javascript Dates
Creating Date Objects.
Date objects are created with the new DAte() constructor.
This can be done in 4 ways:
1. new Date()
2. new Date(milliseconds)
3. new Date(dateString)
4. new Date(year,month,day,hours,minutes,seconds,milliseconds)
*/
//new Date() - creates a new date object with the current date & time
var dat=new Date();
document.write(dat);

//new Date(datestring) -creates a new date from the specified and time
var date1=new Date("September 30, 2025 11:20:00");
document.write("<br>"+date1);

/*sing new Date(number)
this one creates a new date object as zero time plus the number
the numer is specified in milliseconds.
Zero time is - 01 January 1970 00:00:00 UTC - .
*/
var date2=new Date(4585545655655);
document.write("<br>"+date2);
/*using Date(7 numbers)
creates a new date object with the specified date and time.
the 7 numbers in order are: year,month,day,hours,minutes,seconds,milliseconds7
*/
var date3=new Date(06,10,13,14,30,30,30);
document.write("<br>"+date3);

/*Date Methods - let you modify the date object
displaying date on HTML is automatically converted to a string 
using the toString() method.
e.g
<p id="demo"></p>
<script>
d = new Date();
document.getElementById("demo").innerHTML = d;
</script>
      is equal to:
<p id="demo"></p>
<script>
d = new Date();
document.getElementById("demo").innerHTML = d.toString();
</script>
*/
//the toUTCString() method - converts a date to UTC string(standard)
var date4=new Date();
document.write("<br>"+date4.toUTCString());

//The toDateString() method - converts a date to a more readable format
var date5=new Date();
document.write("<br>"+date5.toDateString());

/* JavaScript Date Formats
There are usually 4 types:
1. ISO dates
2. Long dates
3. Short dates
4. Full format
*/

//1. Javascript ISO Dates - syntax= (YYYY-MM-DD) most preferred.
var det=new Date("2021-12-20");
document.write("<br>"+det);
//can even be "YYYY-MM"
var det=new Date("2021-12");
document.write("<br>"+det);
//can also be "YYYY"
var det=new Date("2021");
document.write("<br>"+det);
//can be written added hours,mins and seconds as: "YYYY-MM-DDTH:MM:SS"
var det=new Date("2021-12-20T13:48:21");
document.write("<br>"+det);
//NB:UTC (Universal Time coordinates)==GMT(Greenwich Mean Time)

//2.Javascript Long Dates - syntax: "MMM DD YYYY"
var det1=new Date("Jun 30 2023");//month and day can be in any order
document.write("<br>"+det1);

//3. Javascript Short Dates -syntax:"MM/DD/YYYY"
var det2=new Date("04/30/2021");
document.write("<br>"+det2);
//short-dates also accept: "YYYY/MM/DD"
var det3=new Date("2023/10/26");
document.write("<br>"+det3);

//4. Full Date Format
var det4=new Date("thurs april 13 2017 00:34:56 GMT+0100 (East Africa Time)");
document.write("<br>"+det4);

/*
        Date Methods
this assist you to get and set date values: years, months,days,hours,
minutes,seconds,milliseconds
...........Date Get Methods........
getDate() - Get the day as a number (1-31)
getDay() - Get the weekday as a number (0-6)
getFullYear() - Get the four digit year (YYYY)
getHours() - Get the Hour (0-23)
getMilliseconds() - Get the milliseconds(0-999)
getMinutes() - Get the minutes(0-59)
getMonth() - Get the month(0-11)
getSeconds() - Get the seconds(0-59)
getTime() - Get the Time(milliseconds since jan 1 1970)
*/
//the getTime() Method
var det1=new Date();
document.write("<br>"+det1.getTime());//miliseconds

//The getFullYear() Method
var det1=new Date();
document.write("<br>"+det1.getFullYear());//2021

//The getDay() Method
var det1=new Date();
document.write("<br>"+det1.getDay());//3-wednesday

//you can use array to return name of the week.
var det1=new Date();
var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.write("<br>"+week[det1.getDay()]);//Wednesday

/*.........Date set Methods....
setDate() - set the day as a number(1-31)
setFullYear() - set the year (optionally month and day)
setHours() - set the hour (0-23)
setMilliseconds() - set the milliseconds (0-999)
setMinutes() - set the minutes (0-59)
setMonth() - set the month (0-11)
setSeconds - set the seconds(0-59)
setTime() - set the time(milliseconds since jan 1, 1970)
*/
// The setFullYear() Method
var deti=new Date();
deti.setFullYear(2024);
document.write("<br>"+deti);
//also:
var deti=new Date();
deti.setFullYear(2025,3,27);
document.write("<br>"+deti);

//The setDate() Method 1-31
var deti=new Date();
deti.setDate(24);
document.write("<br>"+deti);
//also can be used to add days to a date e.g:
var deti=new Date();
deti.setDate(deti.getDate()+2);
document.write("<br>"+deti);

/* Date Input - Parsing Dates-
Date.parse() is a method used to convert a date
 to milliseconds
*/
var msec=Date.parse("jan 30, 2303");
document.write("<br>"+msec);

var st=new Date(45621300);//using milliseconds to get the date
document.write("<br>"+st);

//Comparing Dates
var today, someday, text;
today=new Date();
someday=new Date();
someday.setFullYear(2012,2,25);
if (today>someday){
    text="Today is After Feb 25 2012";
}else{
    text="Today is before Feb 25 2012";
}
document.write("<br>"+ text);
/*
UTC methods have similar functionalities as plain date methods
only that they it "UTC" inbetween the method.
and again they return UTC dates(Universal Time Zones dates)
e.g:
getDate()==getUTCDate();
getUTCHours()==getHours();
*/

//...........Javascript Arrays........
/*Creating arrays:

1. using literals is the easiest way.
syntax: var array-name=[item1,item2,...];*/
var Names=["Stan", "Munene", "M"];
document.write("<br>"+ Names);

//2. using JS keyword new
var arr=new Array("sat","fri","thurs");
document.write("<br>"+ arr);
//Both above two methods for creating array return similar results
//use the first one <literal> for simplicity readability and execution speed

//Access the Array Elements
document.write("<br>"+ arr[0]);

//modifying an Array Element
arr[0]="Monday";
document.write("<br>"+ arr);

/*NB: 1. you can have values of different types in the same Array
      2. you can have "objects, functions and other arrays" in an Array
*/


//...............Day 05................
arr1=[Date.now,"Today",arr];
document.write("<br>"+ arr1);

/* Array Properties
The Length Properties..this returns the length of the array
*/
document.write("<br>"+arr1.length);//returns 3

/* Adding Array Elements
The easiest is to use push() method as:
*/
var utensils=["knife","kettle","basin"];
utensils.push("Bucket");
document.write("<br>"+utensils);

//adding elements with high indexes can create undefined holes
//in the array. this a bad practise.
var utensils=["knife","kettle","basin"];
utensils[7]="Spoon";
document.write("<br>"+utensils);


//Looping Array Elements
str="come go jump squat up bottom";
var arr2=str.split(" ");
var opposite=" ";
for(var i=0; i<arr2.length; i++){
    opposite+=arr2[i];

}
document.write("<br>"+ opposite);

/*Associative Arrays
thay are arrays with named indexes
Javascript DOES NOT support associative arrays

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
Difference between Arrays and Objects
*Array* use "numbered indexes" while *object* use "named indexes"*/

// Avoid new Array() method : use [] when creating arrays
//reason
var post=new Array(40);//creates 40 undefined elements
var post1=[40];//creates single element array (40):post1[0]=40
document.write("<br>"+post);
document.write("<br>"+ post1);

//Recognizing Arrays
//using typeof- returns object since Js array is an object
document.write("<br>"+ typeof post1);//object

//soln 1 to above is using: Array.isArray() method <ECMAScript>
document.write("<br>"+Array.isArray(post1));//returns true

 //soln 2: creating your own isArray() fxn

function isArray(x){
    return x.constructor.toString().indexOf("Array")> -1;
}
//
document.write("<br>"+ isArray(post));//return true 

//soln 3: the instanceof Operator - return true if an object is created using a constructor.
document.write("<br>"+ (post1 instanceof Array));

//Array methods
//use toString() Method to convert an array into string
var arr3=["volvo","voxy","Premio"];
var str1=arr3.toString();
document.write("<br>"+ str1);
document.write("<br>"+ typeof str1);

/*Popping and Pushing 
The pop() method - removes the last element from the array
*/
var standard=["std1","std2","std3"];
var out=standard.pop();
document.write("<br>"+ out);

/*Pushing 
The push() method - adds a new element to the end of an array
*/
var fav =["music","videos","movies"];
var added=fav.push("Netflix");
document.write("<br>"+ fav);
document.write("<br>"+ fav[3]);

//Removing Element from the first index using the shift() method
var first_poped=fav.shift();
document.write("<br>"+ first_poped);
document.write("<br>" +fav );

//Changing element in the array
fav[2]="Trailer";
document.write("<br>"+fav);

//......Day 06..............
/* The length Property -provides an easy way to append an
element at the end of the array
*/
var input_devices=["keyboard","mouse"];
input_devices[input_devices.length]="stylus";
document.write("<br>"+ input_devices);

//Deleting elements in an array: can be done using the delete operator
delete input_devices[0];
document.write("<br>"+ input_devices);//a hole is left at index 0
//use pop() and shift() to avoid the undefined holes

//Splicing an Array - the splice() method can b used to add new items to an array
var out_devices=["Monitor","LCD","CRT"];
out_devices.splice(2,1, "Speakers","Indicators");
document.write("<br>"+ out_devices);
/*
first parameter -2- the pstn where the new element should be added
second parameter -1- no of the elements that should be removed.
The rest of parameters ("Speaker", "Indicators") - new elements to be added.
*/

//Using splice() to Remove Elements without leaving holes
var removed=out_devices.splice(0,1);
document.write("<br> Removed Elements: "+ removed);
document.write("<br>Remaining array: "+ out_devices);

//.............Day 07.....................

/*Sorting an Array - using the sort() method
sorting alphabetically - capital letters gat higher priority.
*/
var market=["Onions","Potatoes","Maize","Carrot"];
document.write("<br>" +market.sort());
document.write("<br>" +market);//return the sorted Array.

/*Reversing an array  using the reverse() Method.
reverse() method can be used to sort an array in descending
order
*/
document.write("<br>" +market.reverse());//return Potatoes,Onions,Maize,Carrot -since it was sorted earlier
var arr4=[2,7,3,6,8,4];
document.write("<br>" +arr4.reverse());

/* Numeric Sort
by default,the sort() method sorts values as strings.
therefore the sort() method sometimes produce incorrect result 
when sorting numerical values.
*/

var arr4=[2,70,13,69,81,14,100];
document.write("<br>" +arr4.sort());//return 100,13,14,2,69,70,81
//since "1" comes before "2",,that's why .

//To avoid the above problem: use compare function.
var sorted_arr4=arr4.sort(function(a,b){return a-b});
document.write("<br>" +sorted_arr4);

//use the same trick to sort the Array in descending order.
var sort_desc_arr4=arr4.sort(function(a,b){return b-a});
document.write("<br>" +sort_desc_arr4);

/* The compare function
function(a,b){return a-b}
The purpose is to define an alternative sort order
,,It should return a negative,positive or zero
 depending on the arguement
*/

//................Day 08.............
//Joining arrays -the concat() method joins two or more arrays into one
var naming=["Stan","Munene","njen"];
var ages=[24,56,98];
document.write("<br>"+naming.concat(ages));
//returns: Stan,Munene,njen,24,56,98

/*slicing an Array
The Method slices out a piece of an array into a new array
*/

//......................Day 09.............

//slicing the array from index 2.
var str_arr=["where","which","What","When"];
var sub_arr=str_arr.slice(2);
document.write("<br>"+sub_arr);//returns what,when

//The valueOf() Method is the default behaviour for any array
//JS automatically converts an array to a string when a primitive value is expected
/*Other Array Methods
Method	             Description
concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
forEach()	Calls a function for each array element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array
*/

// JS Booleans: true or false
// The Boolean ()
document.write("<br>"+Boolean(7>11));
//anything with real value is True e.g 100,3.45,"hello",-23

//Js Conditions If...else
age=23;
if(age>18){
    //alert("Vote");
}
//else stmt - specify a block to be executed if the condition is false
else{
    //alert("Not elligible");
}
//else if stmt - specify a new condition if the first condition is false

/*Js switch statement - used to select one of many blocks
 of code to be executed.
 . The switch expression is evaluated once.
 . The value of the expression is compared with the value of 
   each case.
 . If there's a match,the associated block of code is executed
 */
switch(new Date().getDay()){
    case 0:
        //alert("Sunday!!");
        break;
    case 1:
        //alert("Monday!!");
        break;
    case 2:
        //alert("Tuesday!!");
        break;
    case 3:
        //alert("Wednesday!!");
        break;
    case 4:
        //alert("Thursday!!");
        break;
    default:
       // alert("not Known");
                                            
}

/*Javascript for loops :
used to execute a block of code a number of times
--------Types of loops supported by JS----
for - loops through a block of code a number of times
for/in - loops through the properties of an object
while - loops through a block of code while a specified
        condition is true
do/while - also loops through a block of code while a 
        specified condition is true
-
---- for loop structure
for (statement 1; statement 2; statement 3) {
    code block to be executed
}
Statement 1 is executed before the loop starts.
Statement 2 defines the condition for running the loop
Statement 3 is executed each time after the loop
has been executed.
*/
// print 1 to 10;
var x=1;
for (;x<11;x++){
    document.write("<br>"+ x);
}

//-----The for/in loop---through properties of an object
var person={fname:"Stan",lname:"munene",age:22};
var x,text="";
for(x in person){
    text+=person[x]+"<br>";
}
document.write("<br>"+ text);

/*Javascript While loop
while loop execute a block of code as long as a specified
condition is true
-----Syntax------
while (condition) {
    code block to be executed
}
*/
var s=2;
while(s<100000000000){
    s+=(s*s);
    
    document.write("<br>"+ s);
    s++;
}

/*The Do/While Loop 
This execute the block once before checking if the condition 
is true, then it will repeat the condition as long as 
the condition is true.
-----syntax----
do {
    code block to be executed
}
while (condition);
*/
var ss=1
do{
    document.write("<br>"+ ss);
    ss++;

}while(ss<20);

//for and while loop are so much similar
//using for loop to collect car names from cars array 
var cars=["Subaru","Toyota","Ford"];
var i=0;
var text="";
for(;cars[i];){
    text+=cars[i]+"<br>";
    i++;
}
document.write("<br>"+text);
//using while loop to collect car names from cars array
var cars=["Subaru","Toyota","Ford"];
var i=0;
var text="";
while(cars[i]){
    text+=cars[i]+"<br>";
    i++;
}
document.write("<br>"+text);

/* JS Break and Continue
The break stmt "jumps out" of a loop or a case in switch
The continue stmt "jumps over" one iteration in the loop.
*/
var j=0;
while(j<8){
    document.write("<br>"+j);
    if(j===4){    
        document.write("<br>"+" Opps!");
        break;
    }
    j=j+1;
}
var k=0;
for(;k<10;k++){
    
    if(k==6){
        document.write("<br>"+"Skipping '6'");
        continue;
    }
    document.write("<br>"+k);
}

/*   Javascript Type Conversion
Js Data types
. string
. number
. boolean
. object
. function

Types of objects:
1. date
2. Object
3. Array

Other 2 data types that can't contain values:
. null
. undefined
*/
document.write("<br>"+typeof false); //returns boolean
document.write("<br>"+typeof [2,4,5,6]);//returns object
document.write("<br>"+typeof new Date());//returns object
document.write("<br>"+typeof NaN);//returns number
document.write("<br>"+typeof function(){});//returns function

//The Constructor Property - returns the constructor fxn for all js variables
document.write("<br>"+"stan".constructor);//returns function String(){[native code]}
document.write("<br>"+2.35.constructor);//returns function Number(){[native code]}
document.write("<br>"+new Date().constructor);//returns function Date(){[native code]}

//Check the constructor to find out if an object is an array.(contains the word "Array")
function isArray(myarray){
    return myarray.constructor.toString().indexOf("Array") > -1;
}
arr6=[2,3,4,5];
document.write("<br>"+isArray(arr6));//returns true
//Check the constructor to find out if an object is a date (contains the word "Date")
function isDate(myDate){
    return myDate.constructor.toString().indexOf("Date") > -1;
}
var date=new Date();
document.write("<br>"+isDate(date));//returns true

//..................Day 10.............
// converting Numbers to Strings - use global method -String()-
document.write("<br>"+typeof String(233));//returns string
//The number method -toString() also does the same
document.write("<br>"+typeof (233).toString());//returns string

//Converting Boolean into Strings
document.write("<br>"+String(false));//returns "false"
document.write("<br>"+typeof String(true));//returns string

//Converting Dates to Strings
document.write("<br>"+typeof Date().toString());//returns string

/*Converting Strings into Numbers -Number()-method
Strings containing numbers (like "3.14") convert to
numbers (like 3.14).
Empty strings convert to 0.
Anything else converts to NaN (Not a number).
*/
document.write("<br>"+Number("35.45"));//returns 35.45
document.write("<br>"+typeof Number("35.45"));//returns number
document.write("<br>"+ Number(""));//returns 0
document.write("<br>"+ Number("  "));//returns 0
document.write("<br>"+ Number("9 98"));//returns NaN
//other conversions
var str="8.98";
document.write("<br>"+ parseFloat(str));//returns 8.98
document.write("<br>"+ typeof parseFloat(str));//returns number
document.write("<br>"+ parseInt(str));//returns 8
document.write("<br>"+ typeof parseInt(str));//returns number
document.write("<br>"+ Math.ceil(parseFloat(str)));//returns 9
document.write("<br>"+ Math.floor(parseFloat(str)));//returns 8
document.write("<br>"+ parseFloat(str).toPrecision(2));//returns 9.0 -num to 2 s.f
document.write("<br>"+ parseFloat(str).toFixed(1));//returns 9.0 num rounded off to 1 d.p

// The unary + operator can be used to convert a variable to a number
var a="34";
var b= + a;
document.write("<br>"+typeof a);//return string 
document.write("<br>"+typeof b);// return number

//converting boolean into number: Number()
document.write("<br>"+Number(false));//return 0
document.write("<br>"+Number(true));//return 1

//converting Dates to numbers: the Number() &/ getTime()
d=new Date();
document.write("<br>"+Number(d));//return as a number
document.write("<br>"+d.getTime());//return as a number

/* JS Regular Expression
regEXP is a sequence of chars that forms a search pattern
They are used to perform all types of text search and 
text replace operations
Syntax:
/pattern/modifiers;
e.g 
var search_item=/stansh/i; stansh-pattern i-modifier(search to
     be case-insensitive)

regEXp usually is used with 2 string methods:
1. The search() - search for a match and return the position of the match
2. The replace() - returns a modified string where the paattern is replaced

*/
//The search() with regEXP
var str= "how are you doing buddy";
document.write("<br>"+str.search(/buddy/i));//returns 18
//using search() with string
document.write("<br>"+str.search("buddy"));//returns 18

//using replace() with regEXP very effective using -g- modifier
var str1="am Stansh. am with my queen.";
var res=str1.replace(/am/g,"Am");
document.write("<br>"+res);//returns Am Stansh. Am with my queen.
//using replace() with string
var res1=str1.replace("am","Am");
document.write("<br>"+res1);//returns Am Stansh. am with my queen.

/* Regular expression modifiers:
i	Perform case-insensitive matching
g	Perform a global match (find all matches
    rather than stopping after the first match)
m	Perform multiline matching
*/

//...............Day 11..................
/* The regExp object is a regular expression object with 
predefined properties and methods.
using test() regExp method.
It searches a string for a pattern,
 and returns true or false, depending on the result.
*/
var patt=/e/;
document.write("<br>"+patt.test("what have you done?"));//returns true

//using the exec() regExp method - returns found text,or null if no match
document.write("<br>"+/e/.exec("Hae there"));//returns e

/* Javascript Errors:
Throw and try to catch.
The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch,
regardless of the result.
*/

//the try catch block
try{
    addlert("Welcome All !");
    
}
catch(err){
    document.getElementById("demo1").innerHTML=err.message;
    //returns addlert is not defined
}

//function to validate input using try throw and catch
//the finally stmt -let you execute code after try & catch,regardless of the result:
function myFunction(){
    var x=document.getElementById("valid_input").value;
    var msg=document.getElementById("messag");
    msg.innerHTML="";
    try{
        if(x== "") throw "empty";
        if(isNaN(x)) throw "Not a Number";
        x=Number(x);
        if(x<1) throw "Too Low";
        if(x>5) throw "Too High";

    }
    catch(err){
        msg.innerHTML="Input is "+err;

    }
    finally{
        document.getElementById("valid_input").style.border="2px solid black";
    }
}

/*Javascript Debugging:
Built-in debuggers can be turned on and off, forcing errors 
to be reported to the user.
With a debugger, you can also set breakpoints
 (places where code execution can be stopped), and examine
 variables while the code is executing.
Normally, you activate debugging in your browser with the F12 key,
 and select "Console" in the debugger menu.
 ..............breakpoints
 In the debugger window, you can set breakpoints in the JavaScript code.

At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.

After examining values, you can resume the execution of code (typically with a play button).
*/

//The debugger keyboard - stops the execution and calls the debugging fxn if available
var c= 12*28;
debugger;
document.write("<br>"+c);

//Javascript Hoisting - behaviour of moving declaration on top
// in JS you can use variable before declaration
bo=17;
document.write("<br>"+bo);
var bo;

//NB: JS only hoist declarations not initializations.
//so ex 1 and ex 2 will give diff results.

//ex 1
var p=24;
var q=35;
document.write("<br>"+p+" "+q);//returns 24 and 35
//ex 2
var p1=24;
document.write("<br>"+p1+" "+q1);//returns 24 and undefined
var q1=35;
//to avoid errors and confusions always declare variables at top of every scope

/* use strict - defines that js code should be executed in "strict mode"
With strict mode, you can not, for example, use undeclared variables.
Strict mode is declared by adding "use strict"; to the beginning 
of a JavaScript or a JavaScript function.
When Declared at the beginning of a JavaScript file, it has global 
scope (all code will execute in strict mode):
*/
function stric(){
    //"use strict";
    try{
     x8=78;
     document.write("<br>"+x8);//wont execute since x8 is undeclared
     }catch(err){
         document.write("<br>"+err.message);
     }
}
stric();
/* why use strict Mode?:
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
In normal JavaScript, a developer will not receive any error feedback
assigning values to non-writable properties.
In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property,
a non-existing variable, or a non-existing object, will throw an error.
*/
//deleting variable is not allowed in strict mode
function strict_exp(){
    "use strict";
    var x9=7;
    
    document.write("<br>"+x9);//wont execute since x8 is undeclared
    //delete x9;//not allowed
}
strict_exp();

/* Js style Guide and Coding Convections:
Coding conventions secure quality:
    Improves code readability
    Make code maintenance easier

    Variable Names
For me I use camelCase for identifier names (variables and functions).
also learn to always put space around operators
don't use tabs for indentations.diff editors interprete tabs differently.
use 4 spaces for identation.

.............Object Rules
General rules for object definitions:
. Place the opening bracket on the same line as the object name.
. Use colon plus one space between each property and its value.
. Use quotes around string values, not around numeric values.
. Do not add a comma after the last property-value pair.
. Place the closing bracket on a new line, without leading spaces.
. Always end  an object definition with a semicolon.

Example
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
For readability, avoid lines longer than 80 characters.
NB: Hyphens can be mistaken as subtraction attempts.
    Hyphens are not allowed in JavaScript names.

Naming Conventions:
Always use the same naming convention for all your code:
. Variable and function names written as camelCase
. Global variables written in UPPERCASE (We don't, but it's quite common)
. Constants (like PI) written in UPPERCASE

Minimize the use of global variables
perform declarations on top
Always treat numbers, strings, or booleans as primitive values. Not as objects.
e.g:
var x = "John";             
var y = new String("John");
(x === y) // is false because x is a string and y is an object.
End your switch with defaults
Avoid using eval()
Use === Comparison
The == comparison operator always converts (to matching types)
before comparison.
The === operator forces comparison of values and type:
so:

0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false

*/
document.write("<br>"+(0==""));//true
document.write("<br>"+(1=="1"));//true
document.write("<br>"+(0===""));//false
document.write("<br>"+(1==="1"));//false

/*Common Mistakes:
1. Accidentally Using the Assignment Operator
JavaScript programs may generate unexpected results if a 
programmer accidentally uses an assignment operator (=), 
instead of a comparison operator (==) in an if statement.

This if statement returns false (as expected) because x is not 
equal to 10:
var x = 0;
if (x == 10)

This if statement returns true (maybe not as expected), 
because 10 is true:
var x = 0;
if (x = 10)

2. Expecting Loose Comparison
In regular comparison, data type does not matter. 
This if statement returns true:
var x = 10;
var y = "10";
if (x == y)

In strict comparison, data type does matter. 
This if statement returns false:
var x = 10;
var y = "10";
if (x === y)

It is a common mistake to forget that switch statements 
use strict comparison:
This case switch will display an alert:
var x = 10;
switch(x) {
    case 10: alert("Hello");
}

This case switch will not display an alert:
var x = 10;
switch(x) {
    case "10": alert("Hello");
}

3. Confusing Addition & Concatenation
Addition is about adding numbers.
Concatenation is about adding strings.

4. Misunderstanding Floats
All numbers in JavaScript are stored as 64-bits Floating point 
numbers (Floats).
All programming languages, including JavaScript, have difficulties 
with precise floating point values:
e.g:
var x = 0.1;
var y = 0.2;
var z = x + y;// the result in z will not be 0.3
if (z == 0.3)//this test will fail

To solve the problem above, it helps to multiply and divide:
var z = (x * 10 + y * 10) / 10;       // z will be 0.3
if (z==0.3)//this test will pass

5. Breaking a JavaScript String

JavaScript will allow you to break a statement into two lines:
Example 1
var x =
"Hello World!";//allowed

But, breaking a statement in the middle of a string will not work:
Example 2
var x = "Hello
World!";// this won't work.

NB:  closing (ending) statements with semicolon is optional in JavaScript.
NB: Never break (split) a return statement.

6. Undefined is Not Null
With JavaScript, null is for objects, 
undefined is for variables, properties, and methods.
To be null, an object has to be defined, otherwise 
it will be undefined.

 ..........Performance in JS.........
 i. Reduce Activity in Loops
Each statement in a loop, including the for statement, 
is executed for each iteration of the loop. so:
Search for statements or assignments that can be placed outside the loop.

Bad Code:
for (i = 0; i < arr.length; i++) {
//the code accesses the length property of an array each time the loop is iterated
}

Better Code:
l = arr.length;
for (i = 0; i < l; i++) {
//this  runs faster
}

ii. Reduce DOM Access
Accessing the HTML DOM is very slow, compared to other JavaScript statements.
If you expect to access a DOM element several times, access it once, and use it as a local variable:

Example
obj = document.getElementById("demo");
obj.innerHTML = "Hello";

iii. Avoid unnecessary variables.
Don't create new variables if you don't plan to save values.
Often you can replace code like this:
var fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;

With this:
document.getElementById("demo").innerHTML = firstName + " " + lastName

. Putting your scripts at the bottom of the page body,
lets the browser load the page first

//.......The End!!!!!
*/
