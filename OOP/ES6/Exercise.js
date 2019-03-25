// Creating a stack where items can be added from the top and removed

// Goal: 
// const stack = new stack();
// stack.push('a'); // undefined
// stack.push('b'); // undefined
// stack.push('c'); // undefined
// stack.count; // 3
// stack.pop(); // "c"
// stack.count; // 2
// stack.peek(); // "b"
// stack.count; // 2
// stack.pop(); // "b"
// stack.pop(); // "a"
// stack.pop(); // Uncaught Error

const _items = new WeakMap();
class Stack {
    constructor() {
        _items.set(this,[]);
    }
    push(obj) {
        _items.get(this).push(obj); // always put at end of array
    }
    pop() {
        const items = _items.get(this);
        if (items.length === 0) {
            throw new Error("There are no items in the stack!");
        } else {
            // _items.get(this).pop();
            return items.pop();
        }
    }
    peek() {
        const items = _items.get(this);
        if (items.length === 0) {
            throw new Error("stack is empty!")
        } else {
            return items[items.length -1];
        }
    }
    get count() {
        return _items.get(this).length;
    }
}