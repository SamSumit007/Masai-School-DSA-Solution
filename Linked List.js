class Node {
    constructor(value){
      this.data=value;
      this.next=null;
    } 
  }
  
  class LinkList{
    constructor(){
      this.head=null;
      this.size=0;
    }
    //add
      add(element){
      var node= new Node(element);
      if(this.head==null){
        this.head=node;
      }
      else{
        var current=this.head;
        while(current.next){
          current=current.next;
        }
        current.next=node;
      }
      this.size++;
    }
    //print
    print(){
      var current=this.head;
      var index=0;
      while(current){
        console.log(current.data,index);
        index++;
        current=current.next;
      }
    }
    //isEmpty
    isEmpty(){
      if(this.size==0){
        return true;
      }
      else{
        return false;
      }
    }
    //remove a particular element // delete
    delete(element){
      var current=this.head;
      var previous=null;
      while(current){
        if(current.data==element){
          if(previous==null){
            this.head=current.next;
          }
          else{
            previous.next=current.next;
          }
          this.size--;
          return true;
        }
        previous=current;
        current=current.next;
      }
    }
    //remove a element from a particular position
    remove(position){
      var current=this.head;
      var previous=null;
      var i=0;
      if(position==0){
        current=current.next;
        this.head=currnet;
      }
     else{
        while(i<position){
          previous=current;
          current=current.next;
          i++;
        }
        current=current.next;
        previous.next=current; 
        return true;
      }
      this.size--;
    }
    //insert at a particular position
    insertAt(element,position){
      if(position>this.size || position<0 && this.size==0){
        return false;
      }
      var node=new Node(element);
      var current=this.head;
      var previous=null;
      var i=0;
      if(position==0){
        node.next=current;
        this.head=node;
      }
      else{
        while(i<position){
          previous=current;
          current=current.next;
          i++;
        }
        previous.next=node;
        previous=previous.next;
        previous.next=current;
        this.size++;
      }
    }
    //reverse linked list
    reverse(){
      var previous = null;
      var current = this.head;
      var next = null;
      while (current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
      }
      this.head = previous;
      return true;
    }
    //Nth Node data
    nthNode(n){
      var current=this.head;
      var fast=this.head;
      for(var i=0;i<n;i++){
        fast=fast.next;
      }
      
      while(fast != null){
        fast=fast.next;
        current=current.next;
      }
      
      return current.data;
    }
    //middle node
    middleNode(){
      var slow=this.head;
      var fast=this.head;
      while(fast != null && fast.next != null){
        fast=fast.next.next;
        slow=slow.next;
      }
      return slow.data;
    }
  
  }