//Complete the function of push and pop and top for a stack, queue object names are Q1 and Q2.

/*
Queue {
  push()
  front()
  pop()
  isEmpty()
}
*/
class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
    	//write your code here..
    	this.Q2.push(value);
    	while(!this.Q1.isEmpty()){
    	    this.Q2.push(this.Q1.front());
    	    this.Q1.pop();
    	}
    	var temp=this.Q1;
    	this.Q1=this.Q2;
    	this.Q2=temp;
    }
    pop() {
    	//write your code here..
    	return this.Q1.pop();
    }
    top() {
        //write your code here..
        return this.Q1.front();
    }
    isEmpty() {
    	//write your code here..
    	return this.Q1.isEmpty();
    }
}
