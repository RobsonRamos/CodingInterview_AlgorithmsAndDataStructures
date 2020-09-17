// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.insertAt(data, 0);
    }

    size(){
        let count = 0;
        let node = this.head;
        
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst(){
        return this.getAt(0);
    }

    getLast(){
        this.getAt(this.size() - 1);
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        this.head = this.head == null ? null : this.head.next;
    }

    removeLast(){
        let node = this.head;

        if(! node || ! node.next){
            this.head = null;
        }
        else{
            let previous = node;

            while(node.next){
                previous = node;
                node = node.next;
            } 
            previous.next = null;
        }
    }

    insertLast(value){

        var node = new Node(value);
        
        var last = this.getLast();

        if(last != null){
            last.next = node;
        }
        else{
            this.head = node;
        }
    }

    getAt(index){
        let count = 0;

        let node = this.head;

        while(count !== index){
            if(! node || ! node.next){
                return null;
            } 
            node = node.next;
            count++;
        }
        return node;

    }

    removeAt(index){

        if(index === 0){
            this.head = this.head ? this.head.next : null;
        }
        else{

            let before = this.getAt(index - 1);

            if(before){
                let after = this.getAt(index + 1); 
                before.next = after;
            }
        }
    }

    insertAt(data, index){
        var node = new Node(data);

        if(index === 0){
            node.next = this.head;
            this.head = node;
        }
        else{

            let previous = this.getAt(index - 1);
            let next = this.getAt(index);
            if(previous){
                previous.next = node;
                node.next = next;            
            }
            else{
                let last = this.getLast();
                last.next = node;
            }
        }

    }

    forEach(funct){ 

        if(this.head){

            let node = this.head;
            
            while(node){
                funct.apply(node);
                node = node.next;
            }
        } 
    }
}

module.exports = { Node, LinkedList };
