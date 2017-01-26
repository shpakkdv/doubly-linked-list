const Node = require('./node');

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
    }

    returnNode(index) {
        var temp = this._head;
        for (var i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

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
        return this.returnNode(index).data;
    }

    insertAt(index, data) {
        var n = this.length;

        if (index > n || index < 0) {
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

        } else if (index === n) {
            this._tail.next = new Node(data, this._tail, null);
            this._tail = this._tail.next;

        } else {
            var temp = this.returnNode(index);
            temp.prev = new Node(data, temp.prev, temp);
            temp.prev.prev.next = temp.prev;
        }
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        var n = this.length;

        if (n === 1) {
            this.clear();
            return this;
        }

        if (index === 0) {
            this._head.next.prev = null;
            this._head = this._head.next;
            return this;
        }

        if (index === n - 1) {
            this._tail.prev.next = null;
            this._tail = this._tail.prev;
            return this;
        }

        var temp = this.returnNode(index); 
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        return this;
    }

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
}

module.exports = LinkedList;