/**/const Node = require('./node');/**/
/*
class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}*/


    class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
    }

    get length() {
        
        if (this._head === null && this._tail === null) {
            return 0;
           
        } else {
            var temp = this._head, count = 0;

            while (temp !== null) {
                count++;
                temp = temp.next;
            }

            return count;
        }
    };

    append(data) {

        if (this.isEmpty()) {
            this._head = new Node(data);
            this._tail = this._head;

        } else {
            this._tail.next = new Node(data, this._tail);
            this._tail = this._tail.next;
        }

        return this;
    }

    head() {

        if (this._head === null) {
            return null;
        }

        return this._head.data;
    }
    
    tail() {

        if (this._tail === null) {
            return null;
        }

        return this._tail.data;
    }
    
    at(index) {

        var temp = this._head;

        for (var i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp.data;
    }
    // MANY this.length
    insertAt(index, data) {

        var temp = this._head;

        if (index < 0 || index > this.length) {
            return this;
        }

        if (this.isEmpty() && index === 0) {
            this.append(data);
            return this;
        }

        if (this.isEmpty() && index !== 0) {
            return this;
        }

        if (index === 0) {
            this._head.prev = new Node(data, null, this._head);
            this._head = this._head.prev;

        } else if (index === this.length) {
            this._tail.next = new Node(data, this._tail, null);
            this._tail = this._tail.next;

        } else {

            for (var i = 0; i < index; i++) {
                temp = temp.next;
            }

            temp.prev = new Node(data, temp.prev, temp);
            temp.prev.prev.next = temp.prev;

        }

        return this;
    }
    
    isEmpty() {

        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    clear() {

        this._head = null;
        this._tail = null;

        return this;
    }
    
    //NOT ALL   if tail or head
    deleteAt(index) {

        var temp = this._head;

        if (this.length === 1) {
            this.clear();
            return this;
        }

        for (var i = 0; i < index; i++) {
            temp = temp.next;
        }

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;

        return this;
    }
    //delete element

    //NOT ALL
    reverse() {

        var temp = this._tail, buf;

        while (temp !== null) {
            buf = temp.prev;
            temp.prev = temp.next;
            temp.next = buf;

            temp = temp.next;
        }

        temp = this._head;
        this._head = this._tail;
        this._tail = temp;

        return this;
    }
    //перевернуть

    indexOf(data) {

        var temp = this._head, count = 0;

        while (temp !== null) {
            
            if (temp.data === data) {
                return count;
            }
            
            count++;
            temp = temp.next;
        }

        return -1;
    }
    //return index or -1
}

/**/module.exports = LinkedList;/**/

/*
var list = new LinkedList();

list.append(1);
list.append(123);
list.append(444);

console.log(list.length);
console.log(list.head());
console.log(list.tail());

console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));

list.append(4).reverse().deleteAt(0).clear().insertAt(0, 3);
*/