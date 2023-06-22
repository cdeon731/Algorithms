class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        var new_node = new Node(val); // Creating a new node object with the value provided

        if(!this.head) { // Checking to see if the current list does not have a head node (if the list is empty)
            this.head = new_node; // If the list is empty, place the new node as the head
            return this;
        }
        
        new_node.next = this.head; // If the list is not empty, assign the head to be the next node to the new node
        
        this.head = new_node; // Then finally assign the new_node to be the new head of the list
        return this;
    }

    removeFront() {
        if (this.head == null){
            return this.head;
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this;
    }

    front() {
        if (this.head == null){
            return null;
        }
        else{
            return this.head.data;
        }
    }
}

var SLL1 = new SLL();

//console.log(SLL1.front());
SLL1.addFront(18);
//console.log(SLL1.front());
SLL1.addFront(5);
SLL1.addFront(73);
// console.log(SLL1)

//SLL1.removeFront();

// console.log(SLL1)
