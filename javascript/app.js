
// Chapter#1 Assigment
// task - 1
// alert('Hi! Dear how are you')

// task-2

// alert('Error ! Please Enter a valid password. ')

// task-3
// alert('Welcome to JS land.... \nhappy coding')

// console.log('hello , i can run my code through browser console')



// Assignment 2

// var username 

// var my_name='Qamar Ashfaq'

// var message='Enter your name please : '
// alert(message)

// var name='Qamar Ashfaq'
// var age='15 years old'
// var certificate='Certified Mobile Application Development'
// alert(name)
// alert(age)
// alert(certificate)



// task-5
// var chz='pizza \n pizz \n piz \n pi \n p'
// alert(chz)

// task-6

// var email='qamarxyz@gamil.com'
// alert('my email address is '+ email)
// task-7
// var book='Smarter Way to learn JavaScript'
// alert('I am trying to learn JavaScript using this Book' + book)

// task-8
// document.write('yes ! I can now write on the webpage ')

// task-9
// var show='“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬'
// alert(show)



// Chapter 3

// var age=21
// alert('I am '+age+' years old')

// var times
// times='you have visited our website 5 times '
// alert(times)

// var birt_year=1990
// document.write('My Birth Year is '+ birt_year + '<br>')
// document.write('Data type of my declared variable is '+ typeof(birt_year))

// var name= 'John Doe'
// var product=' 5 T-shirts'
// var quantity=' XYZ'

// document.write(name + product + quantity +' from clothing area')




// Chapter-4
// task-1

// var x,y,z =1 , 2 , 3
// alert(x)

// task-2

//  legal variable names
// var hello
// var name
// var job_1
// var _parrot
// var song_hello
 

// illegal variable names
// var hello qamar
// var per-job 
// var 1hello
// var ta ta by by
// var 23 hello-by


// task-3

// document.write('<h1>Rules for naming JS variables</h1>')
// document.write('<p>Variable names can only contain numbers , $ and _. For example $my_1stVariable  </p>')
// document.write('<p> Variables must begin with a letter, $ or _. For example $name, _name or name </p>')
// document.write('<p>  Variable names are case sensitive </p>')
// document.write('<p>  Variable names should not be JS keywords </p>')


// Chapter 6-9

// task-1

// var a=prompt('Enter number : ')

// document.write('The value of a is :' + a + '<br>')
// document.write('................' + '<br>')
// document.write('The value of ++a is ' + ++a  + '<br>' +'Now the value of a is : ' + a + '<br>'  )
// document.write('The value of a++ is ' + a++  + '<br>' +'Now the value of a is : ' + a + '<br>' )
// document.write('The value of --a is ' + --a  + '<br>' +'Now the value of a is : ' + a  + '<br>')
// document.write('The value of a-- is ' + a--  + '<br>' +'Now the value of a is : ' + a + '<br>')

// task-2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write('The value of a is now :' + a + '<br>')

// document.write('The value of b is now :' + b + '<br>')

// document.write('The value of result is  :' + result + '<br>')

// explanation
// document.write('--a it is prefix decrement  in this type of decrement firstly the output is shown then after the origanal value is decremented by 1 ,')

// task-3

// var name= prompt('Enter your name : ');
// alert('Greeting Mr/Mrs : ' + name)

// task-4,5

// var table=prompt('Which number table you want : ');
// var i=1;
// var de = 5 ;
// for (i;i<=10;i++){
//     document.write(de + '*' + i + '=' + de*i + '<br>')
// }
// for (i;i<=10;i++){
//     document.write(table + '*' + i + '=' + table*i + '<br>')
// }

// task-6
// var book_1 = prompt('Enter Book Name : ')
// var book_2 = prompt('Enter Book Name : ')
// var book_3 = prompt('Enter Book Name : ')

// var t_marks=100;

// var book_1_ob_marks=prompt('Enter Your Obtained Marks of '+ book_1)
// var book_2_ob_marks=prompt('Enter Your Obtained Marks of '+ book_2)
// var book_3_ob_marks=prompt('Enter Your Obtained Marks of '+ book_3)



// document.write(' <table border=1> <tr><th>Subjects</th>  <th>Total Marks</th>  <th>Obtained Marks </th>  <th>Percentage</th> </tr> <tr><td>' + book_1 + '</td><td>' + t_marks + '</td><td>' + book_1_ob_marks + '</td><td>' + (book_1_ob_marks/t_marks*100) + '</td></tr> <tr><td>' + book_2 + '</td><td>' + t_marks + '</td><td>' + book_1_ob_marks + '</td><td>' + (book_2_ob_marks/t_marks) + '</td></tr> <tr><td>' + book_3 + '</td><td>' + t_marks + '</td><td>' + book_3_ob_marks + '</td><td>' + (book_3_ob_marks/t_marks) + '</td></tr>')


// Chapter 9-11
// task-1
// var city=prompt('Enter city : ');
// if (city==='karachi'){
//     alert('Welcome to the city of lights ')
// }

// task-2

// var check=prompt('Enter your Gender : ')
// if (check==='male'){
//     alert('Good morning Sir ')
// }
// else {
//     alert('Good morning Mam')
// }

// task-3
// var signal=prompt('Whats the color of the traffic signal right now : ')
// if (signal==='red'){
//     alert('Must Stop ')
// }
// else if(signal==='yellow'){
//     alert('ready to moove ')

// }
// else{
//     alert('Move now')
// }


// task-4
// var fuel=prompt('Enter Remaining fuel of the car in liters : ');
// if (fuel<=0.25){
//     alert( 'Please refill the fuel in your car' )
// }


var book_1_ob_marks=parseInt(prompt('Enter Your Obtained Marks of Book 1','1'),10)
var book_2_ob_marks=parseInt(prompt('Enter Your Obtained Marks of  Book 2','1'),10)
var book_3_ob_marks=parseInt(prompt('Enter Your Obtained Marks of  Book 3','1'),10)


var book_1_t_marks=parseInt(prompt('Enter Total Marks of Book 1' ,'1'),10)
var book_2_t_marks=parseInt(prompt('Enter Total Obtained Marks of  Book 2' ,'1'),10)
var book_3_t_marks=parseInt(prompt('Enter Total Obtained Marks of  Book 3' ,'1'),10)

var ob_t_marks= book_1_ob_marks + book_2_ob_marks + book_3_ob_marks

var Total_marks_of_all=book_1_t_marks + book_2_t_marks + book_3_t_marks

var Percentage =(ob_t_marks/Total_marks_of_all)*100

if (Percentage>=80){
    var g ='A+'
    var remarks='Excellent'
}
else if (Percentage>=70){
    var g ='A'
    var remarks='Good'
}
else if (Percentage>=60){
    var g ='B'
    var remarks='You need to improve '
}
else{
    var g='Fail'
    var remarks='Sorry'
}


document.write('<h2>Marks Sheet</h2> <br><br>  <h3>Total Marks : </h3>' + Total_marks_of_all + ' <br> Marks Obtained  :' + ob_t_marks + '<br> Percentage  :' + Percentage + '<br> Grade  : ' + g + '<br> Remarks : ' + remarks  )


