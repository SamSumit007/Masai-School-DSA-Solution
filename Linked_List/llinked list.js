class Node{
    constructor(element){
        this.element = element
        this.next = null;
    }
}

class LinkedList{
    //constructor
    constructor(){
        this.head = null
        this.size = 0
    }

    //methods

    //add method=>
    add(data){

        let newNode = new Node(data);

        if(this.head == null){
            this.head = newNode;
            
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }

            curr.next = newNode;
        }
        this.size++;
        
    }

    //print method=>

    printList(){
        let current = this.head;
        let index = 0;
        while(current){
            console.log(current.element, index++);
            current = current.next;
        }

    }


    //insert(elem, index) =>

    insertAt(element, index){
        //if index is greater than size, index is negative, size is = 0 than it is invalide
        if(index>this.size || index < 0 && this.size){
            return false;
        }
        let newNode = new Node(element);
        let current = this.head;
        let prev = null;
        let i = 0;
        
        if(index ===  0){
            newNode.next = current;
            this.head = newNode;
        }else{

            while(i<index){
                prev = current
                current = current.next;
                i++;
            }

            //insert at the index
            prev.next = newNode;

            //move to the inserted node
            prev = prev.next;

            //add the rest of the current to the insterted node
            prev.next = current;

            //increment size
            this.size++;

        }

        
    }

    //delete(elem) method=>

    removeElement(element){

        let current = this.head;
        let prev = null;

        while(current){
            if(current.element === element){
                //do something

                if(prev === null){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
                this.size--;
                // return true;
            }
            prev = current;
            current = current.next;
        }

    }

    // isEmpty =>
    isEmpty(){
        return this.size === 0? true:false;
    }


    //size 
    sizeOfList(){
        return this.size;
    }



}

let list = new LinkedList();

list.add(5)
list.add(2)
list.add(7)
list.add(8)
list.insertAt(0, 2)
// console.log(list.sizeOfList());
list.removeElement(7)
list.printList();
console.log(list);

// const elem = new Node(5);

// const elem2 = new Node(10);  //making new node
// elem.next = elem2;           // connecting both the node
    
// const elem2 = new Node("sid");
// elem.next = elem2;

// console.log(elem);