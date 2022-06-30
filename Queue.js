class Queue{
    constructor(){
      this.Q=[];
      //this.size =Infinity;
      this.length=0;
      this.f=-1;
      this.r=-1;
  
    }
    //enqueue
    Enqueue(value){
      // if(this.r==size-1){
      //   console.log("Queue is full");
      // }
      //else{
        if(this.f==-1){
          this.f=0;
        }
        this.r++;
        this.Q[this.r]=value;
        this.length++;
        return value;
      //}
    }
    //Dequeue
    Dequeue(){
      if(this.f==-1){
        console.log("Queue is Empty");
      }
      else{
        var val=this.Q[this.f];
        this.f++;
        if(this.f>this.r){
          this.f=-1;
          this.r=-1;
        }
        
        //this.Q=this.Q.slice(1,this.length)
        this.length--;
        return val;
      }
    }
    //top -----peek
    top(){
        return this.Q[this.f];
    }

    Print(){
      var que=[];
      for(var i=this.f;i<=this.r;i++){
        que.push(this.Q[i]);
      }
      return que;
    }
    Length(){
      return this.length;
    }
    isEmpty(){
      if(this.length==0){
        return true;
      }
      else{
        return false;
      }
    }
  
  
  }