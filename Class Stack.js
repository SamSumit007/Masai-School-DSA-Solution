
//Object
var ob={
    name : "Akash",
    age : 20,             //name and age are properties
    print : function(){             //methods
        console.log("min");
    }
}

ob.print();  //min

//Object Method
var ob={
    name : "Akash",
    age : 20,
    print : function(){                  //methods
        //using property in methods by "this." function
        console.log(this.name,this.age);
    }
}

ob.print();  //Akash 20

//class

class stu{
    constructor(){
        this.name="Akash";
        this.age=20;
    }
}
//this is a fixed class
var o1=new stu();
console.log(o1); //stu{name : Akash , age : 20}

// class that we give parameters
class stu{
    constructor(x,y){
        this.name=x;
        this.age=y;
    }
}

var o1=new stu("min",20);
var o2=new stu(); //give undefined properties
console.log(o1);
console.log(o2);

//class for some default values
class stu{
    constructor(x="give name",y="give age"){  
        //we can define default properties by if else statement also
        this.name=x;
        this.age=y;
    }
}
var o1=new stu("min",20);
var o2=new stu(); //give default properties
console.log(o1);
console.log(o2);

//methods by class
class stu{
    constructor(x,y){
        this.name=x;
        this.age=y;
    }
   
    //method by way 1
    print= function(){
        console.log("hello");
    }
//we can name methods as we want
    //method by way 2
    print(){
        console.log("hello---2");
    }

    //accessing properties by obj or class
    print(){
        console.log(this.name,this.age);
    }

}

o1.print //it print hello in way 1 & hello---2 in way 2 and min,20 by accessing properties

////////////////////
//method is a function that does something in obj properties
//Stack
//push,pop,top,isEmpty
class Stack{
    constructor(){
        this.arr=[];
    }
    //push
    push(n){
        //arr[length of arr]=value that we want to push
        this.arr[this.arr.length]=n;
    }

    //pop
    pop(){
        //if arr.length=0 or arr=[] then arr.pop is invalid
        if(this.arr.length==0){ ///(this.isEmpty) we can use it also
            console.log("not a valid method");
            return;
        }
        else{
            //remove last element from arr/stack
            //arr.lenght=arr.length-1
            this.arr.length=this.arr.length-1;
        }
        
    }

    //top print last element of array/stack
    top(){
        console.log(this.arr[this.arr.length-1]);
    }

    //isEmpty  if arr is empty return true else false
    isEmpty(){
        if(this.arr.length==0){
            return true;
        }
        else{
            return false;
        }
    }

    //custom method
    //if all elements are number then print Number stack
    //print not a number stack if any one of the element is not a number
    //if stack is empty then print cannot determine

    custom(){
        if(this.isEmpty){
            console.log("Cannot Determine");
            return;
        }
        else{
            //loop through arr
            for(var i=0;i<this.arr.length;i++){
                if(this.arr[i]!="number"){
                    console.log("not a number stack");
                    return;
                }
            }
            console.log("number stack");
            return;
             
            //another method
            //var flag=true;
            //for(var i=0;i<this.arr.length;i++){
            //    if(this.arr[i]!="number"){
            //        flag=false;
            //        break;
            //   }
            //}
            //if(flag){
            //    console.log("Number Stack");
            //}
            //else{
            //    console.log("Not a Number Stack");
            //}

        }

    }

}

let s1=new Stack();  //Stack{arr:[]}
s1.push(2);         //Stack{arr:[2]}
s1.push(6);           //Stack{arr:[2,6]}
s1.pop();         //Stack{arr:[2]}
s1.pop();         //Stack{arr:[]}
s1.pop();         //not a valid method
s1.push(8);     //Stack{arr:[8]}
s1.top();           //8
s1.pop();    //Stack{arr:[]}
s1.custom();  //Cannot Determine
s1.push(8);     //Stack{arr:[8]}
s1.push(1);    //Stack{arr:[8,1]}
s1.custom();  //number stack
s1.push("me");  //Stack{arr:[8,1,'me']}
s1.custom();  //not a number stack








