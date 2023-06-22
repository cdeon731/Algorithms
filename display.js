class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        var new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    display() {
        var str = "";
        if (this.head == null) {
            return "Empty List";
        }
        str += this.head.data;
        var runner = this.head.next;
        while (runner != null) {
            str += ", " + runner.data;
            runner = runner.next;
        }
        return str;
    }
}

var SLL1 = new SLL();
console.log(SLL1.display());

SLL1.addFront(76); //=> Node { data: 76, next: null }
console.log(SLL1);

SLL1.addFront(2); //=> Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1);

SLL1.display(); //=> "2, 76"
console.log(SLL1.display());

SLL1.addFront(11.41); //=> Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
console.log(SLL1);

SLL1.display(); //=> "11.41, 2, 76"
console.log(SLL1.display());