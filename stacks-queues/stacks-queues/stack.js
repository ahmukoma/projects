/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
      let node = new Node(val);
      this.last.next = node;
      this.last = node;
      this.size = this.size + 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
      let end = this.last;
      let node = this.first;
      
      while(node.next){
          if (!node.next.next){
              node.next = null
          }else{
              node = node.next;
          }
      }
      
      this.size = this.size - 1;
      return end;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
      return this.first;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
      return this.size === 0;
  }
}

module.exports = Stack;
