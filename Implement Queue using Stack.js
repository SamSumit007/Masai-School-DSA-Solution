//Complete the function of push and pop and front for a queue, stack object names are S1 and S2.

/*
Stack {
  push()
  top()
  pop()
  isEmpty()
}
*/
class Queue {
    constructor()
    {
        this.S1 = new Stack()
        this.S2 = new Stack()
    }
    push(value) {
    	//write your code here..
    	while(!this.S1.isEmpty()){
    	    this.S2.push(this.S1.top());
    	    this.S1.pop();
    	}
    	this.S1.push(value);
    	while(!this.S2.isEmpty()){
    	    this.S1.push(this.S2.top());
    	    this.S2.pop();
    	}
    	//console.log("111",this.S1.length)
    }
    pop() {
     	//write your code here..
     	return this.S1.pop();
    }
    front() {
    	//write your code here..
    	return this.S1.top()
    }
    isEmpty() {
    	//write your code here..
    	return this.S1.isEmpty();
    }
}
