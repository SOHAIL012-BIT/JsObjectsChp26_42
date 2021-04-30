
// JAVASCRIPT

// ###############Objects of CHAPTER 26-30###############
//************ Q No. 1
//  var user = parseFloat( prompt("Enter Positive Integer"));
//  var round = Math.round(user);
//  var floor = Math.floor(user);
//  var ceil = Math.ceil(user);
//  document.write("number : " + user+"<br/>"+"round off value : "+ round+"<br/>"+"floor value : "+ floor+"<br/>"+"ceil value : " + ceil);

//************ Q No. 2
// var user = parseFloat( prompt("Enter Positive Integer"));
// var round = Math.round(user);
// var floor = Math.floor(user);
// var ceil = Math.ceil(user);
// document.write("number : " + user+"<br/>"+"round off value : "+ round+"<br/>"+"floor value : "+ floor+"<br/>"+"ceil value : " + ceil);

//************ Q No. 3
// var value = +prompt("Enter value");
// var absValue = Math.abs(value);
// document.write(absValue);   

//************ Q No. 4

// var random = Math.random();
// var random1 = Math.random();
// var filterNum = (random * 6) + 1;
// var filterNum1 = (random1 * 6) + 1;
// var numberOfStars = Math.floor(filterNum);
// var numberOfStars1 = Math.floor(filterNum1);
// document.write("random dice value : "+ numberOfStars+"<br/>"+"random dice value : " +numberOfStars1);

//************ Q No. 5

// var coin = Math.random();
// var coinValue = (coin * 2) + 1;
// var floorValue = Math.floor(coinValue);
// if(floorValue === 2){
//     document.write(floorValue+"<br/>"+"Random coin value : Heads" )
// }
// else{
//     document.write(floorValue+"<br/>"+"Random coin value : Tails");
// }

//************ Q No. 6

// var decimal = Math.random();
//  var improvedNum = (decimal * 100) + 1;
//  var numRange = Math.floor(improvedNum);
//  document.write(numRange);

//************ Q No. 7

//var userWeight = prompt("Enter Weight In Kilograms");
// var DigiWeight = parseFloat(userWeight);
// alert("The Weight of User is : " + DigiWeight+ " Kilograms");


//************ Q No. 8
// var secret = Math.random();
// var improvedNum = (secret * 10) + 1;
// var secretNum = Math.floor(improvedNum);
// var userSecret = +prompt("Enter Secret Number");
// if(secretNum === userSecret){
//     alert("Congrats! You Entered a correct secret number");
// }
// else{
//     alert("Try Again");
// }

// ###############Objects of CHAPTER 31-34###############
//************ Q No. 1
//  var date = new Date();
//  document.write(date);

//************ Q No. 2

// var a = new Date();
// var b = a.getMonth();
// var month = ['January','Feburary','March','April','May','June','July','August','September','Octuber','November','December'];
// var curMonth = month[b];
// document.write("Current Month : "+ curMonth);

//************ Q No. 3

//  var getsdate = new Date();
//  var getsDay = getsdate.getDay();
//  var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//  var curDay = day[getsDay].slice(0,3);
//  document.write("Today is : "+ curDay);

//************ Q No. 4

// var gettingdate = new Date();
//   var gettingDay = gettingdate.getDay();
//   var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//   var curDay = days[gettingDay];
//   if(curDay === "saturday" || "sunday"){
//   document.write("It's Fun day");
//   }
//************ Q No. 5

// var comDate = new Date();
// var dayOfMonth = comDate.getDate();
// if(dayOfMonth<16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//************ Q No. 6

// var nDate = new Date();
// var checkMin = nDate.getTime();
// var curMin = ((checkMin)/1000)/60;
// document.write(nDate +'<br/>' + "Elapsed milliseconds since January 1, 1970: " +checkMin +"<br/>"+"Elapsed minutes since January 1, 1970: "+curMin);

//************ Q No. 7

// var curDate = new Date();
// var time = curDate.getHours();
// if(time<13){
//     alert("It's A.M");
// }
// else{
//     alert("It's P.M");
// }
   
//************ Q No. 8
// var dte = new Date();
// var laterYear = dte.setFullYear(2021);
//  var laterMonth = dte.setMonth(11);
//  var laterDate = dte.setDate(31);
//  var laterHours = dte.setHours(00);
//  var laterMinutes = dte.setMinutes(00);
//  var laterSeconds = dte.setSeconds(00);
//  document.write(dte);

// ###############Objects of CHAPTER 35-38###############

//************ Q No. 1
//  function date (){
//      var a = new Date();
//      document.write(a);
//  }
//  date();

//************ Q No. 2

// function greets(){
//     var fName = prompt("Enter Firstname");
//     var lName = prompt("Enter Lastname");
//     var fullName = (fName+lName)
//     document.write("Welcome to My Website  " + fullName);
// }
// greets();

//************ Q No. 3

// function add (){
//     var value1 = +prompt("Enter first value");
//     var value2 = +prompt("Enter second value");
//     var sumValue = (value1+value2);
//      document.write(sumValue);

// }
// add();

//************ Q No. 4

// function Calculator(){
// var input1 = +prompt("Enter first no");
// var operator =  prompt("Enter operator");
// var input2 = +prompt("Enter second no");

// if(operator == "+"){
// document.write(input1+input2);
// }
// if(operator == "-"){
//     document.write(input1-input2);
//     }
//     if(operator == "*"){
//         document.write(input1*input2);
//         }
//         if(operator == "/"){
//             document.write(input1/input2);
//  }
// }
// Calculator();

////************ Q No. 5
// function sumOfSquares(num) {
//     var num = parseInt(prompt("Enter a number:"));
//     var i;
//     var sum=0;
//     var i = num*num;
//     sum = i;
//     document.write("The squares of  " +num + " is " +sum ) ;
// }
// sumOfSquares();
// //************ Q No. 6

// var start = +prompt("Enter first num");
// var end = +prompt("Enter last num");
// for (i = start; i<=end;i++){
//     document.write(i+"<br/>");
// }
//************ Q No. 7
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(){
// function calculateSquare(){
//   var base = +prompt("Enter base ");
//   var perpendiclar = +prompt("Enter perpendicular");
//   var square = (base*base);
//   var square1 = (perpendiclar*perpendiclar);
// }
// calculateSquare();
// var hypotneous = (square+square1);
// document.write ("(Hypotenuse)^2 = " + (square + square1));
// }
// calculateHypotenuse();
// //************ Q No. 9
// ii. Arguments as variables
// var length = +prompt("Enter  the length of your rectangle.");
// var width = +prompt("Enter the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// document.write('The area of your rectangle is ' + area(length, width));

//************ Q No. 10
// function checkPalindrome(){
//  var arr = prompt("Enter word for search?")
//  var lower= arr.toLowerCase();
//  var newArr =  lower.split("").reverse("").join("");
// if (arr==newArr)
//  return  alert("its a palindrome");
//  return alert("its not a palindrome")
//     }
             
//  checkPalindrome();

//************ Q No. 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase(prompt("Enter Sentence")));

//************ Q No. 12

// function longestWord(word)
// {
  
//     var array1 = word.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(longestWord(prompt("Enter value")));

//************ Q No. 13

// function count (string, letter) 
// {
//  var letter1 = 0;
//  for (var position = 0; position < string.length; position++) 
//  {
//     if (string.charAt(position) == letter) 
//       {
//       letter1 += 1;
//       }
//   }
//   return letter1;
// }

// document.write(count('w3resource.com', 'o'));

//************ Q No. 14
// function calcCircumfrence(radius) {
//     var circum = (Math.PI * radius) * 2;
//   console.log("The circumfrence is " + circum + ".");
//   }
//   function calcArea(radius) {
//     var area = (Math.PI * radius) * radius;
//   document.write("The area is " + area + ".");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);

// ###############Objects of CHAPTER 38-44###############

// //************ Q No. 1
// function power(x, y)
// {
//     if (y == 0)
//         return 1;
//     else if (y % 2 == 0)
//         return power(x, parseInt(y / 2, 10)) *
//                power(x, parseInt(y / 2, 10));
//     else
//         return x * power(x, parseInt(y / 2, 10)) *
//                    power(x, parseInt(y / 2, 10));
// }
 
// let x = 2;
// let y = 3;
 
// document.write(power(x, y));
//************ Q No. 2
// function leapYear(year){
// if(year%100==0)
// {
//     if(year%400==0)
//     {
//         if(year%4==0)
//         {
//             alert("leap Year")
//         }
//         else
//         {
//             alert("Not a leap Year")
//         }
//     }
//     else
//     {
//         alert("Not a leap Year")
//     }
// }
// else
// {
//     alert("Leap Year")
// }}
// var year=+prompt("Enter your year to check")
// leapYear(year)
//************ Q No. 3
// function mean(a,b,c)
// {
//     var meandeno=2;
// var S=(a+b+c)/meandeno
// return S
// }
// function Area(a,b,c)
// {
//   mean(a,b,c)
//     var area=S*(S-a)(S-b)(S-c)
//     alert("Area of Triangle= "+area);
// }
// var a=+prompt("Enter side a if triangle")
// var b=+prompt("Enter side b if triangle")
// var c=+prompt("Enter side c if triangle")
// Area(a,b,c)
//************ Q No. 4