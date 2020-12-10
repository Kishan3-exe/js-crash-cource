/* Comment
    !  red  ( New topic )
    ?  blue (Topic sub Part)
    * green   
    ^ yellow
    & pink   (points)
    ~ purple  (Numners)
    todo mustard  (partisan line)
    // grey



*/
    
//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
! Print Hello world
    * console.log('Hello');
*/

//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
!How to sert alert in Html page
    *alert('Yooo');
*/

//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
!variable

   * var b='Karan';
   * console.log(b);
   * var someNumber = 45;
   * console.log(someNumber);
*/

//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
    
!how to pass text in html file ?

    * document.getElementById('someText').innerHTML='Hey There'; 

*/

//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
! This like popup 

        * var age = prompt('What is your age?');
        * console.log(age);  // This line is use for write any things in console
        * document.getElementById('someText').innerHTML=age;  //This line is use for write anythins in html page
*/

//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
! Number is javascript

       * var num1 = 10;
       * num1 = num1+1;
       * console.log(num1);

    ? How to  Increment and Decrement numbers

       * var num1 = 10;
        &  Increment number by 1
            * num1++;
        & Decrement number by 1
            * num1--;

       * console.log(num1);

    ? How to divide, multiply ,remainder

       * console.log(num1 % 5);
       * console.log(num1 * 5);

    ? Increment/ Decrement by any number you want 

       * num1+=10;
       * console.log(num1);
        
*/

//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
    
! Function in Javascript
    ~ 1) Create a Function
    ~ 2) call the Function

    
    ?Simple Function
        & Create
            * function fun(){
            *     alert('This is a function');
            * }
        & Call
            * fun();
    

    
    ? Using variable in function

        * function greeting(){
        *     var name = prompt('What is Your name?');
        *     var result = 'Hello '+ name;
        *     var result= 'Hello'+ ' ' + name;    //^string concatenation
        *     console.log(result);
        * }
        * greeting();
     
    
    ? Pass variable in Function 
            ~ 1) How do argument work in function
            ~ 2) How do we add 2 numbers together in a function

        * function someNumber(num1,num2){
        *     var result = num1 + num2;
        *     console.log(result);
        * }
        * someNumber(10,5)
        * someNumber('Hello',' Karan');
    

*/

//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
! Loop in Javascript
 
    *var num1 = 0;

    ? While loop
        * while(num1<100){
        *     //num1 +=1;
        *     num1 = num1+1;
        *     console.log(num1);
        * }
        
    ? For Loop
        * for(let num1 = 0; num1<=100 ; num1++ ){
        *     console.log(num1);
        * }        
*/

//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
! Data Type

    * let yourAge = 18;                                   //^number
    * let yourName = 'Karan';                             //^string
    * let name = {first: 'Jane', last: 'Doe'};            //^object
    * let truth = false;                                  //^boolean
    * let groceries = ['apple', 'banana','orange'];       //^array
    * let random;                                         //^undefines
    * let nothing = null;                                 //^value null


! String in javascript

    *  let fruit = 'banana';
    *  let moreFruits = 'banana\napple';                 //^ Use \n for new line
    *  console.log(moreFruits);
    *  console.log(fruit.length);                        //^ .length use for length of string
    *  console.log(fruit.indexOf('b'));                  //^ .indexof() use for alphabet number in string
    *  console.log(fruit.slice(2,5));                    //^ .slice use for fing alphabet between 2 to 4(5-1).
    *  console.log(fruit.replace('ban','123'));          //^ .replace use for replace letter
    *  console.log(fruit.toUpperCase());                 //^ .toUpperCase user for conver all letter in uppercase 
    *  console.log(fruit.toLowerCase());                 //^ .toLowerCase use for convert all letter in lowercase
    *  console.log(fruit.charAt(2));                     //^ .charAt() use for find alphabet using sting number
    *  console.log(fruit[2]);                            //^ [] use for find alphabet using sting number
    *  console.log(fruit.split(''));                     //^ .split use for split alphabet like ['b','a','n','a','n','a'
    
    ?Split string using ','
    
    *  let fruit ='banana,apple,orange';
    *  console.log(fruit.split(','));

*/
//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
! Array

     ~ 1)let fruit = ['banana','apple','orange'];
     ~ 2)let fruit = new Array('apple','banana','orange');


     * let fruit = ['banana','apple','orange'];
     * fruit = new Array('apple','banana','orange');     //^ Note: If you use let for one variable then not use let for same variable
    
     & Use for alert
        * alert(fruit[1]);
     & Use for console
        * console.log(fruit[2]);                     //^ access value at index 2nd 

    * fruit[0] = 'pear';                                //^ replace index 0 with pear
    * console.log(fruit);
 
    ? For loop for string

        * for(let i=0 ; i<fruit.length ; i++){
        *     console.log(fruit[i]);
        * }

    ?array Comman method

        * console.log('to String', fruit.toString());
        * console.log(fruit.join(' - '));
        * console.log(fruit,fruit.pop(),fruit);
        * console.log(fruit.pop(),fruit);                     //^ last index remove or pop
        * console.log(fruit.push('blackberries'),fruit);      //^ add new element at last index 
        * console.log(fruit[1]);

        & add new item in array
            * fruit[2]= 'new fruit';
            * console.log(fruit);
        & Remove first index
            * console.log(fruit.shift());                         //^Remove first element
            * console.log(fruit);       
        & Add new first index 
            * console.log(fruit.unshift('kivi'));                 //^ Add new element at first place
            * console.log(fruit);

        & Mearge 2 Array
            * let vegetables = ['asparagus','tomato','broccoli'];
            * let allGroceries = fruit.concat(vegetables);        //^ Concat two array
            * console.log(allGroceries);
        & Find item with index number
            * console.log(allGroceries.slice(1,3));               //^ index 1 to index 2(3-1)
        & Reverce item
            * console.log(allGroceries.reverse());               //^ Reverce all index means start with last index


        & Sort array in  alphabetical order
            * console.log(allGroceries.sort());

        & Sort array in  ascending order
            * let someNumbers = [54,34,1,422,54,24,22,4,1,55,34,86,90];
            * console.log(someNumbers.sort(function(a, b) {return a-b}));

        & Sort array in decending order

            * console.log(someNumbers.sort(function(a, b) {return b-a}));

    ? make array using for loop
    
        * let emptyarray = new Array();
        * for(let i=0 ; i<10 ; i++){
        *     emptyarray.push(i);
        * }
        * console.log(emptyarray);

*/
//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
    ! Objects in javascript 
    ! dictionaties in python

     
    ? Simple object 

    *     let student = {first:'Karan', 
    *             last: 'shah',
    *             age: 25, 
    *             hight: 170
    *         };
    * console.log(student.first);
    * console.log(student["first"]);
    * student.first = 'OM';
    * console.log(student.first);
    

    ? Function call

    * let student = {first:'Karan', 
    *             last: 'shah',
    *             age: 25, 
    *             hight: 170,
    *             
    *             studentInfo: function(){
    *                 return this.first + '\n' + this.last;
    *             }
    * };

    * console.log(student.studentInfo());
*/



//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
! If Else conditionals & switch statements
        ? if else statements
            ~ Conditionals,Control flows(if else)
            ~ 18-35 is my target demographic
            ~  && AND
            ~  || OR

            *  var age = prompt('What is you age?');
            *  if((age>=18) && (age<=35)){
            *      status = 'target demo';
            *      console.log(status);
            *  }
            *  else{
            *      status = " not my adience";
            *      console.log(status);
            *  }


        
        ? Switch statements
            ~ differents between weekday vs. weekend
            ~ day 0 --> Sunday --> weekend
            ~ day 1 --> Monday --> weekday
            ~ day 2 --> Tuesday --> weekday
            ~ day 3 --> Wednesday --> weekday
            ~ day 4 --> Thursday --> weekday
            ~ day 5 --> Frieday --> weekend
            ~ day 6 --> Saturday --> weekend

            * switch(6){
            *     case 0:
            *         text = 'weekend';
            *         break;
            *     case 5:
            *         text = 'weekend';
            *         break;
            *     case 6:
            *         text = 'weekend';
            *         break;
            *     default:
            *         text = 'weekday';
            *         break;
            * }
            * console.log(text);

*/
//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------




//todo ------------------------------------------------------------------------------------------------------------------------------------------------------------
