 //scope
 var a=10;
 const b=20;
 let c=40;
 var d=50;

 document.write(`<p>a =${a}</p>`);
 document.write(`<p>b =${b}</p>`);
 document.write(`<p>c =${c}</p>`);
 document.write(`<p>d =${d}</p><hr>`);

 if (d>a){
     //block
     document.write("<p>CONDITION IS TRUE</p>")
     document.write(`<p>a =${a}</p>`);
     document.write(`<p>b =${b}</p>`);
     document.write(`<p>c =${c}</p>`);
     document.write(`<p>d =${d}</p><hr>`);

     var x= 100;   //weak variable
     let y =200;
     const z = 300;

     document.write(`<p>x =${x}</p>`);
     document.write(`<p>y =${y}</p>`);
     document.write(`<p>z =${z}</p><hr>`);   
     }
     document.write(`<p>x =${x}</p>`);

     var isAdmin = false;
     document.write(`<p>isAdmin = ${typeof(isAdmin)}</p>`);
     document.write(`<p>isAdmin = ${isAdmin}</p>`);

     var title = "welcome to js"; /*string and char = string*/
     document.write(`<p>title = ${typeof(title)}</p>`);
     document.write(`<p>title = ${title}</p>`);

     var xx = 12345;
     document.write(`<p>xx = ${typeof(xx)}</p>`);
     document.write(`<p>xx = ${xx}</p>`);

     var yy = 34.58;  /*number,float,hexa and exponential=number*/
     document.write(`<p>yy = ${typeof(yy)}</p>`);
     document.write(`<p>yy = ${yy}</p>`);

     //array
     var colors = ["orange" ,"blue", "red", "green",100, true, 200.5];
     document.write(`<p>colors = ${typeof(colors)}</p>`);
     document.write(`<p>colors = ${colors}</p>`);

     //object
     var user = {
         //key:value = property
         name:"ramesh",
         mobile:9584782556,
         email:"ramesh@gmail.com"
     };
     document.write(`<p>user = ${typeof(user)}</p>`);
     document.write(`<p>user = ${user}</p>`);
     console.table(user);

     //function block = behaviours
     //function functionname(){}= syntax

     function defaultfun() //function declaration
     {
     let test ="this is DEFAULT FUNCTION."
     document.write(`<p>${test}</p>`);
     }

     defaultfun(); //function calling

     function parameterFun(name, email){
     document.write(`<p>this is parameterized function</p>`);
     document.write(`<p>first parameter ${name}</p>`);
     document.write(`<p>second parameter ${email}</p>`);
     }
     parameterfun("javascript", "admin@javascript.com");